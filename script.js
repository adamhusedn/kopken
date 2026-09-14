const WA_NUMBER = "6281287380732";

// ── DATA MENU ──
// "signature" = highlighted as best-seller / signature
const MENUS = {
  coffee: [
    // ── BEST SELLER (signature) ──
    {name:"Kopi Kenangan Mantan",normal:21000,disc:16000,upsize:20000,emo:"☕",img:"Kopi Kenangan Mantan.png",signature:true},
    {name:"Creamy Aren Latte",normal:24000,disc:18000,upsize:23000,emo:"☕",img:"Creamy Aren Latte.png",signature:true},
    {name:"Americano",normal:19000,disc:15000,upsize:19000,emo:"☕",img:"Americano.png",signature:true},
    {name:"Spanish Latte",normal:21000,disc:16000,upsize:20500,emo:"☕",img:"Spanish Latte.png",signature:true},
    {name:"Caramel Macchiato",normal:30000,disc:21000,upsize:27000,emo:"☕",img:"Caramel Macchiato.png",signature:true},
    // ── REGULAR ──
    {name:"OG Aren Speculoos Latte",normal:23000,disc:17000,upsize:22000,emo:"☕",img:"OG Aren Speculoos Latte.png"},
    {name:"Dua Shot OG Aren",normal:27000,disc:19000,upsize:23000,emo:"☕",img:"Dua  Shot  OG  Aren.png"},
    {name:"Mocha Caramel",normal:28000,disc:20000,upsize:24000,emo:"☕",img:"Mocha Caramel.png"},
    {name:"Toffee Nut Latte",normal:21000,disc:16000,upsize:20000,emo:"☕",img:"Toffee Nut Latte.png"},
    {name:"Toffee Nut Aren Latte",normal:23000,disc:17000,upsize:21000,emo:"☕",img:"Toffee Nut Aren Latte.png"},
    {name:"Toffee Nut Oat Latte",normal:24000,disc:18000,upsize:22000,emo:"☕",img:"Toffee Nut Oat Latte.png"},
    {name:"Pistachio Aren Latte",normal:21000,disc:16000,upsize:20000,emo:"☕",img:"Pistachio Aren Latte.png"},
    {name:"Cafe Malt Latte",normal:25000,disc:18000,upsize:22000,emo:"☕",img:"Cafe Malt Latte.png"},
    {name:"Caramel Latte",normal:28000,disc:20000,upsize:24500,emo:"☕",img:"Caramel Latte.png"},
    {name:"Dua Shot Iced Shaken",normal:30000,disc:21000,upsize:27000,emo:"☕",img:"Dua Shot Iced Shaken.png"},
    {name:"Hazelnut Latte",normal:28000,disc:20000,upsize:24500,emo:"☕",img:"Hazelnut Latte.png"},
    {name:"Kopi Susu Black Aren",normal:23000,disc:17000,upsize:22000,emo:"☕",img:"Kopi Susu Black Aren.png"},
    {name:"Matcha Espresso",normal:28000,disc:20000,upsize:24000,emo:"🍵",img:"Matcha Espresso.png"},
    {name:"Mocha Latte",normal:30000,disc:21000,upsize:25000,emo:"☕",img:"Mocha Latte.png"},
    {name:"Vanilla Latte",normal:28000,disc:20000,upsize:24000,emo:"☕",img:"Vanilla Latte.png"},
    {name:"Avocado Coffee",normal:30000,disc:21000,upsize:27000,emo:"🥑",img:"Avocado Coffee.png"},
    {name:"Butterscotch Aren Latte",normal:22000,disc:17000,upsize:21000,emo:"☕",img:"Butterscotch Aren Latte.png"},
    {name:"Butterscotch Sea Salt",normal:27000,disc:19000,upsize:23500,emo:"☕",img:"Butterscotch Sea Salt.png"},
    {name:"Cappuccino",normal:24000,disc:18000,upsize:22000,emo:"☕",img:"Cappuccino.png"},
    {name:"Latte",normal:24000,disc:18000,upsize:22000,emo:"☕",img:"Latte.png"},
    {name:"Thai Tea Coffee",normal:27000,disc:19000,upsize:null,emo:"🧋",img:"Thai Tea Coffee.png",onlyLarge:true,isNew:true},
    {name:"Blueberry Americano",normal:21000,disc:16000,upsize:20000,emo:"☕",img:"Bluebeery_Americano.png",isNew:true},
  ],
  noncoffee: [
    // ── BEST SELLER (signature) ──
    {name:"Milo Dinosaurus",normal:25000,disc:18000,upsize:22000,emo:"🥛",img:"Milo Dinosaurus.png",signature:true},
    {name:"Raspberry Hibiscus",normal:22000,disc:17000,upsize:21000,emo:"🌺",img:"Raspberry Hibiscus.png",signature:true},
    {name:"Matcha Latte",normal:27000,disc:19000,upsize:23000,emo:"🍵",img:"Matcha Latte.png",signature:true},
    {name:"Babyccino",normal:21000,disc:16000,upsize:null,emo:"🥛",img:"Babyccino.png",signature:true},
    // ── REGULAR ──
    {name:"OG Aren Milky Speculoos",normal:25000,disc:18000,upsize:22000,emo:"🥛",img:"OG Aren Milky Speculoos.png"},
    {name:"Choco Caramel",normal:21000,disc:16000,upsize:20000,emo:"🍫",img:"Choco Caramel.png"},
    {name:"Toffee Nut Choco Macchiato",normal:24000,disc:18000,upsize:null,emo:"🍫",img:"Toffee Nut Choco Macchiato.png"},
    {name:"Butterscotch Sea Salt (NC)",normal:24000,disc:18000,upsize:null,emo:"🥛",img:"Butterscotch Sea Salt (NC).png"},
    {name:"Milk Oreo Crumble",normal:28000,disc:20000,upsize:null,emo:"🍪",img:"Milk Oreo Crumble.png"},
    {name:"Fresh Lemonade",normal:19000,disc:15000,upsize:null,emo:"🍋",img:"Fresh Lemonade.png",onlyLarge:true},
    {name:"Hazelnut Choco Milk Tea",normal:24000,disc:18000,upsize:22000,emo:"🧋",img:"Hazelnut Choco Milk Tea.png"},
    {name:"Avocado Caramel",normal:30000,disc:21000,upsize:27000,emo:"🥑",img:"Avocado Caramel.png"},
    {name:"Avocado Milk",normal:26000,disc:19000,upsize:25000,emo:"🥑",img:"Avocado Milk.png"},
    {name:"Caramel Dutch Choco",normal:30000,disc:21000,upsize:27000,emo:"🍫",img:"Caramel Dutch Choco.png"},
    {name:"Dutch Chocolate",normal:28000,disc:20000,upsize:26000,emo:"🍫",img:"Dutch Chocolate.png"},
    {name:"Hazelnut Dutch Choco",normal:30000,disc:21000,upsize:27000,emo:"🍫",img:"Hazelnut Dutch Choco.png"},
    {name:"Lemon Black Tea",normal:19000,disc:15000,upsize:19000,emo:"🍋",img:"Lemon Black Tea.png"},
    {name:"Kenangan Milk Tea",normal:23000,disc:17000,upsize:21000,emo:"🧋",img:"Kenangan Milk Tea.png"},
    {name:"Oreo Shake",normal:28000,disc:20000,upsize:24500,emo:"🍪",img:"Oreo Shake.png"},
    {name:"Susu Grass Jelly",normal:26000,disc:19000,upsize:23000,emo:"🥛",img:"Susu Grass Jelly.png"},
    {name:"Og Thai Tea",normal:21000,disc:16000,upsize:20000,emo:"🧋",img:"Og Thai Tea.png",isNew:true},
    {name:"Thai Tea Loaded",normal:29000,disc:21000,upsize:null,emo:"🧋",img:"Thai Tea Loaded.png",onlyLarge:true,isNew:true},
    {name:"Thai Tea Aren",normal:26000,disc:19000,upsize:null,emo:"🧋",img:"Thai Tea Aren.png",onlyLarge:true,isNew:true},
  ],
  oatside: [
    {name:"Oatside Kopi Kenangan",normal:24000,disc:18000,upsize:22500,emo:"🥛",img:"Oatside Kopi Kenangan.png"},
    {name:"Oatside Latte",normal:27000,disc:19000,upsize:26000,emo:"🥛",img:"Oatside Latte.png"},
    {name:"Oatsdie Matcha Latte",normal:27000,disc:19000,upsize:23000,emo:"🍵",img:"Oatsdie Matcha Latte.png"},
  ],
  frappe: [
    {name:"Choco Caramel Frappe",normal:30000,disc:21000,upsize:26000,emo:"🧊",img:"Choco Caramel Frappe.png"},
    {name:"Tiramisu Frappe",normal:30000,disc:21000,upsize:26000,emo:"🧊",img:"Tiramisu Frappe.png",signature:true},
    {name:"Butterscotch Kenangan Frappe",normal:32000,disc:22000,upsize:28000,emo:"🧊",img:"Butterscotch Kenangan Frappe.png"},
    {name:"Matcha Kenangan Frappe",normal:34000,disc:24000,upsize:30000,emo:"🧊",img:"Matcha Kenangan Frappe.png"},
    {name:"Kopi Kenangan Mantan Frappe",normal:29000,disc:21000,upsize:26000,emo:"🧊",img:"Kopi Kenangan Mantan Frappe.png",signature:true},
    {name:"Vanilla Kenangan Frappe",normal:27000,disc:19000,upsize:24000,emo:"🧊",img:"Vanilla Kenangan Frappe.png"},
    {name:"Dutch Choco Kenangan Frappe",normal:31000,disc:22000,upsize:27000,emo:"🧊",img:"Dutch Choco Kenangan Frappe.png"},
    {name:"Blueberry Frappe",normal:25000,disc:18000,upsize:23000,emo:"🧊",img:"Bluebeery_Frappe.png",isNew:true},
    {name:"Chocoberry Frappe",normal:29000,disc:21000,upsize:26000,emo:"🧊",img:"Chocoberry_Frappe.png",isNew:true},
    {name:"Coffeberry Frappe",normal:27000,disc:20000,upsize:25000,emo:"🧊",img:"Coffeberry_Frappe.png",isNew:true},
  ],
  bake: [
    {name:"Choco Muffin",normal:18000,disc:15000,upsize:null,emo:"🧁",img:"Choco Muffin.png"},
    {name:"Blueberry Muffin",normal:18000,disc:15000,upsize:null,emo:"🧁",img:"Blueberry Muffin.png"},
    {name:"Choco Mocha Swirl Toast",normal:20000,disc:16000,upsize:null,emo:"🍞",img:"Choco Mocha Swirl Toast.png"},
    {name:"Strawberry Choux Puff",normal:15000,disc:13000,upsize:null,emo:"🍓",img:"Strawberry Choux Puff.png"},
    {name:"Donut Tiramisu",normal:16000,disc:14000,upsize:null,emo:"🍩",img:"Donut Tiramisu.png"},
    {name:"Danish Tiramisu",normal:22000,disc:17000,upsize:null,emo:"🥐",img:"Danish Tiramisu.png"},
    {name:"Roti Gulung Abon",normal:20000,disc:16000,upsize:null,emo:"🍞",img:"Roti Gulung Abon.png"},
    {name:"Roti Gulung Aren",normal:17000,disc:14000,upsize:null,emo:"🍞",img:"Roti Gulung Aren.png"},
    {name:"Sandwich Chicken Tart",normal:24000,disc:18000,upsize:null,emo:"🥪",img:"Sandwich Chicken Tart.png"},
    {name:"Roti Sisir Coklat",normal:16000,disc:14000,upsize:null,emo:"🍞",img:"Roti Sisir Coklat.png"},
    {name:"Canele Aren",normal:18000,disc:15000,upsize:null,emo:"🥐",img:"Canele Aren.png"},
    {name:"Canele Original",normal:16000,disc:14000,upsize:null,emo:"🥐",img:"Canele Original.png"},
    {name:"Canele Toffee Nut Crumble",normal:18000,disc:15000,upsize:null,emo:"🥐",img:"Canele Toffee Nut Crumble.png"},
    {name:"Aren Apple Pie",normal:20000,disc:16000,upsize:null,emo:"🥧",img:"Aren Apple Pie.png"},
    {name:"Vanilla Choux Puff",normal:15000,disc:13000,upsize:null,emo:"🍮",img:"Vanilla Choux Puff.png"},
    {name:"Chocolate Choux Puff",normal:15000,disc:13000,upsize:null,emo:"🍫",img:"Chocolate Choux Puff.png"},
    {name:"Salt Bread Original",normal:14000,disc:13000,upsize:null,emo:"🍞",img:"Salt Bread Original.png"},
    {name:"Salt Bread Beef and Cheese",normal:17000,disc:14000,upsize:null,emo:"🥪",img:"Salt Bread Beef and Cheese.png"},
    {name:"Sandwich Smoked Beef & Cheese",normal:24000,disc:18000,upsize:null,emo:"🥪",img:"Sandwich Smoked Beef & Cheese.png"},
    {name:"Roti Sisir Keju",normal:17000,disc:14000,upsize:null,emo:"🍞",img:"Roti Sisir Keju.png"},
    {name:"Dirty Croissant Milo",normal:22000,disc:17000,upsize:null,emo:"🥐",img:"Dirty Croissant Milo.png"},
    {name:"Croissant Abon",normal:20000,disc:16000,upsize:null,emo:"🥐",img:"Croissant Abon.png"},
    {name:"Donut Almond",normal:16000,disc:14000,upsize:null,emo:"🍩",img:"Donut Almond.png"},
  ],
  toast: [
    {name:"Bambang Choco Cheese",normal:19000,disc:15000,upsize:null,emo:"🍞",img:"Bambang Choco Cheese.png"},
    {name:"Adam Ayam Toast",normal:21000,disc:16000,upsize:null,emo:"🥪",img:"Adam Ayam Toast.png"},
    {name:"Wahyu Sapi Toast",normal:21000,disc:16000,upsize:null,emo:"🥪",img:"Wahyu Sapi Toast.png"},
  ],
  food: [
    {name:"Butter Croissant",normal:17000,disc:14000,upsize:null,emo:"🥐",img:"Butter Croissant.png"},
    {name:"Chocolate Croissant",normal:21000,disc:16000,upsize:null,emo:"🥐",img:"Chocolate Croissant.png"},
    {name:"Roti Coklat Klasik",normal:11000,disc:10000,upsize:null,emo:"🍞",img:"Roti Coklat Klasik.png"},
    {name:"Roti Susu Manis",normal:12000,disc:11000,upsize:null,emo:"🍞",img:"Roti Susu Manis.png"},
    {name:"Roti Keju Manis",normal:15000,disc:13000,upsize:null,emo:"🧀",img:"Roti Keju Manis.png"},
    {name:"Roti Srikaya",normal:17000,disc:14000,upsize:null,emo:"🍞",img:"Roti Srikaya.png"},
    {name:"Join The Dark Side Cookie",normal:23000,disc:17000,upsize:null,emo:"🍪",img:"Join The Dark Side Cookie.png"},
    {name:"Choco Chip Cookies",normal:16000,disc:14000,upsize:null,emo:"🍪",img:"Choco Chip Cookies.png"},
    {name:"Friend Chip Cookie",normal:19000,disc:15000,upsize:null,emo:"🍪",img:"Friend Chip Cookie.png"},
    {name:"Salt Bread Choco Butter",normal:13000,disc:11000,upsize:null,emo:"🍞",img:"Salt_Bread_Choco_Butter.png",isNew:true},
    {name:"Salt Bread Sausage",normal:16000,disc:13000,upsize:null,emo:"🌭",img:"Salt_Bread_Sausage.png",isNew:true},
  ],
};

