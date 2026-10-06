const WHATSAPP_NUMBER = "5521967492863";
const products = [
 {id:1,slug:"real-madrid-home-25-26",images:{front:"images/real-madrid-home-25-26/frente.jpg",back:"images/real-madrid-home-25-26/costas.jpg",detail:"images/real-madrid-home-25-26/detalhe.jpg"},team:"Real Madrid",name:"Camisa Real Madrid Home 25/26",price:199.90,old:249.90,tag:"MAIS VENDIDO",color:"#f4f4ef",stripe:"#d5d5cf",mark:"#17202b",sponsor:"Emirates",badge:"RM",collar:"#222",sizes:["P","M","G","GG"]},
 {id:2,slug:"barcelona-home-25-26",images:{front:"images/barcelona-home-25-26/frente.jpg",back:"images/barcelona-home-25-26/costas.jpg",detail:"images/barcelona-home-25-26/detalhe.jpg"},team:"Barcelona",name:"Camisa Barcelona Home 25/26",price:199.90,old:239.90,tag:"NOVO",color:"#123c9a",stripe:"#c92940",mark:"#f5d74a",sponsor:"Spotify",badge:"FCB",collar:"#e8c54a",sizes:["P","M","G","GG"]},
 {id:3,slug:"flamengo-home-25-26",images:{front:"images/flamengo-home-25-26/frente.jpg",back:"images/flamengo-home-25-26/costas.jpg",detail:"images/flamengo-home-25-26/detalhe.jpg"},team:"Flamengo",name:"Camisa Flamengo Home 25/26",price:189.90,old:219.90,tag:"TORCIDA",color:"#d7192d",stripe:"#111",mark:"#fff",sponsor:"pixbet",badge:"FLA",collar:"#111",sizes:["P","M","G","GG"]},
 {id:4,slug:"corinthians-home-25-26",images:{front:"images/corinthians-home-25-26/frente.jpg",back:"images/corinthians-home-25-26/costas.jpg",detail:"images/corinthians-home-25-26/detalhe.jpg"},team:"Corinthians",name:"Camisa Corinthians Home 25/26",price:179.90,old:219.90,tag:"",color:"#f6f6f2",stripe:"#dededb",mark:"#111",sponsor:"vitaminas",badge:"SCCP",collar:"#111",sizes:["P","M","G","GG"]},
 {id:5,slug:"palmeiras-home-25-26",images:{front:"images/palmeiras-home-25-26/frente.jpg",back:"images/palmeiras-home-25-26/costas.jpg",detail:"images/palmeiras-home-25-26/detalhe.jpg"},team:"Palmeiras",name:"Camisa Palmeiras Home 25/26",price:179.90,old:209.90,tag:"",color:"#08784b",stripe:"#ffffff18",mark:"#fff",sponsor:"crefisa",badge:"SEP",collar:"#fff",sizes:["P","M","G","GG"]},
 {id:6,slug:"sao-paulo-home-25-26",images:{front:"images/sao-paulo-home-25-26/frente.jpg",back:"images/sao-paulo-home-25-26/costas.jpg",detail:"images/sao-paulo-home-25-26/detalhe.jpg"},team:"São Paulo",name:"Camisa São Paulo Home 25/26",price:179.90,old:219.90,tag:"CLÁSSICA",color:"#f5f5f1",stripe:"#11111108",mark:"#222",sponsor:"SPFC",badge:"SP",collar:"#111",sizes:["P","M","G","GG"]},
 {id:7,slug:"internacional-home-25-26",images:{front:"images/internacional-home-25-26/frente.jpg",back:"images/internacional-home-25-26/costas.jpg",detail:"images/internacional-home-25-26/detalhe.jpg"},team:"Internacional",name:"Camisa Internacional Home 25/26",price:169.90,old:199.90,tag:"",color:"#d71931",stripe:"#ffffff12",mark:"#fff",sponsor:"Banrisul",badge:"SCI",collar:"#fff",sizes:["P","M","G","GG"]},
 {id:8,slug:"brasil-amarela-2026",images:{front:"images/brasil-amarela-2026/frente.jpg",back:"images/brasil-amarela-2026/costas.jpg",detail:"images/brasil-amarela-2026/detalhe.jpg"},team:"Seleções",name:"Camisa Brasil Amarela 2026",price:189.90,old:229.90,tag:"LANÇAMENTO",color:"#ffdf00",stripe:"#16834a20",mark:"#16834a",sponsor:"BRASIL",badge:"BR",collar:"#16834a",sizes:["P","M","G","GG"]},
 {id:9,slug:"argentina-home-2026",images:{front:"images/argentina-home-2026/frente.jpg",back:"images/argentina-home-2026/costas.jpg",detail:"images/argentina-home-2026/detalhe.jpg"},team:"Seleções",name:"Camisa Argentina Home 2026",price:189.90,old:219.90,tag:"",color:"#8ed3f0",stripe:"#fff",mark:"#222",sponsor:"ARGENTINA",badge:"AFA",collar:"#fff",sizes:["P","M","G","GG"]},
 {id:10,slug:"real-madrid-away-25-26",images:{front:"images/real-madrid-away-25-26/frente.jpg",back:"images/real-madrid-away-25-26/costas.jpg",detail:"images/real-madrid-away-25-26/detalhe.jpg"},team:"Real Madrid",name:"Camisa Real Madrid Away 25/26",price:199.90,old:239.90,tag:"NOVIDADE",color:"#1c2025",stripe:"#777",mark:"#fff",sponsor:"Emirates",badge:"RM",collar:"#aaa",sizes:["P","M","G","GG"]},
 {id:11,slug:"barcelona-away-25-26",images:{front:"images/barcelona-away-25-26/frente.jpg",back:"images/barcelona-away-25-26/costas.jpg",detail:"images/barcelona-away-25-26/detalhe.jpg"},team:"Barcelona",name:"Camisa Barcelona Away 25/26",price:189.90,old:229.90,tag:"",color:"#e9d6ac",stripe:"#aa2134",mark:"#162a63",sponsor:"Spotify",badge:"FCB",collar:"#162a63",sizes:["P","M","G","GG"]},
 {id:12,slug:"flamengo-away-25-26",images:{front:"images/flamengo-away-25-26/frente.jpg",back:"images/flamengo-away-25-26/costas.jpg",detail:"images/flamengo-away-25-26/detalhe.jpg"},team:"Flamengo",name:"Camisa Flamengo Away 25/26",price:179.90,old:209.90,tag:"",color:"#f7f7f2",stripe:"#d91c32",mark:"#171717",sponsor:"pixbet",badge:"FLA",collar:"#111",sizes:["P","M","G","GG"]}
];
let cart = JSON.parse(localStorage.getItem("arenaCart") || "[]");
let wishes = JSON.parse(localStorage.getItem("arenaWishes") || "[]");
let activeTeam = "Todos", activeSort = "featured", searchTerm = "", showAll = false, selectedProduct = null, selectedSize = "M";
const COUPON_CODE = "ARENA10";
const COUPON_PERCENT = 0.10;
let appliedCoupon = localStorage.getItem("arenaCoupon") || "";
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
function shirtMarkup(p){
  return `<div class="shirt-fallback" aria-hidden="true"><div class="shirt" style="--shirt:${p.color};--stripe:${p.stripe};--mark-color:${p.mark};--collar:${p.collar}" data-mark="${p.badge}"><span class="stripe"></span><span class="collar"></span><span class="badge">${p.badge}</span><span class="sponsor">${p.sponsor}</span></div></div>`
}
function productPhoto(p,view="front",className="product-photo"){
  const src=p.images?.[view];
  if(!src)return shirtMarkup(p);
  return `<div class="${className}-wrap"><img class="${className}" src="${src}" alt="${p.name} — ${view==="front"?"frente":view==="back"?"costas":"detalhe"}" loading="lazy" onerror="this.closest('.${className}-wrap').classList.add('photo-missing')"><div class="photo-fallback">${shirtMarkup(p)}</div></div>`;
}
function productGallery(p){
  const views=[["front","Frente"],["back","Costas"],["detail","Detalhe"]];
  return `<div class="product-gallery">
    <div class="gallery-main">${productPhoto(p,"front","gallery-image")}</div>
    <div class="gallery-thumbs">${views.map(([view,label])=>`<button type="button" class="gallery-thumb ${view==="front"?"active":""}" data-gallery="${view}"><img src="${p.images[view]}" alt="${label} da ${p.name}" onerror="this.style.opacity=.25"><span>${label}</span></button>`).join("")}</div>
  </div>`;
}
function save(){localStorage.setItem("arenaCart",JSON.stringify(cart));localStorage.setItem("arenaWishes",JSON.stringify(wishes));if(appliedCoupon)localStorage.setItem("arenaCoupon",appliedCoupon);else localStorage.removeItem("arenaCoupon")}
function couponDiscount(subtotal){return appliedCoupon===COUPON_CODE?subtotal*COUPON_PERCENT:0}
function applyCouponCode(value, showToast=true){const code=value.trim().toUpperCase();if(code===COUPON_CODE){appliedCoupon=COUPON_CODE;save();if(showToast)toast("Cupom ARENA10 aplicado: 10% OFF!");return true}appliedCoupon="";save();if(showToast)toast(code?"Cupom inválido. Tente ARENA10.":"Digite um cupom para aplicar.");return false}
function syncCouponFields(){const input=$("#checkoutCoupon");if(input)input.value=appliedCoupon;const msg=$("#couponMessage");if(msg){msg.textContent=appliedCoupon?"Cupom ARENA10 aplicado: 10% de desconto em qualquer camisa.":"Use ARENA10 para ganhar 10% OFF em qualquer camisa.";msg.classList.toggle("coupon-ok",!!appliedCoupon)}}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),2600)}
function filteredProducts(){let arr=products.filter(p=>(activeTeam==="Todos"||p.team===activeTeam)&&(`${p.name} ${p.team}`.toLowerCase().includes(searchTerm.toLowerCase())));if(activeSort==="priceAsc")arr.sort((a,b)=>a.price-b.price);if(activeSort==="priceDesc")arr.sort((a,b)=>b.price-a.price);return arr}
function renderProducts(){const arr=filteredProducts();const shown=showAll?arr:arr.slice(0,8);$("#productGrid").innerHTML=shown.map(p=>`<article class="product-card"><div class="product-visual" data-view="${p.id}">${p.tag?`<span class="product-tag ${p.old?"sale":""}">${p.tag}</span>`:""}<button class="heart-btn ${wishes.includes(p.id)?"saved":""}" data-wish="${p.id}" aria-label="Adicionar aos favoritos">${wishes.includes(p.id)?"♥":"♡"}</button>${productPhoto(p,"front","card-product-photo")}</div><div class="product-info"><div class="product-team">${p.team}</div><div class="product-title">${p.name}</div><div class="price-row"><span class="price">${money(p.price)}</span>${p.old?`<span class="old-price">${money(p.old)}</span>`:""}</div><div class="installment">ou 3x de ${money(p.price/3)} sem juros</div><button class="card-add" data-add="${p.id}">ADICIONAR AO CARRINHO <span>＋</span></button></div></article>`).join("");$("#resultCount").textContent=`${arr.length} ${arr.length===1?"produto":"produtos"}`;$("#emptyState").hidden=arr.length>0;$("#loadMore").hidden=arr.length===0||arr.length<=8||showAll}
function addToCart(id,size="M"){const item=cart.find(x=>x.id===id&&x.size===size);if(item)item.qty++;else cart.push({id,size,qty:1});save();renderCart();renderProducts();toast("Manto adicionado à sacola!")}
function updateQty(id,size,delta){const item=cart.find(x=>x.id===id&&x.size===size);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>!(x.id===id&&x.size===size));save();renderCart()}
function renderCart(){const count=cart.reduce((s,x)=>s+x.qty,0),subtotal=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0),discount=couponDiscount(subtotal),afterDiscount=Math.max(0,subtotal-discount),free=subtotal>=299;$("#cartCount").textContent=count;$("#drawerCount").textContent=`(${count})`;$("#subtotal").textContent=money(subtotal);$("#cartCouponRow").hidden=!discount;$("#cartDiscount").textContent=`- ${money(discount)}`;$("#shippingValue").textContent=free?"Grátis":(subtotal===0?"—":money(19.90));$("#total").textContent=money(afterDiscount+(subtotal===0||free?0:19.90));$("#shippingText").textContent=free?"Você ganhou frete grátis!":`Faltam ${money(Math.max(0,299-subtotal))} para frete grátis`;$("#shippingProgress").style.width=`${Math.min(100,subtotal/299*100)}%`;
 if(!count){$("#cartItems").innerHTML=`<div class="cart-empty"><span>♧</span><h3>SUA SACOLA ESTÁ VAZIA</h3><p>Seu próximo manto está esperando por você.</p><button class="btn btn-dark" id="continueShopping">EXPLORAR CAMISAS ↗</button></div>`;$("#cartFooter").style.display="none";return}
 $("#cartFooter").style.display="block";$("#cartItems").innerHTML=cart.map(item=>{const p=products.find(x=>x.id===item.id);return `<div class="cart-item"><div class="mini-product">${productPhoto(p,"front","mini-product-photo")}</div><div><span class="item-team">${p.team}</span><h3>${p.name}</h3><label class="sr-only" for="size-${p.id}-${item.size}">Tamanho</label><select class="size-select" id="size-${p.id}-${item.size}" data-size="${p.id}|${item.size}">${p.sizes.map(s=>`<option ${s===item.size?"selected":""}>${s}</option>`).join("")}</select><div class="item-price">${money(p.price)}</div><div class="qty-controls"><button data-qty="${p.id}|${item.size}|-1" aria-label="Diminuir quantidade">−</button><span>${item.qty}</span><button data-qty="${p.id}|${item.size}|1" aria-label="Aumentar quantidade">＋</button></div></div><button class="remove-btn" data-remove="${p.id}|${item.size}" aria-label="Remover produto">×</button></div>`}).join("")}
