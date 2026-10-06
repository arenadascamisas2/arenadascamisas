(() => {
  const client = window.arenaSupabase;
  const form = document.getElementById('authForm');
  const message = document.getElementById('authMessage');
  const submit = document.getElementById('authSubmit');
  const isRegister = document.body.dataset.authPage === 'register';
  const redirect = (() => {
    const raw = new URLSearchParams(location.search).get('redirect');
    if (!raw) return 'index.html';
    try { const u = new URL(raw, location.href); return u.origin === location.origin ? u.pathname.split('/').pop() + u.search + u.hash : 'index.html'; }
    catch { return 'index.html'; }
  })();

  function msg(text, type='') { message.textContent=text; message.className='auth-message '+type; }
  function translateError(error) {
    const m=(error?.message||'').toLowerCase();
    if(m.includes('invalid login credentials')) return 'E-mail ou senha incorretos.';
    if(m.includes('user already registered')) return 'Este e-mail já possui uma conta. Tente entrar.';
    if(m.includes('password')) return 'A senha precisa ter pelo menos 6 caracteres.';
    if(m.includes('email')) return 'Digite um e-mail válido.';
    return error?.message || 'Não foi possível concluir. Tente novamente.';
  }
  document.querySelectorAll('[data-toggle-password]').forEach(btn=>btn.addEventListener('click',()=>{
    const input=document.getElementById(btn.dataset.togglePassword); const visible=input.type==='text'; input.type=visible?'password':'text'; btn.textContent=visible?'MOSTRAR':'OCULTAR';
  }));
  form.addEventListener('submit', async e=>{
    e.preventDefault(); msg(''); submit.disabled=true; submit.textContent='AGUARDE...';
    const email=document.getElementById('email').value.trim(); const password=document.getElementById('password').value;
    try {
      if(isRegister){
        const name=document.getElementById('name').value.trim(); const confirm=document.getElementById('confirmPassword').value;
        if(!name){msg('Digite seu nome.','error');return}
        if(password.length<6){msg('A senha precisa ter pelo menos 6 caracteres.','error');return}
        if(password!==confirm){msg('As senhas não coincidem.','error');return}
        const {data,error}=await client.auth.signUp({email,password,options:{data:{full_name:name},emailRedirectTo:new URL(redirect,location.href).href}});
        if(error) throw error;
        if(data.session){location.href=redirect;return}
        msg('Cadastro realizado! Verifique seu e-mail para confirmar a conta.','success');
        form.reset();
      } else {
        const {data,error}=await client.auth.signInWithPassword({email,password});
        if(error) throw error;
        if(data.session) location.href=redirect;
      }
    } catch(error){ msg(translateError(error),'error'); }
    finally { submit.disabled=false; submit.innerHTML=isRegister?'CRIAR MINHA CONTA <span>↗</span>':'ENTRAR NA ARENA <span>↗</span>'; }
  });
})();