// Categories that should NOT show sugar/ice (food items)
const NO_SUGAR_ICE = ['bake','toast','food'];
// Frappe: punya ice tapi tanpa opsi "No Ice" (cuma Normal/Less) + punya whipped cream
const ICE_NO_ZERO = ['frappe'];
// Frappe punya pilihan whipped cream (Vanilla / Chocolate / No Whipped)
const HAS_WHIPPED = ['frappe'];
const NO_ICE_OPTION = [];  // (kosong) — frappe sekarang tetap tampil ice via ICE_NO_ZERO

// Menu yang cuma punya Normal & Less sugar (TANPA No Sugar)
const LESS_SUGAR_ONLY = new Set([
  'Thai Tea Coffee','Og Thai Tea','Thai Tea Loaded','Thai Tea Aren',
  'OG Aren Speculoos Latte','Dua Shot OG Aren','Mocha Caramel',
  'Toffee Nut Latte','Toffee Nut Aren Latte','Toffee Nut Oat Latte',
  'Pistachio Aren Latte','Spanish Latte','Creamy Aren Latte',
  'Butterscotch Aren Latte','Butterscotch Sea Salt',
  'OG Aren Milky Speculoos','Toffee Nut Choco Macchiato'
]);

// Berry frappe baru: no whipped, ice fix normal (gak bisa ganti)
const BERRY_FRAPPE = new Set([
  'Blueberry Frappe','Chocoberry Frappe','Coffeberry Frappe'
]);

// ── STATE ──
let cart = []; // [{id, name, size, price, qty, sugar, ice}]

// ─────────── CART PERSISTENCE (localStorage) ───────────
const CART_KEY = "obd_cart_v1";
function saveCart(){
  try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }catch(e){}
}
function loadCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(Array.isArray(parsed)) cart = parsed;
    }
  }catch(e){ cart = []; }
}
function clearCartStorage(){
  try{ localStorage.removeItem(CART_KEY); }catch(e){}
}
const sizeState = {};
const sugarState = {};
const iceState = {};
let activeCategory = 'all';
let activeQuickFilter = 'all';
let searchQuery = '';

function fmt(n){return "Rp"+n.toLocaleString('id-ID')}

// ─────────── WELCOME MODAL ───────────
// ─────────── BODY LOCK HELPER (iOS scroll fix) ───────────
let _bodyScrollY = 0;
function lockBody(){
  _bodyScrollY = window.scrollY;
  document.body.classList.add("modal-open");
  document.body.style.top = `-${_bodyScrollY}px`;
}
function unlockBody(){
  document.body.classList.remove("modal-open");
  document.body.style.top = '';
  window.scrollTo(0, _bodyScrollY);
}

function openWelcome(){
  document.getElementById("welcomeOverlay").classList.add("open");
  // Jangan lock body — biarkan modal scroll sendiri (iOS fix)
  // Hanya cegah background scroll via CSS touch-action
  lockBody();
  history.pushState({modal:'welcome'}, '');
}
function closeWelcome(fromPopState){
  document.getElementById("welcomeOverlay").classList.remove("open");
  unlockBody();
  try{
    localStorage.setItem("obd_welcome_seen","1");
    sessionStorage.setItem("obd_welcome_seen","1");
  }catch(e){}
  if(!fromPopState && history.state && history.state.modal === 'welcome'){
    history.back();
  }
}

// Menutup welcome modal + langsung pindah ke brand tertentu
function closeWelcomeAndSwitch(brand){
  const overlay = document.getElementById("welcomeOverlay");
  overlay.classList.remove("open");
  unlockBody();
  try{
    localStorage.setItem("obd_welcome_seen","1");
    sessionStorage.setItem("obd_welcome_seen","1");
  }catch(e){}

  // Switch ke brand yang dipilih
  const brandBtn = document.querySelector('.brand-btn[data-brand="' + brand + '"]');
  if(brandBtn) switchBrand(brand, brandBtn);

  if(history.state && history.state.modal === 'welcome'){
    history.back();
  }
}

// ─────────── RENDER MENU ───────────
let currentModalItem = null;
let modalState = {size:'regular', sugar:'Normal Sugar', ice:'Normal Ice', whipped:'No Whipped Cream', qty:1};

function renderMenus(){
  Object.keys(MENUS).forEach(cat=>{
    const grid = document.getElementById("grid-"+cat);
    if(!grid) return;
    grid.innerHTML='';
    MENUS[cat].forEach((item,idx)=>{
      const card = buildMenuCard(cat, item, idx, false);
      grid.appendChild(card);
    });
  });

  const newGrid = document.getElementById("grid-new");
  if(newGrid){
    newGrid.innerHTML='';
    Object.keys(MENUS).forEach(cat=>{
      MENUS[cat].forEach((item,idx)=>{
        if(item.isNew){
          const card = buildMenuCard(cat, item, idx, true);
          newGrid.appendChild(card);
        }
      });
    });
  }
}

function buildMenuCard(cat, item, idx, isClone){
  const hasUpsize = item.upsize !== null;
  const isOnlyLarge = item.onlyLarge === true;
  const isDrink = !NO_SUGAR_ICE.includes(cat);
  const id = (isClone ? 'new-' : '') + cat+"-"+idx;

  const div = document.createElement("div");
  div.className="menu-card";
  div.id="card-"+id;
  div.dataset.cat=cat;
  div.dataset.idx=idx;
  div.dataset.name=item.name.toLowerCase();
  div.dataset.upsize=hasUpsize?'1':'0';
  div.dataset.price=item.disc;
  div.dataset.signature=item.signature?'1':'0';
  div.dataset.isnew=item.isNew?'1':'0';
  div.onclick = ()=>openItemModal(cat, idx);

  const imgOrEmoji = `<img src="menu_items/${encodeURIComponent(item.img)}" alt="${item.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:38px">${item.emo}</span>`;
  const sigBadge = item.signature ? `<div class="signature-tag">⭐ Signature</div>` : '';
  const newBadge = item.isNew ? `<div class="new-tag"><svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 1l2.4 7.6L22 11l-7.6 2.4L12 21l-2.4-7.6L2 11l7.6-2.4z"/></svg>BARU</div>` : '';

  let sizeBadge = '';
  if(isDrink){
    if(hasUpsize) sizeBadge = `<span class="size-badge">📏 Reg / Large</span>`;
    else if(isOnlyLarge) sizeBadge = `<span class="size-badge size-badge-large">📏 Large Only</span>`;
    else sizeBadge = `<span class="size-badge">📏 Regular</span>`;
  }

  div.innerHTML=`
    <div class="card-emoji" style="padding:0">
      ${sigBadge}
      ${newBadge}
      ${imgOrEmoji}
    </div>
    <div class="card-body">
      <div class="card-name">${item.name}</div>
      ${sizeBadge}
      <div class="price-row">
        <div class="price-normal">${fmt(item.normal)}</div>
        <div class="price-disc">${fmt(item.disc)}</div>
      </div>
      <button class="card-add-btn" onclick="event.stopPropagation();openItemModal('${cat}',${idx})">+ Tambah</button>
    </div>
  `;
  return div;
}

// ─────────── ITEM MODAL ───────────
function openItemModal(cat, idx){
  const item = MENUS[cat][idx];
  if(!item) return;
  currentModalItem = {cat, idx, item};

  const isOnlyLarge = item.onlyLarge === true;

  // Menu yang default-nya No Sugar (bisa diganti user)
  // Cocokkan persis nama "Americano", "Latte", "Cappuccino" (bukan "Spanish Latte" / "Vanilla Latte" / dll)
  const noSugarDefault = ['Americano', 'Cappuccino', 'Latte'];
  const defaultSugar = noSugarDefault.includes(item.name) ? 'No Sugar' : 'Normal Sugar';

  // Default whipped cream per menu frappe (tetap bisa diganti user)
  const whippedDefaults = {
    'Choco Caramel Frappe': 'Whipped Cream Chocolate',
    'Dutch Choco Kenangan Frappe': 'Whipped Cream Chocolate',
    'Tiramisu Frappe': 'Whipped Cream Chocolate',
    'Chocoberry Frappe': 'Whipped Cream Chocolate',
    'Butterscotch Kenangan Frappe': 'Whipped Cream Vanilla',
    'Matcha Kenangan Frappe': 'Whipped Cream Vanilla',
    'Kopi Kenangan Mantan Frappe': 'Whipped Cream Vanilla',
    'Vanilla Kenangan Frappe': 'Whipped Cream Vanilla',
    'Blueberry Frappe': 'Whipped Cream Vanilla',
    'Coffeberry Frappe': 'Whipped Cream Vanilla',
  };
  const defaultWhipped = whippedDefaults[item.name] || 'No Whipped Cream';

  modalState = {
    size: isOnlyLarge ? 'large' : 'regular',
    sugar: defaultSugar,
    ice: 'Normal Ice',
    whipped: defaultWhipped,
    qty: 1
  };

  buildModalContent();
  document.getElementById("itemModalOverlay").classList.add("open");
  lockBody();

  // Push history state biar tombol back HP nutup modal, bukan keluar website
  history.pushState({modal:'item'}, '');
}

function closeItemModal(fromPopState){
  document.getElementById("itemModalOverlay").classList.remove("open");
  unlockBody();
  currentModalItem = null;
  // Kalau ditutup via tombol X (bukan via back), perlu pop state biar history bersih
  if(!fromPopState && history.state && history.state.modal === 'item'){
    history.back();
  }
}

// Listener: tombol back HP / browser → tutup overlay paling atas yg lagi kebuka
window.addEventListener('popstate', function(e){
  // Cek brand preview overlay dulu (paling atas)
  const brandPreview = document.getElementById("brandPreviewOverlay");
  if(brandPreview && brandPreview.classList.contains('open')){
    closeBrandPreview(true);
    return;
  }
  // Lalu brand order modal
  const brandOrder = document.getElementById("brandOrderOverlay");
  if(brandOrder && brandOrder.classList.contains('open')){
    closeBrandOrder(true);
    return;
  }
  // Cek modal item
  const itemModal = document.getElementById("itemModalOverlay");
  if(itemModal && itemModal.classList.contains('open')){
    closeItemModal(true);
    return;
  }
  // Lalu cart drawer
  const cartDrawer = document.getElementById("cartDrawer");
  if(cartDrawer && cartDrawer.classList.contains('open')){
    closeCart(true);
    return;
  }
  // Lalu welcome modal
  const welcome = document.getElementById("welcomeOverlay");
  if(welcome && welcome.classList.contains('open')){
    closeWelcome(true);
    return;
  }
});

function buildModalContent(){
  if(!currentModalItem) return;
  const {cat, idx, item} = currentModalItem;
  const hasUpsize = item.upsize !== null;
  const isOnlyLarge = item.onlyLarge === true;
  const isDrink = !NO_SUGAR_ICE.includes(cat);
  const noIce = NO_ICE_OPTION.includes(cat);

  const imgHtml = `<img src="menu_items/${encodeURIComponent(item.img)}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:64px">${item.emo}</span>`;

  const sigBadge = item.signature ? `<div class="signature-tag" style="top:14px;left:14px">⭐ Signature</div>` : '';
  const newBadge = item.isNew ? `<div class="new-tag" style="top:14px;right:60px"><svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 1l2.4 7.6L22 11l-7.6 2.4L12 21l-2.4-7.6L2 11l7.6-2.4z"/></svg>BARU</div>` : '';

  let sizeSection = '';
  if(isDrink){
    if(hasUpsize){
      sizeSection = `
        <div class="modal-section">
          <div class="modal-label">📏 Pilih Size</div>
          <div class="modal-options">
            <button class="modal-opt ${modalState.size==='regular'?'active':''}" onclick="setModalSize('regular')">
              <div class="opt-main">Regular</div>
              <div class="opt-sub">${fmt(item.disc)}</div>
            </button>
            <button class="modal-opt ${modalState.size==='upsize'?'active':''}" onclick="setModalSize('upsize')">
              <div class="opt-main">Large</div>
              <div class="opt-sub">${fmt(item.upsize)}</div>
            </button>
          </div>
        </div>`;
    } else if(isOnlyLarge){
      sizeSection = `
        <div class="modal-section">
          <div class="modal-label">📏 Size</div>
          <div class="modal-fixed-size">Large Only · ${fmt(item.disc)}</div>
        </div>`;
    } else {
      sizeSection = `
        <div class="modal-section">
          <div class="modal-label">📏 Size</div>
          <div class="modal-fixed-size">Regular · ${fmt(item.disc)}</div>
        </div>`;
    }
  }

  let sugarSection = '';
  if(isDrink){
    // Menu tertentu cuma Normal & Less (tanpa No Sugar)
    const sugarOpts = LESS_SUGAR_ONLY.has(item.name)
      ? ['Normal Sugar','Less Sugar']
      : ['Normal Sugar','Less Sugar','No Sugar'];
    const sugarColClass = sugarOpts.length === 2 ? 'modal-options-2' : 'modal-options-3';
    sugarSection = `
      <div class="modal-section" data-section="sugar">
        <div class="modal-label">🥄 Sugar Level</div>
        <div class="modal-options ${sugarColClass}">
          ${sugarOpts.map(v=>`
            <button class="modal-opt ${modalState.sugar===v?'active':''}" onclick="setModalSugar('${v}')">
              <div class="opt-main">${v.replace(' Sugar','')}</div>
            </button>
          `).join('')}
        </div>
      </div>`;
  }

  let iceSection = '';
  if(isDrink && !noIce){
    if(BERRY_FRAPPE.has(item.name)){
      // Berry frappe: ice fix Normal, gak bisa diganti
      iceSection = `
        <div class="modal-section" data-section="ice">
          <div class="modal-label">🧊 Ice Level</div>
          <div class="modal-fixed-size">Normal Ice (Fixed)</div>
        </div>`;
    } else {
      // Frappe: cuma Normal & Less (tanpa No Ice). Lainnya: Normal/Less/No
      const iceOpts = ICE_NO_ZERO.includes(cat)
        ? ['Normal Ice','Less Ice']
        : ['Normal Ice','Less Ice','No Ice'];
      const iceColClass = iceOpts.length === 2 ? 'modal-options-2' : 'modal-options-3';
      iceSection = `
        <div class="modal-section" data-section="ice">
          <div class="modal-label">🧊 Ice Level</div>
          <div class="modal-options ${iceColClass}">
            ${iceOpts.map(v=>`
              <button class="modal-opt ${modalState.ice===v?'active':''}" onclick="setModalIce('${v}')">
                <div class="opt-main">${v.replace(' Ice','')}</div>
              </button>
            `).join('')}
          </div>
        </div>`;
    }
  }

  // Whipped Cream section (khusus frappe, KECUALI berry frappe)
  let whippedSection = '';
  if(HAS_WHIPPED.includes(cat) && !BERRY_FRAPPE.has(item.name)){
    const whippedOpts = [
      {val:'Whipped Cream Vanilla', label:'Vanilla', emo:'🍦'},
      {val:'Whipped Cream Chocolate', label:'Chocolate', emo:'🍫'},
      {val:'No Whipped Cream', label:'Tanpa', emo:'🚫'}
    ];
    whippedSection = `
      <div class="modal-section" data-section="whipped">
        <div class="modal-label">🍦 Whipped Cream</div>
        <div class="modal-options modal-options-3">
          ${whippedOpts.map(o=>`
            <button class="modal-opt ${modalState.whipped===o.val?'active':''}" onclick="setModalWhipped('${o.val}')">
              <div class="opt-main">${o.emo} ${o.label}</div>
            </button>
          `).join('')}
        </div>
      </div>`;
  }

  const totalPrice = computeModalPrice() * modalState.qty;

  document.getElementById("itemModalContent").innerHTML = `
    <div class="modal-image">
      ${sigBadge}
      ${newBadge}
      ${imgHtml}
    </div>
    <div class="modal-body">
      <div class="modal-title">${item.name}</div>
      <div class="modal-price-row">
        <span class="modal-price-old" id="modalPriceOld">${fmt(item.normal)}</span>
        <span class="modal-price-new" id="modalPriceNew">${fmt(computeModalPrice())}</span>
      </div>
      ${sizeSection}
      ${sugarSection}
      ${iceSection}
      ${whippedSection}
      <div class="modal-section">
        <div class="modal-label">Jumlah</div>
        <div class="modal-qty-row">
          <button class="modal-qty-btn" onclick="setModalQty(-1)">−</button>
          <span class="modal-qty-num" id="modalQtyNum">${modalState.qty}</span>
          <button class="modal-qty-btn" onclick="setModalQty(1)">+</button>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-add-cart" onclick="addToCartFromModal(event)">
        Tambah ke Keranjang · <span id="modalTotalPrice">${fmt(totalPrice)}</span>
      </button>
    </div>
  `;
}