function renderWishes(){const fav=products.filter(p=>wishes.includes(p.id));$("#wishCount").textContent=fav.length;$("#wishDrawerCount").textContent=`(${fav.length})`;$("#wishItems").innerHTML=fav.length?fav.map(p=>`<div class="cart-item"><div class="mini-product">${productPhoto(p,"front","mini-product-photo")}</div><div><span class="item-team">${p.team}</span><h3>${p.name}</h3><div class="item-price">${money(p.price)}</div><button class="card-add" data-add="${p.id}">ADICIONAR AO CARRINHO ＋</button></div><button class="remove-btn" data-wish="${p.id}">♥</button></div>`).join(""):`<div class="cart-empty"><span>♡</span><h3>AINDA SEM FAVORITOS</h3><p>Toque no coração dos seus mantos preferidos.</p><button class="btn btn-dark" id="continueShopping">VER CAMISAS ↗</button></div>`}
function openDrawer(which){closeModal();$("#overlay").classList.add("show");$("#cartDrawer").classList.toggle("open",which==="cart");$("#wishDrawer").classList.toggle("open",which==="wish");$("#cartDrawer").setAttribute("aria-hidden",which!=="cart");$("#wishDrawer").setAttribute("aria-hidden",which!=="wish");document.body.style.overflow="hidden"}
function closeDrawers(){$("#overlay").classList.remove("show");$("#cartDrawer").classList.remove("open");$("#wishDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");$("#wishDrawer").setAttribute("aria-hidden","true");if(!$("#productModal").classList.contains("show"))document.body.style.overflow=""}
function openProduct(id){selectedProduct=products.find(p=>p.id===id);selectedSize="M";const p=selectedProduct;$("#modalContent").innerHTML=`<div class="modal-product"><div class="modal-visual">${productGallery(p)}</div><div class="modal-details"><p class="eyebrow dark-eyebrow">${p.team.toUpperCase()} • COLEÇÃO 25/26</p><h2 id="modalTitle">${p.name.toUpperCase()}</h2><p>Vista as cores do seu time com orgulho. Modelo inspirado na paixão das arquibancadas, perfeito para acompanhar cada jogo.</p><div class="modal-price">${money(p.price)}</div><span class="installment">ou 3x de ${money(p.price/3)} sem juros</span><span class="size-label">ESCOLHA O TAMANHO</span><div class="size-options">${p.sizes.map(s=>`<button data-modal-size="${s}" class="${s===selectedSize?"selected":""}">${s}</button>`).join("")}</div><button class="btn btn-dark" id="modalAdd">ADICIONAR AO CARRINHO <span>＋</span></button><p>✓ Consulte disponibilidade e prazo pelo WhatsApp após montar seu pedido.</p></div></div>`;$("#productModal").classList.add("show");$("#overlay").classList.add("show");document.body.style.overflow="hidden"}
function closeModal(){$("#productModal").classList.remove("show");$("#checkoutModal").classList.remove("show");if(!$("#cartDrawer").classList.contains("open")&&!$("#wishDrawer").classList.contains("open")&&!$("#productModal").classList.contains("show")&&!$("#checkoutModal").classList.contains("show")){if(!$("#overlay").classList.contains("show"))document.body.style.overflow=""}}
function openCheckout(){
  if(!cart.length){toast("Adicione uma camisa antes de finalizar.");return}
  renderCheckoutPreview();
  $("#checkoutName").value = localStorage.getItem("arenaCustomerName") || "";
  $("#checkoutCity").value = localStorage.getItem("arenaCustomerCity") || "";
  $("#checkoutNote").value = "";
  syncCouponFields();
  setPayment("Pix");
  $("#checkoutModal").classList.add("show");
  $("#overlay").classList.add("show");
  document.body.style.overflow="hidden";
}
function normalizeCity(value){
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase();
}
function isTeresopolis(city){
  return normalizeCity(city) === "teresopolis";
}
function setPayment(payment){
  const city = $("#checkoutCity").value.trim();
  if(payment === "Cartão" && !isTeresopolis(city)){
    $("#paymentWarning").hidden=false;
    $("#paymentWarning").textContent="O pagamento com cartão está disponível somente para pedidos com entrega em Teresópolis. Para outras cidades, selecione Pix.";
    payment="Pix";
  } else {
    $("#paymentWarning").hidden=true;
  }
  $$(".payment-option").forEach(btn=>btn.classList.toggle("selected",btn.dataset.payment===payment));
  $("#cardOption").disabled=!isTeresopolis(city);
  $("#cityHint").textContent=isTeresopolis(city)?"Pagamento disponível: Pix ou cartão.":"Pagamento disponível: Pix.";
}
function renderCheckoutPreview(){
  const subtotal=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
  const discount=couponDiscount(subtotal);
  const shipping=subtotal>=299?0:19.90;
  const total=Math.max(0,subtotal-discount)+shipping;
  $("#checkoutOrderPreview").innerHTML=`<h3>RESUMO DO PEDIDO</h3>${cart.map(x=>{const p=products.find(p=>p.id===x.id);return `<div class="checkout-order-line"><span>${x.qty}x ${p.name} • Tam. ${x.size}</span><b>${money(p.price*x.qty)}</b></div>`}).join("")}${discount?`<div class="checkout-order-line coupon-order-line"><span>Desconto (${COUPON_CODE})</span><b>- ${money(discount)}</b></div>`:""}<div class="checkout-order-line"><span>Frete</span><b>${shipping===0?"Grátis":money(shipping)}</b></div><div class="checkout-order-line checkout-total-line"><span><b>TOTAL</b></span><b>${money(total)}</b></div>`;
}
function checkout(){
  if(!cart.length){toast("Adicione uma camisa antes de finalizar.");return}
  const name=$("#checkoutName").value.trim();
  const city=$("#checkoutCity").value.trim();
  if(!name){toast("Informe seu nome para continuar.");$("#checkoutName").focus();return}
  if(!city){toast("Informe a cidade de entrega.");$("#checkoutCity").focus();return}
  const payment=$(".payment-option.selected")?.dataset.payment || "Pix";
  if(payment==="Cartão"&&!isTeresopolis(city)){
    setPayment("Pix");
    toast("Cartão disponível somente para Teresópolis.");
    return;
  }
  localStorage.setItem("arenaCustomerName",name);
  localStorage.setItem("arenaCustomerCity",city);
  const subtotal=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
  const discount=couponDiscount(subtotal);
  const shipping=subtotal>=299?0:19.90;
  const total=Math.max(0,subtotal-discount)+shipping;
  const lines=cart.map(x=>{const p=products.find(p=>p.id===x.id);return `• ${p.name}\n  Tamanho: ${x.size} | Quantidade: ${x.qty} | ${money(p.price*x.qty)}`});
  const note=$("#checkoutNote").value.trim();
  const msg=[
    "Olá, Arena das Camisas! ⚽",
    "",
    "Quero confirmar este pedido:",
    "",
    ...lines,
    "",
    `Cliente: ${name}`,
    `Cidade de entrega: ${city}`,
    `Forma de pagamento: ${payment}`,
    `Subtotal: ${money(subtotal)}`,
    ...(discount?[`Cupom: ${COUPON_CODE} (-${money(discount)})`]:[]),
    `Frete: ${shipping===0?"Grátis":money(shipping)}`,
    `TOTAL: ${money(total)}`,
    ...(note?[`Observação: ${note}`]:[]),
    "",
    "Por favor, confirmem a disponibilidade dos produtos, o prazo de entrega e as instruções para pagamento.",
    "",
    "Obrigado!"
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
  toast("Pedido preparado no WhatsApp. Confira os dados antes de enviar.");
}
function toggleWish(id){wishes=wishes.includes(id)?wishes.filter(x=>x!==id):[...wishes,id];const isFavorite=wishes.includes(id);save();renderProducts();renderWishes();if(window.arenaSyncFavorite)window.arenaSyncFavorite(id,isFavorite);toast(isFavorite?"Adicionado aos favoritos":"Removido dos favoritos")}
$("#productGrid").addEventListener("click",e=>{const add=e.target.closest("[data-add]"),wish=e.target.closest("[data-wish]"),view=e.target.closest("[data-view]");if(add){addToCart(+add.dataset.add);return}if(wish){toggleWish(+wish.dataset.wish);return}if(view)openProduct(+view.dataset.view)});
$("#teamFilters").addEventListener("click",e=>{const b=e.target.closest("[data-team]");if(!b)return;activeTeam=b.dataset.team;$$(".team-tile").forEach(x=>x.classList.toggle("active",x===b));showAll=false;renderProducts();$("#mais-vendidos").scrollIntoView({behavior:"smooth"})});
$$(".filter-btn").forEach(b=>b.addEventListener("click",()=>{activeSort=b.dataset.sort;$$(".filter-btn").forEach(x=>x.classList.toggle("active",x===b));renderProducts()}));
$("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value;showAll=false;renderProducts()});
$("#searchInput").addEventListener("focus",()=>{if(innerWidth<=760)$("#searchInput").parentElement.classList.add("expanded")});
$("#searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")$("#mais-vendidos").scrollIntoView({behavior:"smooth"})});
$("#loadMore").addEventListener("click",()=>{showAll=true;renderProducts()});
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";searchTerm="";activeTeam="Todos";$$(".team-tile").forEach(x=>x.classList.toggle("active",x.dataset.team==="Todos"));renderProducts()});
$("#cartOpen").addEventListener("click",()=>openDrawer("cart"));$("#wishlistOpen").addEventListener("click",()=>{renderWishes();openDrawer("wish")});
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$("#mainNav").addEventListener("click",e=>{if(e.target.closest("a"))$("#mainNav").classList.remove("open")});
$("#overlay").addEventListener("click",()=>{closeDrawers();closeModal()});
document.addEventListener("click",e=>{const close=e.target.closest("[data-close]");if(close){closeDrawers();closeModal();return}const qty=e.target.closest("[data-qty]");if(qty){const [id,size,delta]=qty.dataset.qty.split("|");updateQty(+id,size,+delta);return}const rem=e.target.closest("[data-remove]");if(rem){const [id,size]=rem.dataset.remove.split("|");cart=cart.filter(x=>!(x.id===+id&&x.size===size));save();renderCart();return}const size=e.target.closest("[data-size]");if(size){const [id,oldSize]=size.dataset.size.split("|");const newSize=size.value;const item=cart.find(x=>x.id===+id&&x.size===oldSize);if(item){const qty=item.qty;cart=cart.filter(x=>!(x.id===+id&&x.size===oldSize));const duplicate=cart.find(x=>x.id===+id&&x.size===newSize);if(duplicate)duplicate.qty+=qty;else cart.push({id:+id,size:newSize,qty});save();renderCart()}return}const galleryThumb=e.target.closest("[data-gallery]");
if(galleryThumb&&selectedProduct){
  const view=galleryThumb.dataset.gallery;
  const main=$("#productModal .gallery-main");
  main.innerHTML=productPhoto(selectedProduct,view,"gallery-image");
  $$("#productModal [data-gallery]").forEach(x=>x.classList.toggle("active",x===galleryThumb));
  return;
}
const modalSize=e.target.closest("[data-modal-size]");if(modalSize){selectedSize=modalSize.dataset.modalSize;$$("[data-modal-size]").forEach(x=>x.classList.toggle("selected",x===modalSize));return}if(e.target.id==="modalAdd"&&selectedProduct){addToCart(selectedProduct.id,selectedSize);closeModal();closeDrawers();return}if(e.target.id==="continueShopping"){closeDrawers();closeModal();$("#mais-vendidos").scrollIntoView({behavior:"smooth"});return}const info=e.target.closest("[data-info]");if(info){e.preventDefault();const texts={Entrega:"O prazo e o valor do frete serão confirmados no atendimento pelo WhatsApp, conforme seu CEP.",Trocas:"Para solicitar uma troca ou devolução, fale com nosso atendimento pelo WhatsApp com os dados do pedido.",Tamanhos:"As camisas estão disponíveis nos tamanhos P, M, G e GG. Consulte as medidas exatas com nosso atendimento."};toast(texts[info.dataset.info]||"Fale com nosso atendimento pelo WhatsApp.");return}});
$("#checkoutBtn").addEventListener("click",openCheckout);
$("#whatsappCheckout").addEventListener("click",checkout);
$("#applyCoupon").addEventListener("click",()=>{if(applyCouponCode($("#checkoutCoupon").value)){syncCouponFields();renderCart();renderCheckoutPreview()}});
$("#checkoutCoupon").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();$("#applyCoupon").click()}});
$("#checkoutCity").addEventListener("input",()=>setPayment($(".payment-option.selected")?.dataset.payment||"Pix"));
$$(".payment-option").forEach(btn=>btn.addEventListener("click",()=>setPayment(btn.dataset.payment)));
$("#floatingWhats").addEventListener("click",()=>window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site Arena das Camisas e gostaria de tirar uma dúvida.")}`,"_blank","noopener"));
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();const email=$("#emailInput").value.trim();if(email){$("#newsletterMsg").textContent="Valeu! Seu e-mail foi anotado nesta demonstração.";$("#emailInput").value="";toast("Inscrição registrada nesta demonstração.")}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeDrawers();closeModal()}});
function initWelcomeExperience(){
  const cookieAccepted=localStorage.getItem("arenaCookiesAccepted")==="1";
  const couponSeen=localStorage.getItem("arenaCouponPopupSeen")==="1";
  if(!cookieAccepted){
    $("#cookieBanner").classList.add("show");
  } else if(!couponSeen){
    setTimeout(showCouponPopup,450);
  }
}
function showCouponPopup(){
  $("#couponModal").classList.add("show");
  $("#overlay").classList.add("show");
  document.body.style.overflow="hidden";
  localStorage.setItem("arenaCouponPopupSeen","1");
}
function closeCouponPopup(){
  $("#couponModal").classList.remove("show");
  if(!$("#cartDrawer").classList.contains("open")&&!$("#wishDrawer").classList.contains("open")&&!$("#productModal").classList.contains("show")&&!$("#checkoutModal").classList.contains("show")){
    $("#overlay").classList.remove("show");
    document.body.style.overflow="";
  }
}
$("#acceptCookies").addEventListener("click",()=>{
  localStorage.setItem("arenaCookiesAccepted","1");
  $("#cookieBanner").classList.remove("show");
  setTimeout(showCouponPopup,220);
});
$("#cookieMore").addEventListener("click",()=>toast("Usamos cookies essenciais e de preferência para melhorar a experiência. Você pode limpar essas preferências pelo navegador."));
$("#couponClose").addEventListener("click",closeCouponPopup);
$("#useCoupon").addEventListener("click",()=>{applyCouponCode(COUPON_CODE);closeCouponPopup();$("#mais-vendidos").scrollIntoView({behavior:"smooth"})});
$("#copyCoupon").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(COUPON_CODE);toast("Cupom ARENA10 copiado!")}catch(e){toast("Seu cupom é ARENA10")}});
$("#overlay").addEventListener("click",()=>{if($("#couponModal").classList.contains("show"))closeCouponPopup()});
renderProducts();renderCart();renderWishes();syncCouponFields();initWelcomeExperience();
