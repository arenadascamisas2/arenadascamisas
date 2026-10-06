/* Autenticação real da Arena das Camisas via Supabase Auth. */
(() => {
  const { createClient } = window.supabase;
  const client = createClient(window.ARENA_SUPABASE_URL, window.ARENA_SUPABASE_KEY);
  window.arenaSupabase = client;

  const page = location.pathname.split('/').pop() || 'index.html';
  const isHome = page === '' || page === 'index.html';

  function safeRedirect(value) {
    if (!value) return 'index.html';
    try {
      const url = new URL(value, location.href);
      if (url.origin !== location.origin) return 'index.html';
      return url.pathname.split('/').pop() + url.search + url.hash;
    } catch { return 'index.html'; }
  }

  function loginUrl(action) {
    const url = new URL('login.html', location.href);
    url.searchParams.set('redirect', safeRedirect(action || location.href));
    return url.href;
  }

  async function getSession() {
    const { data } = await client.auth.getSession();
    return data.session;
  }

  async function requireAuth(actionUrl) {
    const session = await getSession();
    if (session) return true;
    location.href = loginUrl(actionUrl);
    return false;
  }

  window.arenaRequireAuth = requireAuth;

  async function loadFavorites() {
    const session = await getSession();
    if (!session || typeof wishes === 'undefined') return;
    const { data, error } = await client.from('favorites').select('product_id').eq('user_id', session.user.id);
    if (error) {
      console.warn('Não foi possível carregar favoritos:', error.message);
      return;
    }
    wishes = (data || []).map(row => Number(row.product_id));
    localStorage.setItem('arenaWishes', JSON.stringify(wishes));
    if (typeof renderProducts === 'function') renderProducts();
    if (typeof renderWishes === 'function') renderWishes();
  }

  window.arenaSyncFavorite = async (productId, isFavorite) => {
    const session = await getSession();
    if (!session) return;
    if (isFavorite) {
      const { error } = await client.from('favorites').upsert({ user_id: session.user.id, product_id: String(productId) }, { onConflict: 'user_id,product_id' });
      if (error) console.warn('Erro ao salvar favorito:', error.message);
    } else {
      const { error } = await client.from('favorites').delete().eq('user_id', session.user.id).eq('product_id', String(productId));
      if (error) console.warn('Erro ao remover favorito:', error.message);
    }
  };

  function getUserAvatar(user) {
    const meta = user?.user_metadata || {};
    const identityData = user?.identities?.[0]?.identity_data || {};
    return meta.avatar_url || meta.picture || meta.photo_url || identityData.avatar_url || identityData.picture || identityData.photo_url || '';
  }

  function getUserName(user) {
    const meta = user?.user_metadata || {};
    return meta.full_name || meta.name || meta.user_name || (user?.email ? user.email.split('@')[0] : 'Minha conta');
  }

  function initialsFor(user) {
    const name = getUserName(user).trim();
    const parts = name.split(/\s+/).filter(Boolean);
    if (!parts.length) return 'A';
    return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2)).toUpperCase();
  }

  function avatarMarkup(user, className='') {
    const url = getUserAvatar(user);
    const initials = initialsFor(user);
    if (url) return `<img src="${String(url).replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" alt="Foto de perfil" referrerpolicy="no-referrer" class="${className}" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'avatar-fallback',textContent:'${initials}'}))">`;
    return `<span class="avatar-fallback">${initials}</span>`;
  }

  function closeProfileMenu() {
    const menu = document.getElementById('profileMenu');
    if (!menu) return;
    menu.hidden = true;
    document.getElementById('accountLink')?.setAttribute('aria-expanded', 'false');
  }

  function openProfileMenu() {
    const menu = document.getElementById('profileMenu');
    if (!menu) return;
    menu.hidden = false;
    document.getElementById('accountLink')?.setAttribute('aria-expanded', 'true');
  }

  async function updateAccountLink() {
    const link = document.getElementById('accountLink');
    if (!link) return;
    const avatar = document.getElementById('accountAvatar');
    const label = document.getElementById('accountLabel');
    const menu = document.getElementById('profileMenu');
    const menuAvatar = document.getElementById('profileMenuAvatar');
    const menuName = document.getElementById('profileMenuName');
    const menuEmail = document.getElementById('profileMenuEmail');
    const session = await getSession();
    if (session) {
      const user = session.user;
      link.href = '#profile';
      link.dataset.logged = '1';
      link.title = 'Abrir perfil';
      link.setAttribute('aria-label', `Perfil de ${getUserName(user)}`);
      link.setAttribute('aria-expanded', 'false');
      if (avatar) avatar.innerHTML = avatarMarkup(user, 'account-avatar-image');
      if (label) label.textContent = 'PERFIL';
      if (menuAvatar) menuAvatar.innerHTML = avatarMarkup(user, 'profile-avatar-image');
      if (menuName) menuName.textContent = getUserName(user);
      if (menuEmail) menuEmail.textContent = user.email || '';
      if (menu) menu.hidden = true;
    } else {
      closeProfileMenu();
      link.textContent = '';
      if (avatar) avatar.innerHTML = '<span>↗</span>';
      if (label) label.textContent = 'ENTRAR';
      link.href = 'login.html';
      link.dataset.logged = '0';
      link.title = 'Entrar na sua conta';
      link.setAttribute('aria-label', 'Entrar na sua conta');
      link.removeAttribute('aria-expanded');
      if (menu) menu.hidden = true;
    }
  }

  function initProfileMenu() {
    const link = document.getElementById('accountLink');
    const menu = document.getElementById('profileMenu');
    const logout = document.getElementById('profileLogout');
    const favorites = document.getElementById('profileFavorites');
    if (!link || !menu) return;
    link.addEventListener('click', async (event) => {
      if (link.dataset.logged !== '1') return;
      event.preventDefault();
      event.stopPropagation();
      if (menu.hidden) openProfileMenu(); else closeProfileMenu();
    });
    logout?.addEventListener('click', async () => {
      await client.auth.signOut();
      closeProfileMenu();
      location.reload();
    });
    favorites?.addEventListener('click', (event) => {
      event.preventDefault();
      closeProfileMenu();
      const wish = document.getElementById('wishlistOpen');
      wish?.click();
    });
    document.addEventListener('click', (event) => {
      if (!menu.hidden && !event.target.closest('.account-wrap')) closeProfileMenu();
    });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeProfileMenu(); });
  }

  async function runPendingAction() {
    const params = new URLSearchParams(location.search);
    const action = params.get('auth_action');
    if (!action) return;
    const url = new URL(location.href);
    url.searchParams.delete('auth_action');
    url.searchParams.delete('product');
    history.replaceState({}, '', url.pathname + url.search + url.hash);
    const id = Number(params.get('product'));
    if (action === 'favorite' && id) {
      const already = Array.isArray(wishes) && wishes.includes(id);
      if (!already) {
        wishes = [...wishes, id];
        save();
        if (typeof renderProducts === 'function') renderProducts();
        if (typeof renderWishes === 'function') renderWishes();
        await window.arenaSyncFavorite(id, true);
        if (typeof toast === 'function') toast('Adicionado aos favoritos');
      }
    }
    if (action === 'add' && id) {
      if (typeof addToCart === 'function') addToCart(id);
    }
    if (action === 'checkout') {
      if (typeof openCheckout === 'function') openCheckout();
    }
  }

  async function initHomeAuth() {
    // Capture clicks before the loja's normal handlers, so ações protegidas nunca passam sem login.
    document.addEventListener('click', async (event) => {
      const add = event.target.closest('[data-add]');
      const wish = event.target.closest('[data-wish]');
      const modalAdd = event.target.closest('#modalAdd');
      const wishOpen = event.target.closest('#wishlistOpen');
      const checkout = event.target.closest('#checkoutBtn');
      const account = event.target.closest('#accountLink');

      if (account && account.dataset.logged === '1') return;

      let productId = add ? Number(add.dataset.add) : wish ? Number(wish.dataset.wish) : null;
      if (modalAdd && typeof selectedProduct !== 'undefined' && selectedProduct) productId = selectedProduct.id;

      if (add || wish || modalAdd) {
        const session = await getSession();
        if (!session) {
          event.preventDefault();
          event.stopPropagation();
          const action = new URL(location.href);
          action.searchParams.set('auth_action', add || modalAdd ? 'add' : 'favorite');
          if (productId) action.searchParams.set('product', productId);
          location.href = loginUrl(action.href);
          return;
        }
      }

      if (wishOpen) {
        const session = await getSession();
        if (!session) {
          event.preventDefault();
          event.stopPropagation();
          location.href = loginUrl(location.href);
          return;
        }
      }

      if (checkout) {
        const session = await getSession();
        if (!session) {
          event.preventDefault();
          event.stopPropagation();
          const action = new URL(location.href);
          action.searchParams.set('auth_action', 'checkout');
          location.href = loginUrl(action.href);
        }
      }
    }, true);

    client.auth.onAuthStateChange((_event, session) => {
      updateAccountLink();
      if (session) loadFavorites();
    });

    initProfileMenu();
    await updateAccountLink();
    await loadFavorites();
    await runPendingAction();
  }

  if (isHome) initHomeAuth();
})();