function computeModalPrice(){
  if(!currentModalItem) return 0;
  const {item} = currentModalItem;
  if(modalState.size === 'upsize' && item.upsize) return item.upsize;
  return item.disc;
}

function updateModalTotal(){
  const totalEl = document.getElementById("modalTotalPrice");
  if(totalEl) totalEl.textContent = fmt(computeModalPrice() * modalState.qty);
  const qtyEl = document.getElementById("modalQtyNum");
  if(qtyEl) qtyEl.textContent = modalState.qty;
}

function setModalSize(size){
  modalState.size = size;
  buildModalContent();
}
function setModalSugar(val){
  modalState.sugar = val;
  // Toggle active via data-section attribute (lebih reliable dari text matching)
  const sec = document.querySelector('#itemModalContent [data-section="sugar"]');
  if(!sec) return;
  sec.querySelectorAll('.modal-opt').forEach(b=>{
    b.classList.toggle('active', b.textContent.trim() === val.replace(' Sugar',''));
  });
}
function setModalIce(val){
  modalState.ice = val;
  const sec = document.querySelector('#itemModalContent [data-section="ice"]');
  if(!sec) return;
  sec.querySelectorAll('.modal-opt').forEach(b=>{
    b.classList.toggle('active', b.textContent.trim() === val.replace(' Ice',''));
  });
}
function setModalWhipped(val){
  modalState.whipped = val;
  const sec = document.querySelector('#itemModalContent [data-section="whipped"]');
  if(!sec) return;
  // Map value ke label yang tampil di tombol
  const labelMap = {
    'Whipped Cream Vanilla':'🍦 Vanilla',
    'Whipped Cream Chocolate':'🍫 Chocolate',
    'No Whipped Cream':'🚫 Tanpa'
  };
  sec.querySelectorAll('.modal-opt').forEach(b=>{
    b.classList.toggle('active', b.textContent.trim() === labelMap[val]);
  });
}
function setModalQty(delta){
  modalState.qty = Math.max(1, modalState.qty + delta);
  updateModalTotal();
}

function addToCartFromModal(ev){
  if(!currentModalItem) return;
  const {cat, idx, item} = currentModalItem;
  const isDrink = !NO_SUGAR_ICE.includes(cat);

  const cartId = `${cat}-${idx}-${Date.now()}`;
  const isUpsize = modalState.size === 'upsize';
  const isLarge = modalState.size === 'large';
  const sizeLabel = isUpsize ? 'Large' : (isLarge ? 'Large' : 'Regular');
  const price = isUpsize && item.upsize ? item.upsize : item.disc;

  cart.push({
    id: cartId,
    menuKey: `${cat}-${idx}`,
    name: item.name,
    size: isDrink ? sizeLabel : null,
    price: price,
    qty: modalState.qty,
    sugar: isDrink ? modalState.sugar : null,
    ice: (isDrink && !NO_ICE_OPTION.includes(cat)) ? (BERRY_FRAPPE.has(item.name) ? 'Normal Ice' : modalState.ice) : null,
    whipped: HAS_WHIPPED.includes(cat) ? modalState.whipped : null,
    emo: item.emo
  });
  saveCart();

  const cartBtn = document.querySelector(".cart-btn");
  cartBtn.classList.remove("bump");
  void cartBtn.offsetWidth;
  cartBtn.classList.add("bump");

  if(ev){
    flyToCart(ev, item.emo);
  }

  document.querySelectorAll(`[data-cat="${cat}"][data-idx="${idx}"]`).forEach(c=>c.classList.add('selected'));

  if(navigator.vibrate) navigator.vibrate(25);
  closeItemModal();
  showToast(`✓ ${item.name} ditambahkan ke keranjang`);

  renderCart();
  updateCartCount();
  updateFloatHint();
}

// ─────────── FLY ANIMATION ───────────
function flyToCart(ev, emoji){
  const fly = document.getElementById("flyItem");
  const cartBtn = document.querySelector(".cart-btn");
  if(!fly || !cartBtn) return;

  const cartRect = cartBtn.getBoundingClientRect();
  const startX = ev.clientX - 20;
  const startY = ev.clientY - 20;
  const endX = cartRect.left + cartRect.width/2 - 20;
  const endY = cartRect.top + cartRect.height/2 - 20;

  // Titik tengah (peak) untuk arc — naik dulu sebelum turun ke cart
  const midX = (startX + endX) / 2;
  const peakY = Math.min(startY, endY) - 80; // 80px lebih tinggi dari titik tertinggi

  fly.textContent = emoji;
  fly.style.left = startX+"px";
  fly.style.top = startY+"px";
  fly.style.opacity = '1';
  fly.style.transform = 'scale(1) rotate(0deg)';
  fly.style.transition = 'none';
  fly.classList.remove("flying");
  void fly.offsetWidth;

  // Phase 1: terbang ke titik peak (naik) — 280ms
  fly.style.transition = 'left .28s cubic-bezier(.3,0,.3,1), top .28s cubic-bezier(.4,0,.6,-0.2), transform .28s ease-out';
  fly.style.left = midX+"px";
  fly.style.top = peakY+"px";
  fly.style.transform = 'scale(1.15) rotate(-15deg)';

  // Phase 2: turun ke cart sambil mengecil & berputar — 380ms
  setTimeout(()=>{
    fly.style.transition = 'left .38s cubic-bezier(.5,.1,.7,.4), top .38s cubic-bezier(.4,0,.6,1.4), transform .38s ease-in, opacity .38s ease-in';
    fly.style.left = endX+"px";
    fly.style.top = endY+"px";
    fly.style.transform = 'scale(.3) rotate(180deg)';
    fly.style.opacity = '0';
  }, 280);

  setTimeout(()=>{
    fly.style.transition='none';
    fly.style.opacity = '0';
  }, 700);
}

// ─────────── CART RENDER ───────────
// Bangun list 3 menu signature untuk shown di empty cart
function buildEmptyCartSuggestions(){
  const list = document.getElementById("cartEmptySuggList");
  if(!list || list.dataset.built === '1') return;

  // Ambil semua signature menu, lalu pilih 3 random
  const allSig = [];
  Object.keys(MENUS).forEach(cat=>{
    MENUS[cat].forEach((item, idx)=>{
      if(item.signature) allSig.push({cat, idx, item});
    });
  });
  // Shuffle simple, ambil 3
  const picked = allSig.sort(()=>Math.random()-0.5).slice(0,3);

  list.innerHTML = picked.map(({cat, idx, item})=>`
    <div class="sugg-item" onclick="closeCart();setTimeout(()=>openItemModal('${cat}',${idx}),320)">
      <img class="sugg-item-img" src="menu_items/${encodeURIComponent(item.img)}"
           alt="${item.name}" loading="lazy"
           onerror="this.style.display='none'">
      <div class="sugg-item-info">
        <div class="sugg-item-name">${item.name}</div>
        <div class="sugg-item-price">
          <span class="sugg-item-price-old">${fmt(item.normal)}</span>
          <span class="sugg-item-price-new">${fmt(item.disc)}</span>
        </div>
      </div>
      <span class="sugg-item-arrow">→</span>
    </div>
  `).join('');
  list.dataset.built = '1';
}

function renderCart(){
  const body = document.getElementById("cartBody");
  const empty = document.getElementById("cartEmpty");
  const resetBtn = document.getElementById("resetBtn");
  if(cart.length===0){
    empty.style.display='block';
    body.querySelectorAll(".cart-item").forEach(e=>e.remove());
    document.getElementById("totalPrice").textContent="Rp0";
    document.getElementById("sendBtn").disabled=true;
    if(resetBtn) resetBtn.disabled=true;
    buildEmptyCartSuggestions();
    return;
  }
  empty.style.display='none';
  body.querySelectorAll(".cart-item").forEach(e=>e.remove());
  let total=0;
  cart.forEach(ci=>{
    total += ci.price*ci.qty;
    const div=document.createElement("div");
    div.className="cart-item";
    let metaParts = [];
    if(ci.size) metaParts.push(ci.size);
    if(ci.sugar) metaParts.push(ci.sugar);
    if(ci.ice) metaParts.push(ci.ice);
    if(ci.whipped && ci.whipped !== 'No Whipped Cream'){
      metaParts.push(ci.whipped.replace('Whipped Cream ','WC '));
    }
    const metaStr = metaParts.length
      ? metaParts.map((m,i)=>i===0?m:`<span class="pipe">·</span>${m}`).join('')
      : '';
    div.dataset.cartid = ci.id;
    div.innerHTML=`
      <span class="ci-drag-handle" title="Geser untuk urut ulang">⠿</span>
      <div class="ci-left">
        <div class="ci-name">${ci.name}</div>
        ${metaStr ? `<div class="ci-meta">${metaStr}</div>` : ''}
        <div class="ci-price">${fmt(ci.price)} × ${ci.qty} = ${fmt(ci.price*ci.qty)}</div>
      </div>
      <div class="ci-right">
        <div class="ci-qty">
          <button class="ci-q-btn" onclick="cartChangeQty('${ci.id}',-1)">−</button>
          <span>${ci.qty}</span>
          <button class="ci-q-btn" onclick="cartChangeQty('${ci.id}',1)">+</button>
        </div>
        <button class="ci-del" onclick="removeFromCart('${ci.id}')">Hapus</button>
      </div>
    `;
    body.insertBefore(div, empty);
  });

  // Cek promo
  const promoActive = PROMO.active && PROMO.check(cart);
  const discount = promoActive ? PROMO.discount : 0;

  // Hapus promo row lama kalau ada
  const oldPromoRow = document.getElementById('cartPromoRow');
  if(oldPromoRow) oldPromoRow.remove();

  // Tambah promo row kalau syarat terpenuhi
  if(promoActive){
    const promoDiv = document.createElement('div');
    promoDiv.className = 'cart-promo-row';
    promoDiv.id = 'cartPromoRow';
    promoDiv.innerHTML = `
      <span class="cart-promo-label">🎉 Promo (${PROMO.label})</span>
      <span class="cart-promo-amount">-${fmt(discount)}</span>
    `;
    // Masukkan sebelum total
    const totalRow = document.getElementById('totalPrice')?.closest('.cart-total-row') || document.getElementById('totalPrice')?.parentElement;
    if(totalRow) totalRow.parentElement.insertBefore(promoDiv, totalRow);
    else body.appendChild(promoDiv);
  }

  document.getElementById("totalPrice").textContent = fmt(Math.max(0, total - discount));
  document.getElementById("sendBtn").disabled=false;
  if(resetBtn) resetBtn.disabled=false;
}

function cartChangeQty(id, delta){
  const ci=cart.find(c=>c.id===id);
  if(!ci) return;
  ci.qty=Math.max(0,ci.qty+delta);
  if(ci.qty===0){
    removeFromCart(id);
    return;
  }
  saveCart();
  renderCart();
  updateCartCount();
  updateFloatHint();
}

function removeFromCart(id){
  const ci = cart.find(c=>c.id===id);
  if(!ci) return;
  const menuKey = ci.menuKey;
  cart = cart.filter(c=>c.id!==id);
  const stillExists = cart.some(c=>c.menuKey===menuKey);
  if(!stillExists && menuKey){
    const [cat, idx] = menuKey.split("-");
    document.querySelectorAll(`[data-cat="${cat}"][data-idx="${idx}"]`).forEach(c=>c.classList.remove('selected'));
  }
  saveCart();
  renderCart();
  updateCartCount();
  updateFloatHint();
}

function updateCartCount(){
  const total=cart.reduce((s,c)=>s+c.qty,0);
  const el = document.getElementById("cartCount");
  el.textContent=total;
  // pop animation
  el.classList.remove("pop");
  void el.offsetWidth;
  if(total > 0) el.classList.add("pop");
  setTimeout(()=>el.classList.remove("pop"), 500);
}

function updateFloatHint(){
  const fh=document.getElementById("floatHint");
  const total=cart.reduce((s,c)=>s+c.qty,0);
  if(total>0){
    fh.classList.add("visible");
    const price=cart.reduce((s,c)=>s+c.price*c.qty,0);

    // Hitung penghematan: harga normal - harga disc/upsize yg dibayar
    let savings = 0;
    cart.forEach(c=>{
      if(!c.menuKey) return;
      const [cat, idx] = c.menuKey.split('-');
      const item = MENUS[cat] && MENUS[cat][parseInt(idx)];
      if(!item) return;
      // Harga normal item itu (harga app sebelum jasdor)
      const normalPrice = item.normal;
      // Yg user bayar (sudah harga disc/upsize)
      const paidPrice = c.price;
      const diff = (normalPrice - paidPrice) * c.qty;
      if(diff > 0) savings += diff;
    });

    const ft = document.getElementById("floatText");
    if(savings > 0){
      ft.innerHTML = `${total} item · ${fmt(price)} <span class="float-savings">Hemat ${fmt(savings)}</span>`;
    } else {
      ft.textContent = `${total} item · ${fmt(price)}`;
    }
  } else {
    fh.classList.remove("visible");
  }
}

// ─────────── CART DRAWER ───────────
function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
  lockBody();
  history.pushState({modal:'cart'}, '');
}
function closeCart(fromPopState){
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
  unlockBody();
  if(!fromPopState && history.state && history.state.modal === 'cart'){
    history.back();
  }
}

// ─────────── RESET ───────────
function confirmReset(){
  document.getElementById("confirmOverlay").classList.add("open");
}
function closeConfirm(){
  document.getElementById("confirmOverlay").classList.remove("open");
}
function resetCart(){
  document.querySelectorAll('.menu-card.selected').forEach(c=>c.classList.remove('selected'));
  cart=[];
  clearCartStorage();
  renderCart();
  updateCartCount();
  updateFloatHint();
  closeConfirm();
  showToast("✅ Pesanan dikosongkan");
}

// ─────────── SEND WA (with PREVIEW step) ───────────
function sendToWA(){
  const nama=document.getElementById("inputNama").value.trim();
  const outlet=document.getElementById("inputOutlet").value.trim();
  if(!nama){showToast("⚠️ Isi nama kamu dulu ya!");document.getElementById("inputNama").focus();return;}
  if(!outlet){showToast("⚠️ Isi outlet Kopi Kenangan-nya!");document.getElementById("inputOutlet").focus();return;}
  if(cart.length===0){showToast("⚠️ Pilih menu dulu ya!");return;}

  buildPreview();
  document.getElementById("previewOverlay").classList.add("open");
}

function buildPreview(){
  const nama=document.getElementById("inputNama").value.trim();
  const outlet=document.getElementById("inputOutlet").value.trim();
  const note=document.getElementById("inputNote").value.trim();
  const body=document.getElementById("previewBody");
  let html='';
  html+=`<div class="preview-row"><span class="preview-label">Nama:</span><span class="preview-val">${nama}</span></div>`;
  html+=`<div class="preview-row"><span class="preview-label">Outlet:</span><span class="preview-val">${outlet}</span></div>`;
  if(note) html+=`<div class="preview-row"><span class="preview-label">Catatan:</span><span class="preview-val">${note}</span></div>`;
  html+=`<div class="pv-divider"></div>`;
  let total=0;
  cart.forEach((ci,i)=>{ total+=ci.price*ci.qty;
    let detail=ci.size ? `${ci.size} × ${ci.qty}` : `× ${ci.qty}`;
    if(ci.sugar) detail+=` · ${ci.sugar}`;
    if(ci.ice) detail+=` · ${ci.ice}`;
    if(ci.whipped && ci.whipped !== 'No Whipped Cream') detail+=` · ${ci.whipped}`;
    html+=`<div class="pv-item">
      <div class="pv-item-name">${i+1}. ${ci.name}</div>
      <div class="pv-item-detail">${detail}</div>
      <div class="pv-item-price">${fmt(ci.price*ci.qty)}</div>
    </div>`;
  });
  const promoActive = PROMO.active && PROMO.check(cart);
  const discount = promoActive ? PROMO.discount : 0;
  if(promoActive){
    html+=`<div class="pv-item" style="color:#4CAF50">
      <div class="pv-item-name">🎉 Promo (${PROMO.label})</div>
      <div class="pv-item-price">-${fmt(discount)}</div>
    </div>`;
  }
  html+=`<div class="pv-total">
    <span class="pv-total-label">TOTAL</span>
    <span class="pv-total-price">${fmt(Math.max(0, total - discount))}</span>
  </div>`;
  body.innerHTML=html;
}

function closePreview(){
  document.getElementById("previewOverlay").classList.remove("open");
}

function confirmSendToWA(){
  const nama=document.getElementById("inputNama").value.trim();
  const outlet=document.getElementById("inputOutlet").value.trim();
  const note=document.getElementById("inputNote").value.trim();

  let msg="*[ ORDER KOPI KENANGAN @Faqih0354 ]*\n";
  msg+="──────────────────────\n";
  msg+=`*Nama:* ${nama}\n`;
  msg+=`*Outlet:* ${outlet}\n`;
  if(note) msg+=`*Catatan:* ${note}\n`;
  msg+="──────────────────────\n";
  let total=0;
  cart.forEach((ci,i)=>{
    msg+=`${i+1}. *${ci.name}*\n`;
    const sizeStr = ci.size ? `${ci.size} x${ci.qty}` : `x${ci.qty}`;
    msg+=`   ${sizeStr} = ${fmt(ci.price*ci.qty)}\n`;
    if(ci.sugar) msg+=`   Sugar: ${ci.sugar}\n`;
    if(ci.ice) msg+=`   Ice: ${ci.ice}\n`;
    if(ci.whipped && ci.whipped !== 'No Whipped Cream') msg+=`   Whipped: ${ci.whipped.replace('Whipped Cream ','')}\n`;
    total+=ci.price*ci.qty;
  });
  msg+="──────────────────────\n";
  const promoActive = PROMO.active && PROMO.check(cart);
  const discount = promoActive ? PROMO.discount : 0;
  if(promoActive){
    msg+=`🎉 *PROMO: -${fmt(discount)}* (${PROMO.label})\n`;
  }
  msg+=`*TOTAL: ${fmt(Math.max(0, total - discount))}*\n`;
  msg+="──────────────────────\n";
  msg+="*Follow & Cek Testi:*\n";
  msg+="Order : instagram.com/faqih0354\n";
  msg+="Testi  : instagram.com/faqih0354\n";
  msg+=`WA      : wa.me/${WA_NUMBER}`;

  const url="https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(msg);
  window._lastWAUrl = url; // simpan untuk tombol fallback

  // Clear cart (nama & outlet tetep tersimpan di localStorage)
  cart = [];
  clearCartStorage();
  document.querySelectorAll('.menu-card.selected').forEach(c=>c.classList.remove('selected'));
  renderCart();
  updateCartCount();
  updateFloatHint();

  closePreview();
  closeCart();

  // Buka WA dengan tag <a> programatik — lebih reliable di mobile
  // dibanding window.open() (yang sering di-block sebagai popup)
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setTimeout(()=>{
    document.getElementById("successOverlay").classList.add("open");
    // Set href tombol fallback "Coba Buka WA Lagi"
    const fallbackBtn = document.getElementById("successWaBtn");
    if(fallbackBtn && window._lastWAUrl) fallbackBtn.href = window._lastWAUrl;
    fireConfetti();
  }, 300);
}

function closeSuccess(){
  document.getElementById("successOverlay").classList.remove("open");
  try{ sessionStorage.removeItem("obd_welcome_seen"); }catch(e){}
  setTimeout(openWelcome, 400);
}

// ─────────── CONFETTI ───────────
function fireConfetti(){
  const colors=['#D4882A','#F0C06A','#25D366','#FDF0DC','#FFD93D','#E05252'];
  const count=60;
  for(let i=0;i<count;i++){
    const piece=document.createElement('div');
    piece.className='confetti-piece';
    piece.style.left=Math.random()*100+'vw';
    piece.style.background=colors[Math.floor(Math.random()*colors.length)];
    piece.style.animationDelay=(Math.random()*0.5)+'s';
    piece.style.animationDuration=(1.8+Math.random()*1.2)+'s';
    piece.style.width=(6+Math.random()*6)+'px';
    piece.style.height=(10+Math.random()*8)+'px';
    document.body.appendChild(piece);
    setTimeout(()=>piece.remove(), 3500);
  }
}

// ─────────── TOAST ───────────
function showToast(msg){
  const t=document.getElementById("toastNotif");
  t.textContent=msg;t.classList.add("show");
  clearTimeout(t._tid);
  t._tid=setTimeout(()=>t.classList.remove("show"),2400);
}

// ─────────── PROMO CONFIG ───────────
const PROMO = {
  active: true,
  label: '2 Large / min. Rp35.000',
  discount: 2000,
  check: (cart) => {
    const total = cart.reduce((s, ci) => s + ci.price * ci.qty, 0);
    const largeCount = cart.reduce((s, ci) => s + (ci.size === 'Large' ? ci.qty : 0), 0);
    return total >= 35000 || largeCount >= 2;
  }
};

function openPromoPopup(){
  document.getElementById('promoPopupOverlay').classList.add('open');
}
function closePromoPopup(){
  document.getElementById('promoPopupOverlay').classList.remove('open');
  // Jangan muncul lagi di session ini setelah ditutup manual
  sessionStorage.setItem('promoClosed','1');
}

// Auto-show promo popup sekali per session
if(PROMO.active && !sessionStorage.getItem('promoClosed')){
  setTimeout(openPromoPopup, 1500);
}

function filterCategory(cat, btn){
  activeCategory = cat;
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  btn.classList.add("active");
  applyFilters();

  // Auto-center tab yang ditap ke tengah scroll bar (mirip behavior aplikasi mobile)
  const tabsBar = document.getElementById("tabsBar");
  if(tabsBar && btn){
    const tabRect = btn.getBoundingClientRect();
    const barRect = tabsBar.getBoundingClientRect();
    // Posisi tengah tab relatif terhadap scroll-container, dikurangi setengah lebar bar
    const targetScroll = tabsBar.scrollLeft + (tabRect.left - barRect.left)
                         - (barRect.width / 2) + (tabRect.width / 2);
    tabsBar.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }

  if(cat!=='all'){
    setTimeout(()=>{
      const targetId = (cat === 'new') ? 'new-menu' : cat;
      const sec = document.getElementById(targetId);
      if(sec){
        const top = sec.getBoundingClientRect().top + window.scrollY - 200;
        window.scrollTo({top, behavior:'smooth'});
      }
    },50);
  } else {
    window.scrollTo({top:0, behavior:'smooth'});
  }
}

function setQuickFilter(filter, btn){
  activeQuickFilter = filter;
  document.querySelectorAll(".qfilter").forEach(t=>t.classList.remove("active"));
  btn.classList.add("active");
  applyFilters();
}

let _searchDebounceTimer = null;
function handleSearch(val){
  const clearBtn = document.getElementById("searchClear");
  clearBtn.classList.toggle("visible", !!val.trim());

  clearTimeout(_searchDebounceTimer);
  _searchDebounceTimer = setTimeout(()=>{
    searchQuery = val.trim().toLowerCase();
    applyFilters();
  }, 150);
}

function clearSearch(){
  document.getElementById("searchInput").value="";
  searchQuery="";
  document.getElementById("searchClear").classList.remove("visible");
  applyFilters();
}

// Tap chip rekomendasi di no-results → langsung isi search
function searchSuggestion(keyword){
  const input = document.getElementById("searchInput");
  if(!input) return;
  input.value = keyword;
  searchQuery = keyword.toLowerCase();
  document.getElementById("searchClear").classList.add("visible");
  applyFilters();
  if(navigator.vibrate) navigator.vibrate(10);
}

// Reset pencarian + quick filter sekaligus → balik ke "Semua" tanpa filter
function resetSearchAndFilters(){
  document.getElementById("searchInput").value = "";
  searchQuery = "";
  document.getElementById("searchClear").classList.remove("visible");
  // Reset quick filter ke "Semua"
  activeQuickFilter = 'all';
  document.querySelectorAll(".qfilter").forEach(t=>t.classList.remove("active"));
  const allBtn = document.querySelector('.qfilter[data-filter="all"]');
  if(allBtn) allBtn.classList.add("active");
  // Reset tab kategori ke "Semua"
  activeCategory = 'all';
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  const allTab = document.querySelector('.tab[data-cat="all"]');
  if(allTab) allTab.classList.add("active");
  applyFilters();
  if(navigator.vibrate) navigator.vibrate(15);
}

function applyFilters(){
  let visibleAny = false;
  document.querySelectorAll(".cat-section").forEach(sec=>{
    const cat = sec.id;
    let secHasVisible = false;

    let catMatch;
    if(activeCategory === 'new'){
      // Tab "Menu Baru" → cuma section new-menu
      catMatch = (cat === 'new-menu');
    } else if(activeCategory === 'all'){
      // Tab "Semua" → tampilkan SEMUA section termasuk Menu Baru
      catMatch = true;
    } else {
      // Tab spesifik (Coffee, dll) → cuma section itu, jangan tampilkan duplicate di Menu Baru
      catMatch = (cat === activeCategory);
    }

    // Saat search aktif, jangan tampilkan section Menu Baru (item-nya udah di section asal-nya)
    // KECUALI kalau memang lagi di tab "Menu Baru"
    if(searchQuery && cat === 'new-menu') catMatch = false;

    sec.querySelectorAll(".menu-card").forEach(card=>{
      const name = card.dataset.name;
      const hasUpsize = card.dataset.upsize==='1';
      const price = parseInt(card.dataset.price);
      const isSig = card.dataset.signature==='1';
      const isNewItem = card.dataset.isnew==='1';

      let show = catMatch;

      // Di tab "Semua" TANPA search: item baru hanya tampil di section new-menu
      // Saat search aktif: item baru tampil di section aslinya (new-menu sudah di-hide)
      if(show && activeCategory === 'all' && cat !== 'new-menu' && isNewItem && !searchQuery){
        show = false;
      }

      if(show && searchQuery){
        show = name.includes(searchQuery);
      }
      if(show){
        if(activeQuickFilter==='upsize') show = hasUpsize;
        else if(activeQuickFilter==='under15') show = price<=15000;
        else if(activeQuickFilter==='signature') show = isSig;
      }

      card.style.display = show ? '' : 'none';
      if(show){ secHasVisible=true; visibleAny=true; }
    });

    sec.classList.toggle("hidden", !secHasVisible);
  });

  // ─── No-results state: pesan kontekstual ───
  const noRes = document.getElementById("noResults");
  noRes.style.display = visibleAny ? 'none' : 'block';

  if(!visibleAny){
    const txtEl = document.getElementById("noResultsText");
    const sugEl = document.getElementById("noResultsSuggestions");
    if(!txtEl || !sugEl) return;

    // Map kategori ke label cantik
    const catLabel = {
      all: 'Semua', new: 'Menu Baru', coffee: 'Coffee', noncoffee: 'Non Coffee',
      oatside: 'Oatside', frappe: 'Frappe', bake: 'Signature Bake',
      toast: 'Toast', food: 'Food'
    };
    const filterLabel = {
      upsize: 'Bisa Large', under15: '≤ Rp15K', signature: 'Signature'
    };

    if(searchQuery){
      // Kasus 1: User sedang search dan gak ketemu
      txtEl.innerHTML = `Menu "<b>${escapeHtml(searchQuery)}</b>" gak ketemu...<br><small>Coba kata kunci lain ya</small>`;
      sugEl.style.display = 'flex';
    } else if(activeQuickFilter !== 'all' && activeCategory !== 'all'){
      // Kasus 2: Kombinasi kategori + quick filter, kosong
      const cat = catLabel[activeCategory] || activeCategory;
      const flt = filterLabel[activeQuickFilter] || activeQuickFilter;
      txtEl.innerHTML = `Belum ada menu <b>${flt}</b> di kategori <b>${cat}</b><br><small>Coba kategori lain atau reset filter</small>`;
      sugEl.style.display = 'flex';
    } else if(activeQuickFilter !== 'all'){
      // Kasus 3: Cuma quick filter, kosong (jarang banget tapi handle)
      const flt = filterLabel[activeQuickFilter] || activeQuickFilter;
      txtEl.innerHTML = `Belum ada menu <b>${flt}</b><br><small>Coba reset filter</small>`;
      sugEl.style.display = 'flex';
    } else {
      // Default
      txtEl.innerHTML = `Menu gak ketemu nih...<br><small>Coba kata kunci lain ya</small>`;
      sugEl.style.display = 'flex';
    }
  }
}

// Helper: escape HTML untuk safety di innerHTML
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

// ─────────── INIT ───────────
loadCart();
renderMenus();
renderCart();
updateCartCount();
updateFloatHint();

// Re-mark selected cards berdasarkan cart yang baru di-load
cart.forEach(ci=>{
  if(!ci.menuKey) return;
  const [cat, idx] = ci.menuKey.split("-");
  document.querySelectorAll(`[data-cat="${cat}"][data-idx="${idx}"]`).forEach(c=>c.classList.add('selected'));
});

try{
  if(!sessionStorage.getItem("obd_welcome_seen")){
    setTimeout(openWelcome, 350);
  }
}catch(e){
  setTimeout(openWelcome, 350);
}

// ─────────── BUKTI ORDER REAL ───────────
const REAL_ORDERS = [
  { num:"005", name:"Lela",   date:"10 Jan" },
  { num:"006", name:"Lela",   date:"10 Jan" },
  { num:"025", name:"Linda",  date:"17 Des" },
  { num:"031", name:"Akbar",  date:"21 Des" },
  { num:"032", name:"Akbar",  date:"21 Des" },
  { num:"035", name:"Akbar",  date:"21 Des" },
  { num:"037", name:"Customer", date:"21 Des" },
  { num:"043", name:"Panji",  date:"21 Des" },
  { num:"044", name:"Customer", date:"27 Des" },
  { num:"046", name:"Kania",  date:"17 Des" },
  { num:"047", name:"Customer", date:"21 Des" },
  { num:"060", name:"Customer", date:"27 Des" },
];

(function renderRealOrders(){
  const track = document.getElementById("testiTrack");
  if(!track) return;
  REAL_ORDERS.forEach(o=>{
    const card = document.createElement('div');
    card.className = 'testi-card';
    card.innerHTML = `
      <div class="proof-status">Pesanan Berhasil</div>
      <div class="proof-orderlbl">Nomor Order</div>
      <div class="proof-ordernum">${o.num}</div>
      <div class="proof-name">atas nama <b>${o.name}</b></div>
      <div class="proof-foot">
        <span>${o.date} 2026</span>
        <span class="check">✓ Pickup Done</span>
      </div>
    `;
    track.appendChild(card);
  });
})();

// ─────────── AUTO-SAVE FORM ───────────
(function autoSaveForm(){
  const nama = document.getElementById("inputNama");
  const outlet = document.getElementById("inputOutlet");
  if(!nama || !outlet) return;

  try{
    const savedN = localStorage.getItem("obd_nama");
    const savedO = localStorage.getItem("obd_outlet");
    if(savedN) nama.value = savedN;
    if(savedO) outlet.value = savedO;
  }catch(e){}

  function saveLater(key, el){
    let timer;
    el.addEventListener("input", ()=>{
      clearTimeout(timer);
      timer = setTimeout(()=>{
        try{ localStorage.setItem(key, el.value.trim()); }catch(e){}
      }, 400);
    });
  }
  saveLater("obd_nama", nama);
  saveLater("obd_outlet", outlet);
})();

// ─────────── STAGGERED FADE-IN ───────────
(function fadeInMenuCards(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.menu-card').forEach(c=>c.classList.add('fade-in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry, idx)=>{
      if(entry.isIntersecting){
        const delay = idx * 50;
        setTimeout(()=>entry.target.classList.add('fade-in'), delay);
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin:'0px 0px -40px 0px', threshold:0.05 });

  document.querySelectorAll('.menu-card').forEach(c=>io.observe(c));
})();

// ─────────── IMAGE FADE-IN ON LOAD ───────────
(function initImageFade(){
  function attachFade(img){
    if(img.complete && img.naturalWidth > 0){
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', ()=>img.classList.add('loaded'), {once:true});
    }
  }
  document.querySelectorAll('.card-emoji img').forEach(attachFade);
  // Also handle dynamically added images via MutationObserver
  const mo = new MutationObserver(muts=>{
    muts.forEach(m=>{
      m.addedNodes.forEach(n=>{
        if(n.nodeType===1){
          if(n.tagName==='IMG') attachFade(n);
          n.querySelectorAll && n.querySelectorAll('.card-emoji img').forEach(attachFade);
        }
      });
    });
  });
  mo.observe(document.body, {childList:true, subtree:true});
})();

// ─────────── BUKTI ORDER AUTO-SCROLL ───────────
(function(){
  const track = document.getElementById("testiTrack");
  if(!track) return;
  let scrollDir = 1;
  let autoScrollInterval = null;
  let userTouched = false;

  function startAutoScroll(){
    if(userTouched) return;
    autoScrollInterval = setInterval(()=>{
      if(userTouched){ clearInterval(autoScrollInterval); return; }
      const maxScroll = track.scrollWidth - track.clientWidth;
      if(maxScroll <= 0) return;
      track.scrollLeft += scrollDir * 0.7;
      if(track.scrollLeft >= maxScroll - 1) scrollDir = -1;
      else if(track.scrollLeft <= 1) scrollDir = 1;
    }, 16);
  }

  function stopAutoScroll(){
    userTouched = true;
    clearInterval(autoScrollInterval);
  }

  track.addEventListener("touchstart", stopAutoScroll, {once:true});
  track.addEventListener("mousedown", stopAutoScroll, {once:true});

  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting && !userTouched){
          startAutoScroll();
          io.disconnect();
        }
      });
    }, {threshold:0.3});
    io.observe(track);
  } else {
    setTimeout(startAutoScroll, 2000);
  }
})();

// ─────────── TABS PEEK & BOUNCE HINT ───────────
// Sekali jalan pas pertama load: tabs geser ~80px ke kanan, lalu balik ke 0
// dengan easing halus → user langsung paham "oh bisa di-geser"
(function(){
  const tabs = document.getElementById("tabsBar");
  if(!tabs) return;

  let userTouched = false;
  let animationDone = false;

  function easeInOutCubic(t){
    return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
  }

  function peekAndBounce(){
    if(userTouched || animationDone) return;
    const maxScroll = tabs.scrollWidth - tabs.clientWidth;
    if(maxScroll <= 0) return;

    const PEEK_DISTANCE = Math.min(90, maxScroll); // geser ~90px ke kanan
    const PEEK_DURATION = 700;   // ms — geser ke kanan
    const HOLD_DURATION = 250;   // ms — diem sebentar di kanan
    const BACK_DURATION = 600;   // ms — balik ke awal

    const startTime = performance.now();

    function step(now){
      if(userTouched){ tabs.scrollLeft = 0; animationDone = true; return; }
      const elapsed = now - startTime;

      if(elapsed < PEEK_DURATION){
        // fase 1: geser kanan
        const t = elapsed / PEEK_DURATION;
        tabs.scrollLeft = PEEK_DISTANCE * easeInOutCubic(t);
        requestAnimationFrame(step);
      } else if(elapsed < PEEK_DURATION + HOLD_DURATION){
        // fase 2: hold di kanan
        tabs.scrollLeft = PEEK_DISTANCE;
        requestAnimationFrame(step);
      } else if(elapsed < PEEK_DURATION + HOLD_DURATION + BACK_DURATION){
        // fase 3: balik ke 0
        const t = (elapsed - PEEK_DURATION - HOLD_DURATION) / BACK_DURATION;
        tabs.scrollLeft = PEEK_DISTANCE * (1 - easeInOutCubic(t));
        requestAnimationFrame(step);
      } else {
        // selesai
        tabs.scrollLeft = 0;
        animationDone = true;
        // fade out hint
        const hint = document.querySelector(".tabs-swipe-hint");
        if(hint){ hint.style.transition="opacity .5s"; hint.style.opacity="0"; }
      }
    }

    requestAnimationFrame(step);
  }

  function stopAuto(){
    userTouched = true;
    const hint = document.querySelector(".tabs-swipe-hint");
    if(hint){ hint.style.transition="opacity .4s"; hint.style.opacity="0"; }
  }

  tabs.addEventListener("touchstart", stopAuto, {once:true});
  tabs.addEventListener("mousedown", stopAuto, {once:true});

  // Tunggu sebentar biar layar settle dulu, baru animasi jalan
  setTimeout(peekAndBounce, 1400);
})();

// ── BRAND SWITCHER ──
const BRAND_ORDER = ['kopken', 'tomoro', 'fore'];
let currentBrand = 'kopken';

function switchBrand(brand, el) {
  if(brand === currentBrand) return;

  const prevIdx = BRAND_ORDER.indexOf(currentBrand);
  const nextIdx = BRAND_ORDER.indexOf(brand);
  const direction = nextIdx > prevIdx ? 'right' : 'left';

  // update buttons
  document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  const kopkenContent = document.getElementById('page-kopken');
  const tomoroPage = document.getElementById('page-tomoro');
  const forePage = document.getElementById('page-fore');
  const pages = { kopken: kopkenContent, tomoro: tomoroPage, fore: forePage };

  // hide all first
  Object.values(pages).forEach(p => {
    p.style.display = 'none';
    p.classList.remove('page-enter-left', 'page-enter-right');
  });

  const enterClass = direction === 'right' ? 'page-enter-right' : 'page-enter-left';
  const target = pages[brand];
  target.style.display = 'block';

  // force reflow then add animation class
  void target.offsetWidth;
  target.classList.add(enterClass);
  setTimeout(() => target.classList.remove(enterClass), 350);

  currentBrand = brand;

  // scroll to brand switcher
  document.querySelector('.brand-switcher-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─────────── PWA: Register Service Worker ───────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.log('SW registration failed:', err);
    });
  });
}

// ─────────── RIPPLE EFFECT on menu cards ───────────
document.addEventListener('click', function(e) {
  const card = e.target.closest('.menu-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple-effect';
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    width:${size}px;height:${size}px;
    left:${e.clientX - rect.left - size/2}px;
    top:${e.clientY - rect.top - size/2}px;
  `;
  card.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ─────────── (Removed: sticky brand switcher scroll listener)
// Brand switcher ga lagi sticky di HP supaya header-stack ga kepanjangan.
// User cukup scroll ke atas dikit kalau mau ganti brand.

// ─────────── WELCOME PROGRESS DOTS ───────────
(function welcomeProgressDots() {
  const modal = document.querySelector('.welcome-modal');
  const dots = document.querySelectorAll('.wp-dot');
  if (!modal || !dots.length) return;

  modal.addEventListener('scroll', () => {
    const scrollRatio = modal.scrollTop / (modal.scrollHeight - modal.clientHeight);
    let active = 0;
    if (scrollRatio > 0.6) active = 2;
    else if (scrollRatio > 0.25) active = 1;
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  });
})();

// ═══════════════════════════════════════════════════════
//   BRAND ORDER MODAL (Tomoro & Fore) — promo voucher picker
// ═══════════════════════════════════════════════════════

const BRAND_DATA = {
  tomoro: {
    name: "Tomoro Coffee",
    logo: "menu_items/logo_tomoro.png",
    headClass: "tomoro-head",
    cardClass: "tomoro-card-pick",
    promos: [
      {
        id: "tomoro-b1g1",
        tag: "🔥 PALING HEMAT",
        title: "Buy 1 Get 1",
        desc: "Bayar 1 dapat 2, hemat banget!",
        fee: "Fee Jasdor Rp5.000",
        scope: "All Drink Menu Tomoro",
        excl: ["Ice Cream Series", "Master of S.O.E", "Frappe", "All Limited Time Offers (LTO)"]
      },
      {
        id: "tomoro-50",
        tag: "💸 FEE LEBIH MURAH",
        title: "Diskon 50%",
        desc: "Setengah harga, hemat di kasir",
        fee: "Fee Jasdor Rp4.000",
        scope: "All Drink Menu Tomoro",
        excl: ["Ice Cream Series", "Master of S.O.E", "Frappe", "All Limited Time Offers (LTO)"]
      }
    ]
  },
  fore: {
    name: "Fore Coffee",
    logo: "menu_items/logo_fore.png",
    headClass: "fore-head",
    cardClass: "fore-card-pick",
    promos: [
      {
        id: "fore-b1g1",
        tag: "🔥 PALING HEMAT",
        title: "Buy 1 Get 1",
        desc: "Bayar 1 dapat 2, paling hemat!",
        fee: "Fee Jasdor Rp5.000",
        scope: "All Menu Fore Coffee",
        excl: ["Menu promo aktif lainnya"]
      },
      {
        id: "fore-35",
        tag: "💸 HEMAT S.D. Rp50RB",
        title: "Diskon 35% s/d 50rb",
        desc: "Bisa hemat sampai Rp50rb sekali order",
        fee: "Fee Jasdor Rp4.000 – Rp5.000",
        scope: "Diskon 35% · maks. hemat Rp50.000 · All Menu Fore",
        excl: ["Menu promo aktif lainnya"]
      },
      {
        id: "fore-25",
        tag: "🎁 FEE PALING MURAH",
        title: "Diskon 25% s/d 50rb",
        desc: "Diskon stabil + fee jasdor cuma Rp3rb",
        fee: "Fee Jasdor Rp3.000",
        scope: "Diskon 25% · maks. hemat Rp50.000 · All Menu Fore",
        excl: ["Menu promo aktif lainnya"]
      }
    ]
  }
};

// State modal
let brandState = {
  brand: null,        // 'tomoro' | 'fore'
  promoId: null,      // promo id atau 'question'
  promoData: null     // referensi data promo / null kalau pertanyaan
};

function openBrandOrder(brand){
  if(!BRAND_DATA[brand]) return;
  brandState.brand = brand;
  brandState.promoId = null;
  brandState.promoData = null;

  const data = BRAND_DATA[brand];

  // Set header
  const head = document.getElementById("brandOrderHead");
  head.className = "brand-order-head " + data.headClass;
  document.getElementById("brandOrderLogo").src = data.logo;
  document.getElementById("brandOrderLogo").alt = data.name;
  document.getElementById("brandOrderTitle").textContent = "Order " + data.name;

  // Render promo cards
  renderBrandPromoCards();

  // Show step 1, hide step 2
  document.getElementById("brandStepPromo").style.display = '';
  document.getElementById("brandStepForm").style.display = 'none';

  // Reset form
  resetBrandForm();

  // Auto-fill nama & outlet kalau ada di localStorage
  try{
    const savedNama = localStorage.getItem("obd_nama");
    const savedOutlet = localStorage.getItem("obd_outlet");
    if(savedNama) document.getElementById("brandInputNama").value = savedNama;
    if(savedOutlet) document.getElementById("brandInputOutlet").value = savedOutlet;
  }catch(e){}

  // Open
  document.getElementById("brandOrderOverlay").classList.add("open");
  document.body.style.overflow = 'hidden';

  // Push history state untuk back button
  history.pushState({modal:'brandOrder'}, '');
}

function closeBrandOrder(fromPopState){
  document.getElementById("brandOrderOverlay").classList.remove("open");
  document.body.style.overflow = '';
  if(!fromPopState){
    try{
      if(history.state && history.state.modal === 'brandOrder') history.back();
    }catch(e){}
  }
}

function renderBrandPromoCards(){
  const data = BRAND_DATA[brandState.brand];
  const container = document.getElementById("brandPromoCards");
  let html = '';

  data.promos.forEach(p => {
    const exclHtml = p.excl.length
      ? `<div class="brand-promo-card-excl"><b>🚫 Kecuali:</b> ${p.excl.join(", ")}</div>`
      : '';
    html += `
      <button type="button" class="brand-promo-card ${data.cardClass}" onclick="brandSelectPromo('${p.id}')">
        <span class="brand-promo-card-tag">${p.tag}</span>
        <h4 class="brand-promo-card-title">${p.title}</h4>
        <p class="brand-promo-card-desc">${p.desc}</p>
        <span class="brand-promo-card-fee">${p.fee}</span>
        <div class="brand-promo-card-excl"><b>✅ Berlaku:</b> ${p.scope}</div>
        ${exclHtml}
      </button>
    `;
  });

  // Pertanyaan Lain (selalu muncul)
  html += `
    <button type="button" class="brand-promo-card brand-question-card" onclick="brandSelectPromo('question')">
      <h4 class="brand-promo-card-title">💬 Pertanyaan Lain / Chat Seller</h4>
      <p class="brand-promo-card-desc">Mau tanya menu, info promo lain, atau hal lain ke seller</p>
    </button>
  `;

  container.innerHTML = html;
}

function brandSelectPromo(promoId){
  brandState.promoId = promoId;
  if(promoId === 'question'){
    brandState.promoData = null;
  } else {
    const data = BRAND_DATA[brandState.brand];
    brandState.promoData = data.promos.find(p => p.id === promoId) || null;
  }

  // Set selected promo badge
  const badgeEl = document.getElementById("brandSelectedPromo");
  if(brandState.promoData){
    badgeEl.innerHTML = `
      <span class="brand-selected-promo-icon">🎟️</span>
      <div class="brand-selected-promo-text">
        <b>${brandState.promoData.title}</b>
        <span>${brandState.promoData.fee}</span>
      </div>
    `;
  } else {
    badgeEl.innerHTML = `
      <span class="brand-selected-promo-icon">💬</span>
      <div class="brand-selected-promo-text">
        <b>Pertanyaan Lain</b>
        <span>Chat seller untuk tanya-tanya</span>
      </div>
    `;
  }

  // Toggle field menu/pertanyaan
  if(promoId === 'question'){
    document.getElementById("brandMenuRow").style.display = 'none';
    document.getElementById("brandQuestionRow").style.display = '';
  } else {
    document.getElementById("brandMenuRow").style.display = '';
    document.getElementById("brandQuestionRow").style.display = 'none';
  }

  // Switch to step 2
  document.getElementById("brandStepPromo").style.display = 'none';
  document.getElementById("brandStepForm").style.display = '';
}

function brandBackToPromo(){
  document.getElementById("brandStepForm").style.display = 'none';
  document.getElementById("brandStepPromo").style.display = '';
  brandState.promoId = null;
  brandState.promoData = null;
}

function resetBrandForm(){
  document.getElementById("brandInputNama").value = '';
  document.getElementById("brandInputOutlet").value = '';
  document.getElementById("brandInputMenu").value = '';
  document.getElementById("brandInputQuestion").value = '';
  document.getElementById("brandInputNote").value = '';
}

function brandPreview(){
  const nama = document.getElementById("brandInputNama").value.trim();
  const outlet = document.getElementById("brandInputOutlet").value.trim();
  const isQuestion = brandState.promoId === 'question';
  const menu = document.getElementById("brandInputMenu").value.trim();
  const question = document.getElementById("brandInputQuestion").value.trim();

  // Validasi
  if(!nama){
    showToast("⚠️ Isi nama kamu dulu ya!");
    document.getElementById("brandInputNama").focus();
    return;
  }
  if(!outlet){
    showToast("⚠️ Isi outlet tujuan dulu!");
    document.getElementById("brandInputOutlet").focus();
    return;
  }
  if(isQuestion){
    if(!question){
      showToast("⚠️ Tulis pertanyaannya dulu ya!");
      document.getElementById("brandInputQuestion").focus();
      return;
    }
  } else {
    if(!menu){
      showToast("⚠️ Tulis menu yang mau dipesan!");
      document.getElementById("brandInputMenu").focus();
      return;
    }
  }

  // Save nama & outlet ke localStorage (sama kayak Kopken)
  try{
    localStorage.setItem("obd_nama", nama);
    localStorage.setItem("obd_outlet", outlet);
  }catch(e){}

  // Build preview HTML
  buildBrandPreview();
  document.getElementById("brandPreviewOverlay").classList.add("open");
  history.pushState({modal:'brandPreview'}, '');
}

function buildBrandPreview(){
  const data = BRAND_DATA[brandState.brand];
  const nama = document.getElementById("brandInputNama").value.trim();
  const outlet = document.getElementById("brandInputOutlet").value.trim();
  const note = document.getElementById("brandInputNote").value.trim();
  const isQuestion = brandState.promoId === 'question';
  const menu = document.getElementById("brandInputMenu").value.trim();
  const question = document.getElementById("brandInputQuestion").value.trim();

  let html = '';
  html += `<div class="preview-row"><span class="preview-label">Brand:</span><span class="preview-val">${data.name}</span></div>`;

  if(brandState.promoData){
    html += `<div class="preview-row"><span class="preview-label">Promo:</span><span class="preview-val">${brandState.promoData.title} (${brandState.promoData.fee})</span></div>`;
  } else {
    html += `<div class="preview-row"><span class="preview-label">Tipe:</span><span class="preview-val">💬 Pertanyaan / Chat Seller</span></div>`;
  }

  html += `<div class="preview-row"><span class="preview-label">Nama:</span><span class="preview-val">${nama}</span></div>`;
  html += `<div class="preview-row"><span class="preview-label">Outlet:</span><span class="preview-val">${outlet}</span></div>`;
  if(note) html += `<div class="preview-row"><span class="preview-label">Catatan:</span><span class="preview-val">${note}</span></div>`;
  html += `<div class="pv-divider"></div>`;

  if(isQuestion){
    html += `<div class="pv-item">
      <div class="pv-item-name">💬 Pertanyaan</div>
      <div class="pv-item-detail" style="white-space:pre-line">${question}</div>
    </div>`;
  } else {
    html += `<div class="pv-item">
      <div class="pv-item-name">📋 Menu Pesanan</div>
      <div class="pv-item-detail" style="white-space:pre-line">${menu}</div>
    </div>`;
  }

  document.getElementById("brandPreviewBody").innerHTML = html;
}

function closeBrandPreview(fromPopState){
  document.getElementById("brandPreviewOverlay").classList.remove("open");
  if(!fromPopState){
    try{
      if(history.state && history.state.modal === 'brandPreview') history.back();
    }catch(e){}
  }
}

function brandSendToWA(){
  const data = BRAND_DATA[brandState.brand];
  const nama = document.getElementById("brandInputNama").value.trim();
  const outlet = document.getElementById("brandInputOutlet").value.trim();
  const note = document.getElementById("brandInputNote").value.trim();
  const isQuestion = brandState.promoId === 'question';
  const menu = document.getElementById("brandInputMenu").value.trim();
  const question = document.getElementById("brandInputQuestion").value.trim();

  // Build pesan WA
  let msg = `*[ ORDER ${data.name.toUpperCase()} @Faqih0354 ]*\n`;
  msg += "──────────────────────\n";
  msg += `*Nama:* ${nama}\n`;
  msg += `*Outlet:* ${outlet}\n`;

  if(brandState.promoData){
    msg += `*Promo:* ${brandState.promoData.title}\n`;
    msg += `*${brandState.promoData.fee}*\n`;
  } else {
    msg += `*Tipe:* 💬 Pertanyaan / Chat Seller\n`;
  }

  if(note) msg += `*Catatan:* ${note}\n`;
  msg += "──────────────────────\n";

  if(isQuestion){
    msg += `*Pertanyaan:*\n${question}\n`;
  } else {
    msg += `*Menu Pesanan:*\n${menu}\n`;
  }

  msg += "──────────────────────\n";
  msg += "*Follow & Cek Testi:*\n";
  msg += "Order : instagram.com/faqih0354\n";
  msg += "Testi  : instagram.com/faqih0354\n";
  msg += `WA      : wa.me/${WA_NUMBER}`;

  const url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  window._lastWAUrl = url; // simpan untuk tombol fallback

  // Tutup semua modal
  closeBrandPreview();
  closeBrandOrder();

  // Buka WA pakai anchor programatik (lebih reliable di mobile)
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Tampilkan success modal + confetti
  setTimeout(()=>{
    document.getElementById("successOverlay").classList.add("open");
    fireConfetti();
  }, 300);
}


// ═══════════════════════════════════════════════════════
//   1. DARK / LIGHT MODE TOGGLE
// ═══════════════════════════════════════════════════════
(function initTheme(){
  const btn = document.getElementById('themeToggle');
  let isLight = false;
  try{ isLight = localStorage.getItem('obd_theme') === 'light'; }catch(e){}
  function applyTheme(light){
    isLight = light;
    document.body.classList.toggle('light-mode', light);
    if(btn) btn.textContent = light ? '☀️' : '🌙';
    try{ localStorage.setItem('obd_theme', light ? 'light' : 'dark'); }catch(e){}
  }
  applyTheme(isLight);
  window.toggleTheme = function(){
    applyTheme(!isLight);
    // haptic
    if(navigator.vibrate) navigator.vibrate(30);
  };
})();

// ═══════════════════════════════════════════════════════
//   2. ANIMATED NUMBER COUNTER (stats scroll into view)
// ═══════════════════════════════════════════════════════
(function initCounters(){
  const targets = [
    { el: null, selector: '.proof-num', targets: [] }
  ];

  // Find all proof-num elements and their target values
  const nums = document.querySelectorAll('.proof-num');
  if(!nums.length) return;

  function animateCount(el, from, to, duration){
    el.classList.add('counting');
    const startTime = performance.now();
    function step(now){
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);
      // Preserve the suffix span if any
      const suffix = el.querySelector('span');
      const suffixText = suffix ? suffix.outerHTML : '';
      el.innerHTML = current + suffixText;
      if(progress < 1){
        requestAnimationFrame(step);
      } else {
        el.innerHTML = to + suffixText;
        el.classList.remove('counting');
      }
    }
    requestAnimationFrame(step);
  }

  if(!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        // Parse target value from text (ignore suffix span)
        const clone = el.cloneNode(true);
        const span = clone.querySelector('span');
        if(span) span.remove();
        const rawText = clone.textContent.trim().replace(/[^0-9]/g,'');
        const target = parseInt(rawText);
        if(!isNaN(target)){
          animateCount(el, 0, target, 1400);
        }
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(n => io.observe(n));
})();

// ═══════════════════════════════════════════════════════
//   3. SWIPE GESTURE — ganti brand (swipe kiri/kanan)
// ═══════════════════════════════════════════════════════
(function initBrandSwipe(){
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  const SWIPE_THRESHOLD = 100;  // px minimum horizontal (perketat dari 55 biar ga trigger gak sengaja)
  const VERTICAL_MAX = 50;      // px max vertical (perketat dari 80 — kalau ada gerak naik-turun, batal)
  const TIME_MAX = 400;         // ms max gesture time

  const BRAND_NAMES = { kopken:'Kopi Kenangan', tomoro:'Tomoro Coffee', fore:'Fore Coffee' };

  function showSwipeIndicator(label){
    const overlay = document.getElementById('swipeOverlay');
    const lbl = document.getElementById('swipeLabel');
    if(!overlay || !lbl) return;
    lbl.textContent = label;
    overlay.classList.add('show');
    clearTimeout(overlay._tid);
    overlay._tid = setTimeout(()=>overlay.classList.remove('show'), 900);
  }

  document.addEventListener('touchstart', e=>{
    // Hanya listen di area brand page / menu (bukan saat modal buka)
    if(document.body.classList.contains('modal-open')) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, {passive:true});

  document.addEventListener('touchend', e=>{
    if(document.body.classList.contains('modal-open')) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    const dt = Date.now() - touchStartTime;

    if(Math.abs(dx) < SWIPE_THRESHOLD) return;
    if(dy > VERTICAL_MAX) return;
    if(dt > TIME_MAX) return;

    const idx = BRAND_ORDER.indexOf(currentBrand);
    let nextIdx;
    if(dx < 0){
      // swipe kiri → brand berikutnya
      nextIdx = Math.min(idx + 1, BRAND_ORDER.length - 1);
    } else {
      // swipe kanan → brand sebelumnya
      nextIdx = Math.max(idx - 1, 0);
    }
    if(nextIdx === idx) return;

    const nextBrand = BRAND_ORDER[nextIdx];
    const brandBtn = document.querySelector('.brand-btn[data-brand="' + nextBrand + '"]');
    if(brandBtn){
      showSwipeIndicator(BRAND_NAMES[nextBrand] + (dx < 0 ? ' →' : '← '));
      switchBrand(nextBrand, brandBtn);
      if(navigator.vibrate) navigator.vibrate(15);
    }
  }, {passive:true});
})();

// ═══════════════════════════════════════════════════════
//   4. HAPTIC FEEDBACK — vibrate saat add to cart
// ═══════════════════════════════════════════════════════
// (Inject ke addToCartFromModal yang existing)
const _origAddToCart = addToCartFromModal;
// Patch: haptic sudah di-trigger langsung di addToCartFromModal,
// tapi kita tambahkan juga di cartChangeQty dan confirmReset
const _origCartChangeQty = cartChangeQty;
window.cartChangeQty = function(id, delta){
  _origCartChangeQty(id, delta);
  if(navigator.vibrate) navigator.vibrate(10);
};

// ═══════════════════════════════════════════════════════
//   5. DRAG REORDER CART ITEMS
// ═══════════════════════════════════════════════════════
(function initCartDragReorder(){
  const body = document.getElementById('cartBody');
  if(!body) return;

  let dragSrc = null;

  function getCartItems(){
    return Array.from(body.querySelectorAll('.cart-item'));
  }

  function attachDragHandlers(item){
    // Drag handle
    const handle = item.querySelector('.ci-drag-handle');
    if(!handle) return;

    // Touch drag
    let startY, startIdx, currentOverIdx;

    handle.addEventListener('touchstart', e=>{
      e.stopPropagation();
      dragSrc = item;
      startY = e.touches[0].clientY;
      startIdx = getCartItems().indexOf(item);
      item.classList.add('dragging');
    }, {passive:true});

    handle.addEventListener('touchmove', e=>{
      if(!dragSrc) return;
      e.preventDefault();
      const y = e.touches[0].clientY;
      const items = getCartItems();
      items.forEach(it=>it.classList.remove('drag-over'));
      // Find which item we're hovering over
      for(let i=0;i<items.length;i++){
        const rect = items[i].getBoundingClientRect();
        if(y >= rect.top && y <= rect.bottom && items[i] !== dragSrc){
          items[i].classList.add('drag-over');
          currentOverIdx = i;
          break;
        }
      }
    }, {passive:false});

    handle.addEventListener('touchend', e=>{
      if(!dragSrc) return;
      const items = getCartItems();
      items.forEach(it=>it.classList.remove('drag-over','dragging'));
      if(currentOverIdx !== undefined && currentOverIdx !== startIdx){
        // Reorder cart array
        const srcId = dragSrc.dataset.cartid;
        const overItem = items[currentOverIdx];
        const overId = overItem ? overItem.dataset.cartid : null;
        if(srcId && overId){
          const srcCartIdx = cart.findIndex(c=>c.id===srcId);
          const overCartIdx = cart.findIndex(c=>c.id===overId);
          if(srcCartIdx !== -1 && overCartIdx !== -1){
            const [moved] = cart.splice(srcCartIdx, 1);
            cart.splice(overCartIdx, 0, moved);
            saveCart();
            renderCart();
            updateCartCount();
            if(navigator.vibrate) navigator.vibrate([10,20,10]);
          }
        }
      }
      dragSrc = null;
      currentOverIdx = undefined;
    }, {passive:true});

    // Mouse drag (desktop)
    handle.addEventListener('mousedown', e=>{
      e.preventDefault();
      dragSrc = item;
      startIdx = getCartItems().indexOf(item);
      item.classList.add('dragging');

      function onMouseMove(e2){
        const items = getCartItems();
        items.forEach(it=>it.classList.remove('drag-over'));
        for(let i=0;i<items.length;i++){
          const rect = items[i].getBoundingClientRect();
          if(e2.clientY >= rect.top && e2.clientY <= rect.bottom && items[i] !== dragSrc){
            items[i].classList.add('drag-over');
            currentOverIdx = i;
            break;
          }
        }
      }
      function onMouseUp(){
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        const items = getCartItems();
        items.forEach(it=>it.classList.remove('drag-over','dragging'));
        if(currentOverIdx !== undefined && currentOverIdx !== startIdx){
          const srcId = dragSrc.dataset.cartid;
          const overItem = items[currentOverIdx];
          const overId = overItem ? overItem.dataset.cartid : null;
          if(srcId && overId){
            const srcCartIdx = cart.findIndex(c=>c.id===srcId);
            const overCartIdx = cart.findIndex(c=>c.id===overId);
            if(srcCartIdx !== -1 && overCartIdx !== -1){
              const [moved] = cart.splice(srcCartIdx, 1);
              cart.splice(overCartIdx, 0, moved);
              saveCart();
              renderCart();
              updateCartCount();
            }
          }
        }
        dragSrc = null;
        currentOverIdx = undefined;
      }
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }

  // Observe cart body for new items
  const mo = new MutationObserver(()=>{
    getCartItems().forEach(item=>{
      if(!item.dataset.dragInited){
        item.dataset.dragInited = '1';
        attachDragHandlers(item);
      }
    });
  });
  mo.observe(body, {childList:true, subtree:false});
})();

/* ═══════════════════════════════════════════════════════════════
   V7 UX/UI POLISH — JS LOGIC
   ═══════════════════════════════════════════════════════════════ */

// ─────────── 1. HAPTIC FEEDBACK HELPER ───────────
function haptic(pattern){
  try{
    if('vibrate' in navigator){
      navigator.vibrate(pattern || 10);
    }
  }catch(e){}
}
// Variants buat momen berbeda
const HAPTIC = {
  tap: 8,
  add: [12, 30, 20],     // tap-pause-tap (add to cart)
  success: [30, 50, 30, 50, 80], // celebrate (kirim WA)
  warn: [40, 30, 40],
  delete: [15, 20, 15]
};

// Note: addToCartFromModal sudah punya haptic internal (navigator.vibrate(25))
// di kode original — jadi gak perlu di-wrap ulang biar gak double-vibrate

// Haptic on tab/qfilter/brand switch + close modal — pasang via delegation
document.addEventListener('click', function(e){
  const target = e.target.closest('.tab, .qfilter, .brand-btn, .bottom-nav-item, .card-add-btn, .close-btn, .item-modal-close, .reset-btn');
  if(target) haptic(HAPTIC.tap);
}, true);

// Haptic on send WA & reset
(function patchSendHaptic(){
  if(typeof confirmSendToWA === 'function'){
    const _orig = confirmSendToWA;
    window.confirmSendToWA = function(){
      haptic(HAPTIC.success);
      return _orig.apply(this, arguments);
    };
  }
  if(typeof brandSendToWA === 'function'){
    const _orig2 = brandSendToWA;
    window.brandSendToWA = function(){
      haptic(HAPTIC.success);
      return _orig2.apply(this, arguments);
    };
  }
})();

// ─────────── 2. SPLASH SCREEN ───────────
(function hideSplash(){
  const splash = document.getElementById('splashOverlay');
  if(!splash) return;
  // Hide setelah window load + min 600ms biar smooth
  const start = Date.now();
  const minShow = 700;
  function dismiss(){
    const elapsed = Date.now() - start;
    const wait = Math.max(0, minShow - elapsed);
    setTimeout(()=>{
      splash.classList.add('hide');
      setTimeout(()=>splash.remove(), 500);
    }, wait);
  }
  if(document.readyState === 'complete'){ dismiss(); }
  else { window.addEventListener('load', dismiss); }
})();

// ─────────── 3. SKELETON LOADING ───────────
// Tampil pas first load di kopken page, dismiss setelah menu kerender
(function skeletonControl(){
  const wrap = document.getElementById('skeletonWrap');
  const menuWrap = document.querySelector('.menu-wrap');
  if(!wrap || !menuWrap) return;

  // Cek udah pernah ke skeleton ini di session ini? Jangan show lagi
  const seen = sessionStorage.getItem('obd_skeleton_done') === '1';
  if(seen) return;

  // Show skeleton, hide menu sementara
  wrap.classList.add('show');
  menuWrap.style.opacity = '0';
  menuWrap.style.transition = 'opacity .35s ease';

  // Tunggu sampai menu kemungkinan udah render (pakai requestAnimationFrame + delay kecil)
  function dismissSkeleton(){
    // Kasih delay biar user liat skeleton bentar (perceived loading)
    setTimeout(()=>{
      wrap.style.transition = 'opacity .3s ease';
      wrap.style.opacity = '0';
      menuWrap.style.opacity = '1';
      setTimeout(()=>{
        wrap.classList.remove('show');
        wrap.style.opacity = '';
      }, 350);
      try{ sessionStorage.setItem('obd_skeleton_done','1'); }catch(e){}
    }, 500);
  }
  if(document.readyState === 'complete'){
    dismissSkeleton();
  } else {
    window.addEventListener('load', dismissSkeleton);
  }
})();

// ─────────── 4. IMAGE LAZY-LOAD + BLUR PLACEHOLDER ───────────
// Patch buildMenuCard supaya gambar dapet handler load buat reveal
// Caranya: pakai MutationObserver di .menu-grid — setiap kali img masuk, attach handler
(function attachImgLoadObserver(){
  function attachToImg(img){
    if(img._obdAttached) return;
    img._obdAttached = true;
    const wrap = img.closest('.card-emoji');
    if(!wrap) return;

    if(img.complete && img.naturalWidth > 0){
      wrap.classList.add('img-loaded');
    } else {
      img.addEventListener('load', ()=>{
        // Add small delay biar smooth blur-up
        requestAnimationFrame(()=> wrap.classList.add('img-loaded'));
      });
      img.addEventListener('error', ()=>{
        // Tetep tandai loaded biar shimmer hilang (emoji fallback udah handle di onerror)
        wrap.classList.add('img-loaded');
      });
    }
  }

  // Initial pass — semua img yg udah ada di DOM
  function scanAll(){
    document.querySelectorAll('.menu-card .card-emoji img').forEach(attachToImg);
  }

  // Observe untuk node yg ditambah dinamis (waktu searh / filter clone, dll)
  const obs = new MutationObserver(muts=>{
    muts.forEach(m=>{
      m.addedNodes.forEach(n=>{
        if(n.nodeType !== 1) return;
        if(n.matches && n.matches('.menu-card')){
          n.querySelectorAll('.card-emoji img').forEach(attachToImg);
        } else if(n.querySelectorAll){
          n.querySelectorAll('.menu-card .card-emoji img').forEach(attachToImg);
        }
      });
    });
  });
  obs.observe(document.body, {childList:true, subtree:true});

  // Run scan setelah DOMContentLoaded + sekali lagi setelah load
  if(document.readyState !== 'loading') scanAll();
  else document.addEventListener('DOMContentLoaded', scanAll);
  window.addEventListener('load', scanAll);
})();

// ─────────── 5. BOTTOM NAV BAR ───────────
(function initBottomNav(){
  document.body.classList.add('with-bottom-nav');

  // Sync fav badge dgn localStorage
  function syncBadges(){
    // Fav count dari localStorage
    const navFav = document.getElementById('navFavBadge');
    if(navFav){
      try{
        const favs = JSON.parse(localStorage.getItem('obd_favs_v1') || '[]');
        navFav.textContent = favs.length;
        navFav.classList.toggle('hidden', favs.length === 0);
      }catch(e){
        navFav.classList.add('hidden');
      }
    }
  }

  syncBadges();
  setInterval(syncBadges, 1500); // safety net

  // Sync nav active state pas cart drawer dibuka/tutup
  const cartDrawer = document.getElementById('cartDrawer');
  if(cartDrawer){
    new MutationObserver(()=>{
      const open = cartDrawer.classList.contains('open');
      // Saat cart kebuka, gak perlu ubah nav (cart bukan tab)
      // Saat cart ketutup, biarkan nav state lama (bisa home/search/fav)
    }).observe(cartDrawer, {attributes:true, attributeFilter:['class']});
  }
})();

let currentNavTab = 'home';
function setNavActive(tab){
  currentNavTab = tab;
  document.querySelectorAll('.bottom-nav-item').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.nav === tab);
  });
}

function navTo(tab){
  haptic(HAPTIC.tap);
  if(tab === 'home'){
    setNavActive('home');
    if(typeof closeCart === 'function') closeCart();
    window.scrollTo({top:0, behavior:'smooth'});
  } else if(tab === 'search'){
    setNavActive('search');
    if(typeof closeCart === 'function') closeCart();
    // Kalau lagi di brand non-kopken, pindah dulu (search ada di kopken)
    if(typeof switchBrand === 'function' && currentBrand !== 'kopken'){
      const kkBtn = document.querySelector('.brand-btn[data-brand="kopken"]');
      if(kkBtn) switchBrand('kopken', kkBtn);
    }
    setTimeout(()=>{
      const search = document.getElementById('searchInput');
      if(search){
        const top = search.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({top, behavior:'smooth'});
        setTimeout(()=>search.focus(), 400);
      }
    }, 100);
  } else if(tab === 'fav'){
    setNavActive('fav');
    if(typeof closeCart === 'function') closeCart();
    openFavoritesView();
  }
}

// ─────────── FAVORITES (light) ───────────
const FAV_KEY = 'obd_favs_v1';
function getFavs(){
  try{ return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
  catch(e){ return []; }
}
function saveFavs(arr){
  try{ localStorage.setItem(FAV_KEY, JSON.stringify(arr)); }catch(e){}
}
function isFav(cat, idx){
  return getFavs().some(f => f.cat === cat && f.idx === idx);
}
function toggleFav(cat, idx, ev){
  if(ev){ ev.stopPropagation(); ev.preventDefault(); }
  haptic(HAPTIC.tap);
  let favs = getFavs();
  const existing = favs.findIndex(f => f.cat === cat && f.idx === idx);
  if(existing >= 0){
    favs.splice(existing, 1);
    if(typeof showToast === 'function') showToast('💔 Dihapus dari favorit');
  } else {
    favs.push({cat, idx});
    if(typeof showToast === 'function') showToast('❤️ Ditambah ke favorit!');
  }
  saveFavs(favs);
  // Refresh fav heart visual jika ada
  document.querySelectorAll(`.fav-heart[data-fav="${cat}-${idx}"]`).forEach(h=>{
    h.classList.toggle('active', !isFav(cat, idx) ? false : true);
    h.textContent = isFav(cat, idx) ? '❤️' : '🤍';
  });
  // Update badge nav langsung
  const navFav = document.getElementById('navFavBadge');
  if(navFav){
    navFav.textContent = favs.length;
    navFav.classList.toggle('hidden', favs.length === 0);
  }
  // Kalau lagi di view favorit, refresh
  const favView = document.getElementById('favView');
  if(favView && favView.classList.contains('open')){
    renderFavoritesView();
  }
}

function openFavoritesView(){
  // Tutup dulu modal/drawer lain biar gak bertumpuk
  if(typeof closeCart === 'function'){
    const drawer = document.getElementById('cartDrawer');
    if(drawer && drawer.classList.contains('open')) closeCart();
  }
  if(typeof closeItemModal === 'function'){
    const im = document.getElementById('itemModalOverlay');
    if(im && im.classList.contains('open')) closeItemModal();
  }

  let view = document.getElementById('favView');
  if(!view){
    view = document.createElement('div');
    view.id = 'favView';
    view.className = 'fav-sheet';
    view.innerHTML = `
      <div class="fav-sheet-handle"></div>
      <div class="fav-sheet-head">
        <div class="fav-sheet-title">❤️ Favorit Kamu</div>
        <button class="fav-sheet-close" onclick="closeFavoritesView()" aria-label="Tutup">✕</button>
      </div>
      <div class="fav-sheet-body" id="favBody"></div>
    `;
    document.body.appendChild(view);

    // Backdrop khusus favView (terpisah dari overlay cart)
    let backdrop = document.getElementById('favBackdrop');
    if(!backdrop){
      backdrop = document.createElement('div');
      backdrop.id = 'favBackdrop';
      backdrop.className = 'fav-backdrop';
      backdrop.onclick = closeFavoritesView;
      document.body.appendChild(backdrop);
    }
  }
  renderFavoritesView();
  // Show
  const backdrop = document.getElementById('favBackdrop');
  if(backdrop) backdrop.classList.add('open');
  // Force reflow biar transisi jalan
  void view.offsetWidth;
  view.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Push history state agar tombol back HP nutup sheet
  try{ history.pushState({modal:'fav'}, ''); }catch(e){}
}

function closeFavoritesView(fromPopState){
  const view = document.getElementById('favView');
  const backdrop = document.getElementById('favBackdrop');
  if(view) view.classList.remove('open');
  if(backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
  setNavActive('home');
  if(!fromPopState && history.state && history.state.modal === 'fav'){
    try{ history.back(); }catch(e){}
  }
}

// Handle tombol back HP biar nutup fav sheet
window.addEventListener('popstate', function(e){
  const view = document.getElementById('favView');
  if(view && view.classList.contains('open')){
    closeFavoritesView(true);
  }
});

function renderFavoritesView(){
  const body = document.getElementById('favBody');
  if(!body) return;
  const favs = getFavs();
  if(favs.length === 0){
    body.innerHTML = `
      <div class="fav-empty">
        <div class="fav-empty-emo">💔</div>
        <p class="fav-empty-title">Belum ada menu favorit</p>
        <p class="fav-empty-sub">Tap ikon ❤️ di kartu menu untuk menyimpannya di sini</p>
        <button class="fav-empty-cta" onclick="closeFavoritesView()">Cari Menu ☕</button>
      </div>
    `;
    return;
  }
  let html = '<div class="fav-list">';
  favs.forEach(f=>{
    const item = (typeof MENUS !== 'undefined' && MENUS[f.cat]) ? MENUS[f.cat][f.idx] : null;
    if(!item) return;
    html += `
      <div class="fav-item" onclick="favItemClick('${f.cat}',${f.idx})">
        <div class="fav-item-img">
          <img src="menu_items/${encodeURIComponent(item.img)}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=&quot;font-size:32px&quot;>${item.emo}</span>'">
        </div>
        <div class="fav-item-body">
          <div class="fav-item-name">${item.name}</div>
          <div class="fav-item-price">
            <span class="fav-item-disc">${fmt(item.disc)}</span>
            <span class="fav-item-normal">${fmt(item.normal)}</span>
          </div>
          <div class="fav-item-tap">Tap untuk pesan →</div>
        </div>
        <button class="fav-item-remove" onclick="event.stopPropagation();toggleFav('${f.cat}',${f.idx},event)" aria-label="Hapus dari favorit">×</button>
      </div>
    `;
  });
  html += '</div>';
  body.innerHTML = html;
}

// Click handler favorite item — tutup sheet → buka modal item
function favItemClick(cat, idx){
  closeFavoritesView();
  setTimeout(()=>{
    if(typeof openItemModal === 'function') openItemModal(cat, parseInt(idx));
  }, 320);
}

// Inject heart icon ke setiap menu card (lewat observer)
(function injectFavHearts(){
  function addHeart(card){
    if(card._heartAdded) return;
    card._heartAdded = true;
    const cat = card.dataset.cat;
    const idx = card.dataset.idx;
    if(!cat || idx === undefined) return;
    const emojiBox = card.querySelector('.card-emoji');
    if(!emojiBox) return;
    const heart = document.createElement('button');
    heart.className = 'fav-heart';
    heart.dataset.fav = cat + '-' + idx;
    heart.setAttribute('aria-label', 'Favorit');
    heart.style.cssText = `
      position:absolute;top:8px;right:8px;z-index:5;
      width:32px;height:32px;border-radius:50%;
      background:rgba(0,0,0,.5);backdrop-filter:blur(6px);
      border:none;color:white;font-size:16px;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;transition:transform .15s, background .2s;
      -webkit-tap-highlight-color:transparent;
    `;
    heart.textContent = isFav(cat, parseInt(idx)) ? '❤️' : '🤍';
    heart.onclick = (e)=>{
      e.stopPropagation();
      heart.style.transform = 'scale(1.4)';
      setTimeout(()=>heart.style.transform = '', 200);
      toggleFav(cat, parseInt(idx), e);
    };
    emojiBox.appendChild(heart);
  }
  const obs = new MutationObserver(()=>{
    document.querySelectorAll('.menu-card').forEach(addHeart);
  });
  obs.observe(document.body, {childList:true, subtree:true});
  // Initial
  if(document.readyState !== 'loading'){
    document.querySelectorAll('.menu-card').forEach(addHeart);
  } else {
    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelectorAll('.menu-card').forEach(addHeart);
    });
  }
})();

// ─────────── 6. ONBOARDING TOUR ───────────
const TOUR_KEY = 'obd_tour_seen_v1';
const tourSteps = [
  {
    selector: '.brand-switcher',
    title: '👋 1. Pilih Brand',
    text: 'Geser & tap brand favoritmu — Kopi Kenangan, Tomoro, atau Fore. Setiap brand punya cara order sendiri.',
    arrow: 'top'
  },
  {
    selector: '#searchInput',
    title: '🔍 2. Cari Menu',
    text: 'Ketik nama menu favoritmu (contoh: "aren", "kenangan mantan") — langsung ketemu!',
    arrow: 'top'
  },
  {
    selector: '.tabs',
    title: '📋 3. Filter Kategori',
    text: 'Geser kategori untuk lihat Coffee, Non-Coffee, Frappe, sampai Toast.',
    arrow: 'top'
  },
  {
    selector: '.bottom-nav',
    title: '📱 4. Navigasi Bawah',
    text: 'Akses Cari, ❤️ Favorit, dan 🛒 Cart kapanpun dari nav bawah.',
    arrow: 'bottom'
  }
];
let tourCurrentStep = 0;

function tourStart(){
  // Pastikan welcome modal udah ketutup
  const w = document.getElementById('welcomeOverlay');
  if(w && w.classList.contains('open')) return;
  // Pastikan kita di kopken page (selector tour mostly ada di kopken)
  if(typeof switchBrand === 'function' && currentBrand !== 'kopken'){
    const kkBtn = document.querySelector('.brand-btn[data-brand="kopken"]');
    if(kkBtn) switchBrand('kopken', kkBtn);
  }
  tourCurrentStep = 0;
  document.getElementById('tourOverlay').classList.add('show');
  tourShowStep();
}

function tourShowStep(){
  const step = tourSteps[tourCurrentStep];
  if(!step){ tourEnd(); return; }
  const el = document.querySelector(step.selector);
  if(!el){
    // Skip step kalau gak ketemu
    tourCurrentStep++;
    tourShowStep();
    return;
  }

  // Scroll target ke tengah viewport
  const rect = el.getBoundingClientRect();
  const targetY = rect.top + window.scrollY - (window.innerHeight/2 - rect.height/2);
  window.scrollTo({top: targetY, behavior:'smooth'});

  // Tunggu scroll selesai sebelum positioning spotlight
  setTimeout(()=>{
    const r = el.getBoundingClientRect();
    const spot = document.getElementById('tourSpotlight');
    const tt = document.getElementById('tourTooltip');
    const arrow = document.getElementById('tourArrow');
    const padding = 8;
    spot.style.left = (r.left - padding) + 'px';
    spot.style.top = (r.top - padding) + 'px';
    spot.style.width = (r.width + padding*2) + 'px';
    spot.style.height = (r.height + padding*2) + 'px';

    document.getElementById('tourTitle').textContent = step.title;
    document.getElementById('tourText').textContent = step.text;
    document.getElementById('tourNextBtn').textContent =
      (tourCurrentStep === tourSteps.length - 1) ? 'Selesai ✓' : 'Lanjut →';

    // Posisikan tooltip
    arrow.className = 'tour-tooltip-arrow ' + (step.arrow || 'top');
    tt.style.left = '20px';
    tt.style.right = '20px';
    if(step.arrow === 'bottom'){
      tt.style.bottom = (window.innerHeight - r.top + 18) + 'px';
      tt.style.top = 'auto';
    } else {
      tt.style.top = (r.bottom + 18) + 'px';
      tt.style.bottom = 'auto';
    }

    // Update progress dots
    const progressEl = document.getElementById('tourProgress');
    let dotsHtml = '';
    tourSteps.forEach((_, i)=>{
      const cls = i < tourCurrentStep ? 'done' : (i === tourCurrentStep ? 'active' : '');
      dotsHtml += `<div class="tour-dot ${cls}"></div>`;
    });
    progressEl.innerHTML = dotsHtml;
  }, 350);
}

function tourNext(){
  haptic(HAPTIC.tap);
  tourCurrentStep++;
  if(tourCurrentStep >= tourSteps.length){ tourEnd(); return; }
  tourShowStep();
}
function tourSkip(){
  haptic(HAPTIC.tap);
  tourEnd();
}
function tourEnd(){
  document.getElementById('tourOverlay').classList.remove('show');
  try{ localStorage.setItem(TOUR_KEY, '1'); }catch(e){}
}

// Auto-start tour: 1 detik setelah welcome ditutup, kalau belum pernah liat
(function autoStartTour(){
  function maybeStart(){
    try{
      if(localStorage.getItem(TOUR_KEY) === '1') return;
    }catch(e){ return; }
    // Tunggu welcome modal ketutup
    const wel = document.getElementById('welcomeOverlay');
    if(!wel) return;
    if(wel.classList.contains('open')){
      // Watch untuk close
      const obs = new MutationObserver(()=>{
        if(!wel.classList.contains('open')){
          obs.disconnect();
          setTimeout(tourStart, 800);
        }
      });
      obs.observe(wel, {attributes:true, attributeFilter:['class']});
    } else {
      // Welcome modal udah ketutup (atau emang gak muncul) → kasih jeda dikit
      setTimeout(tourStart, 1200);
    }
  }
  if(document.readyState === 'complete') maybeStart();
  else window.addEventListener('load', maybeStart);
})();

// Expose buat dibuka manual via help button (bonus)
window.startTour = tourStart;

// ─────────── 7. PULL-TO-REFRESH ───────────
(function initPullToRefresh(){
  const ind = document.getElementById('ptrIndicator');
  const icon = document.getElementById('ptrIcon');
  const text = document.getElementById('ptrText');
  if(!ind) return;

  let startY = 0;
  let startX = 0;
  let pulling = false;
  let dist = 0;
  let dirLocked = false; // sudah confirm vertical drag
  const TRIGGER = 80;

  // Cek apakah trigger valid (di top page, gak ada modal yg lagi buka)
  function canPull(){
    if(window.scrollY > 2) return false;
    // Jangan trigger kalau modal/drawer lagi buka
    const drawer = document.getElementById('cartDrawer');
    if(drawer && drawer.classList.contains('open')) return false;
    const itemModal = document.getElementById('itemModalOverlay');
    if(itemModal && itemModal.classList.contains('open')) return false;
    const welcome = document.getElementById('welcomeOverlay');
    if(welcome && welcome.classList.contains('open')) return false;
    const successOverlay = document.getElementById('successOverlay');
    if(successOverlay && successOverlay.classList.contains('open')) return false;
    const tour = document.getElementById('tourOverlay');
    if(tour && tour.classList.contains('show')) return false;
    return true;
  }

  document.addEventListener('touchstart', (e)=>{
    if(!canPull()) return;
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
    pulling = true;
    dirLocked = false;
    dist = 0;
  }, {passive:true});

  document.addEventListener('touchmove', (e)=>{
    if(!pulling) return;
    if(!canPull()){ pulling = false; ind.classList.remove('pulling'); return; }
    const y = e.touches[0].clientY;
    const x = e.touches[0].clientX;
    const dy = y - startY;
    const dx = x - startX;

    // Lock direction: kalau gesture lebih horizontal, abort PTR
    if(!dirLocked){
      if(Math.abs(dx) > 6 || Math.abs(dy) > 6){
        // Bila horizontal lebih dominan, batalkan
        if(Math.abs(dx) > Math.abs(dy) * 1.2){
          pulling = false;
          ind.classList.remove('pulling');
          return;
        }
        dirLocked = true;
      }
    }

    dist = dy;
    if(dist > 0 && window.scrollY <= 2 && dirLocked){
      // Tampilkan indicator yg ngikut tarikan
      const pull = Math.min(dist, TRIGGER * 1.5);
      const translate = Math.min(pull * 0.8 - 60, 16);
      ind.classList.add('pulling');
      ind.style.transform = `translate(-50%, ${translate}px)`;
      // Rotate icon based on progress
      const progress = Math.min(dist / TRIGGER, 1);
      icon.style.setProperty('--ptr-rot', (progress * 180) + 'deg');
      if(dist > TRIGGER){
        text.textContent = 'Lepas untuk refresh';
      } else {
        text.textContent = 'Tarik untuk refresh';
      }
    }
  }, {passive:true});

  document.addEventListener('touchend', ()=>{
    if(!pulling) return;
    pulling = false;
    if(dist > TRIGGER){
      // Trigger refresh
      haptic([20, 40, 20]);
      ind.classList.remove('pulling');
      ind.classList.add('refreshing');
      ind.style.transform = '';
      text.textContent = 'Memuat ulang...';
      // Simulasi reload — full reload page (data ringan, ok)
      setTimeout(()=>{
        window.location.reload();
      }, 700);
    } else {
      ind.classList.remove('pulling');
      ind.style.transform = '';
      icon.style.setProperty('--ptr-rot', '0deg');
    }
  });
})();

// ─────────── (cart badge nav dihapus — cart pakai floating CTA bar) ───────────

