// =====================================================
// NGOPSKUY WEBSITE CONFIG
// Ubah data di bagian ini sesuai kebutuhan bisnis kamu.
// =====================================================
const CONFIG = {
  brandName: "NgopsKuy",
  whatsappNumber: "6287770010024", // Ganti dengan nomor admin. Format: 62xxxxxxxxxxx
  isOpen: true,
  closedMessage: "Hi, mohon maaf saat ini sedang tutup karena stock habis/di luar jam operasional. Order belum bisa dibuat sekarang. Harap cek WhatsApp/saluran NgopsKuy untuk info berikutnya.",
  openMessage: "NgopsKuy sedang buka. Silakan pilih menu favorit dan checkout via WhatsApp.",
  currency: "IDR"
};

// Katalog dibuat semirip mungkin secara kategori, nama produk, dan range harga menu kopi populer.
// Gambar di folder assets/products adalah ilustrasi buatan sendiri, bukan hasil copy aset website/brand lain.
// Silakan ganti gambar dengan aset resmi kalau kamu punya izin dari pemilik brand.
const PRODUCTS = [
  {
    "id": "kopi-kenangan-mantan",
    "name": "Kopi Kenangan Mantan",
    "category": "Resto's Picks",
    "price": 22000,
    "desc": "Kopi susu gula aren favorit dengan rasa creamy dan manis yang balance.",
    "tag": "Favorite",
    "image": "assets/products/kopi-kenangan-mantan.svg"
  },
  {
    "id": "creamy-aren-latte",
    "name": "Creamy Aren Latte",
    "category": "Resto's Picks",
    "price": 24000,
    "desc": "Espresso, susu creamy, dan gula aren asli dengan tekstur lebih lembut.",
    "tag": "Creamy",
    "image": "assets/products/creamy-aren-latte.svg"
  },
  {
    "id": "caramel-macchiato",
    "name": "Caramel Macchiato",
    "category": "Resto's Picks",
    "price": 30000,
    "desc": "Espresso, susu, saus salted caramel, dan macchiato cream.",
    "tag": "Sweet",
    "image": "assets/products/caramel-macchiato.svg"
  },
  {
    "id": "pandan-aren-latte",
    "name": "Pandan Aren Latte",
    "category": "Resto's Picks",
    "price": 26000,
    "desc": "Espresso, fresh milk, gula aren, dan aroma pandan yang khas.",
    "tag": "Aromatic",
    "image": "assets/products/pandan-aren-latte.svg"
  },
  {
    "id": "spanish-latte",
    "name": "Spanish Latte",
    "category": "Resto's Picks",
    "price": 21000,
    "desc": "Fresh milk, espresso, dan susu kental manis dengan rasa lembut.",
    "tag": "Smooth",
    "image": "assets/products/spanish-latte.svg"
  },
  {
    "id": "kopi-susu-black-aren",
    "name": "Kopi Susu Black Aren",
    "category": "Resto's Picks",
    "price": 23000,
    "desc": "Racikan kopi susu dengan karakter gula aren yang lebih kuat.",
    "tag": "Bold",
    "image": "assets/products/kopi-susu-black-aren.svg"
  },
  {
    "id": "butterscotch-aren-latte",
    "name": "Butterscotch Aren Latte",
    "category": "Resto's Picks",
    "price": 22000,
    "desc": "Susu, espresso, sea salt, gula aren, dan sirup butterscotch.",
    "tag": "New",
    "image": "assets/products/butterscotch-aren-latte.svg"
  },
  {
    "id": "matcha-espresso",
    "name": "Matcha Espresso",
    "category": "Resto's Picks",
    "price": 28000,
    "desc": "Espresso, fresh milk, dan matcha powder dengan layer yang cantik.",
    "tag": "Matcha",
    "image": "assets/products/matcha-espresso.svg"
  },
  {
    "id": "americano",
    "name": "Americano",
    "category": "Coffee",
    "price": 18000,
    "desc": "Espresso dan air mineral untuk rasa kopi yang clean dan ringan.",
    "tag": "Classic",
    "image": "assets/products/americano.svg"
  },
  {
    "id": "latte",
    "name": "Latte",
    "category": "Coffee",
    "price": 24000,
    "desc": "Perpaduan espresso dan susu segar dengan rasa halus seimbang.",
    "tag": "Milky",
    "image": "assets/products/latte.svg"
  },
  {
    "id": "hazelnut-latte",
    "name": "Hazelnut Latte",
    "category": "Coffee",
    "price": 28000,
    "desc": "Latte espresso dengan aroma hazelnut yang ringan dan creamy.",
    "tag": "Nutty",
    "image": "assets/products/hazelnut-latte.svg"
  },
  {
    "id": "vanilla-latte",
    "name": "Vanilla Latte",
    "category": "Coffee",
    "price": 28000,
    "desc": "Latte espresso dengan sentuhan vanilla yang manis dan lembut.",
    "tag": "Vanilla",
    "image": "assets/products/vanilla-latte.svg"
  },
  {
    "id": "dua-shot-iced-shaken",
    "name": "Dua Shot Iced Shaken",
    "category": "Coffee",
    "price": 28000,
    "desc": "Kopi dingin dengan dua shot espresso untuk rasa lebih bold.",
    "tag": "Strong",
    "image": "assets/products/dua-shot-iced-shaken.svg"
  },
  {
    "id": "thai-tea",
    "name": "Thai Tea",
    "category": "Non Coffee",
    "price": 22000,
    "desc": "Teh Thailand dan susu dengan rasa manis, creamy, dan wangi.",
    "tag": "Tea",
    "image": "assets/products/thai-tea.svg"
  },
  {
    "id": "susu-grass-jelly",
    "name": "Susu Grass Jelly",
    "category": "Non Coffee",
    "price": 24000,
    "desc": "Susu gula aren dengan grass jelly yang lembut dan segar.",
    "tag": "Jelly",
    "image": "assets/products/susu-grass-jelly.svg"
  },
  {
    "id": "dutch-chocolate",
    "name": "Dutch Chocolate",
    "category": "Non Coffee",
    "price": 28000,
    "desc": "Minuman cokelat pekat dengan rasa rich dan creamy.",
    "tag": "Choco",
    "image": "assets/products/dutch-chocolate.svg"
  },
  {
    "id": "lemon-black-tea",
    "name": "Lemon Black Tea",
    "category": "Non Coffee",
    "price": 18000,
    "desc": "Teh hitam dengan lemon, ringan dan cocok untuk siang hari.",
    "tag": "Fresh",
    "image": "assets/products/lemon-black-tea.svg"
  },
  {
    "id": "kenangan-milk-tea",
    "name": "Kenangan Milk Tea",
    "category": "Non Coffee",
    "price": 25000,
    "desc": "Milk tea creamy dengan pilihan rasa yang nyaman diminum kapan saja.",
    "tag": "Milktea",
    "image": "assets/products/kenangan-milk-tea.svg"
  },
  {
    "id": "seliter-kenangan-mantan",
    "name": "Seliter Kenangan - Kopi Kenangan Mantan",
    "category": "Seliter",
    "price": 100000,
    "desc": "Kopi susu gula aren dalam ukuran 1 liter untuk sharing.",
    "tag": "1 Liter",
    "image": "assets/products/seliter-kenangan-mantan.svg"
  },
  {
    "id": "seliter-latte",
    "name": "Seliter Kenangan - Latte",
    "category": "Seliter",
    "price": 100000,
    "desc": "Espresso dan susu segar dalam ukuran 1 liter.",
    "tag": "1 Liter",
    "image": "assets/products/seliter-latte.svg"
  },
  {
    "id": "seliter-matcha-latte",
    "name": "Seliter Kenangan - Matcha Latte",
    "category": "Seliter",
    "price": 110000,
    "desc": "Fresh milk dan high quality matcha powder dalam ukuran 1 liter.",
    "tag": "1 Liter",
    "image": "assets/products/seliter-matcha-latte.svg"
  },
  {
    "id": "seliter-caramel-macchiato",
    "name": "Seliter Kenangan - Caramel Macchiato",
    "category": "Seliter",
    "price": 110000,
    "desc": "Espresso, susu, dan saus salted caramel dalam ukuran 1 liter.",
    "tag": "1 Liter",
    "image": "assets/products/seliter-caramel-macchiato.svg"
  },
  {
    "id": "roti-susu-manis",
    "name": "Roti Susu Manis",
    "category": "Roti & Snack",
    "price": 12000,
    "desc": "Roti bantal lembut dengan krim susu dan remahan susu manis.",
    "tag": "Snack",
    "image": "assets/products/roti-susu-manis.svg"
  },
  {
    "id": "roti-keju-manis",
    "name": "Roti Keju Manis",
    "category": "Roti & Snack",
    "price": 15000,
    "desc": "Roti bantal lembut dengan isi keju, butter cream, dan keju parut.",
    "tag": "Snack",
    "image": "assets/products/roti-keju-manis.svg"
  }
];

const state = {
  category: "Semua",
  search: "",
  cart: JSON.parse(localStorage.getItem("ngopskuy_cart") || "{}")
};

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: CONFIG.currency,
  maximumFractionDigits: 0
});

const $ = (selector) => document.querySelector(selector);
const productGrid = $("#productGrid");
const categoryTabs = $("#categoryTabs");
const searchInput = $("#searchInput");
const emptyState = $("#emptyState");
const cartList = $("#cartList");
const cartTotal = $("#cartTotal");
const dockQty = $("#dockQty");
const dockTotal = $("#dockTotal");
const storeStatus = $("#storeStatus");
const checkoutForm = $("#checkoutForm");
const clearCartBtn = $("#clearCartBtn");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderStoreStatus();
  renderCategories();
  renderProducts();
  renderCart();
});

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.toLowerCase().trim();
  renderProducts();
});

clearCartBtn.addEventListener("click", () => {
  state.cart = {};
  saveCart();
  renderCart();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!CONFIG.isOpen) {
    alert(CONFIG.closedMessage);
    return;
  }

  const items = getCartItems();
  if (!items.length) {
    alert("Keranjang masih kosong. Pilih menu dulu ya.");
    return;
  }

  const formData = new FormData(checkoutForm);
  const customerName = formData.get("customerName").trim();
  const orderMethod = formData.get("orderMethod");
  const customerAddress = formData.get("customerAddress").trim() || "-";
  const customerNote = formData.get("customerNote").trim() || "-";

  const lines = items.map((item, index) => {
    return `${index + 1}. ${item.name} x${item.qty} - ${rupiah.format(item.price * item.qty)}`;
  });

  const message = [
    `Halo ${CONFIG.brandName}, saya ingin order:`,
    "",
    ...lines,
    "",
    `Total: ${rupiah.format(getCartTotal())}`,
    "",
    `Nama: ${customerName}`,
    `Metode: ${orderMethod}`,
    `Alamat/Lokasi: ${customerAddress}`,
    `Catatan: ${customerNote}`
  ].join("\n");

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

function renderStoreStatus() {
  const dotClass = CONFIG.isOpen ? "status-dot" : "status-dot closed";
  const label = CONFIG.isOpen ? "Buka" : "Tutup";
  const message = CONFIG.isOpen ? CONFIG.openMessage : CONFIG.closedMessage;
  storeStatus.innerHTML = `<span class="${dotClass}"></span><span><strong>${label}.</strong> ${message}</span>`;
}

function renderCategories() {
  const categories = ["Semua", ...new Set(PRODUCTS.map((product) => product.category))];
  categoryTabs.innerHTML = categories.map((category) => {
    const active = category === state.category ? "active" : "";
    return `<button class="tab-btn ${active}" type="button" data-category="${category}">${category}</button>`;
  }).join("");

  categoryTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filtered = PRODUCTS.filter((product) => {
    const matchesCategory = state.category === "Semua" || product.category === state.category;
    const matchesSearch = [product.name, product.category, product.desc, product.tag]
      .join(" ")
      .toLowerCase()
      .includes(state.search);
    return matchesCategory && matchesSearch;
  });

  emptyState.hidden = filtered.length > 0;

  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-visual">
        <span class="product-tag">${product.tag}</span>
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="product-footer">
          <span class="price">${rupiah.format(product.price)}</span>
          <button class="add-btn" type="button" data-id="${product.id}">Tambah</button>
        </div>
      </div>
    </article>
  `).join("");

  productGrid.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function addToCart(productId) {
  state.cart[productId] = (state.cart[productId] || 0) + 1;
  saveCart();
  renderCart();
}

function updateQty(productId, delta) {
  const current = state.cart[productId] || 0;
  const next = current + delta;

  if (next <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = next;
  }

  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("ngopskuy_cart", JSON.stringify(state.cart));
}

function getCartItems() {
  return Object.entries(state.cart)
    .map(([productId, qty]) => {
      const product = PRODUCTS.find((item) => item.id === productId);
      if (!product) return null;
      return { ...product, qty };
    })
    .filter(Boolean);
}

function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartQty() {
  return getCartItems().reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  const items = getCartItems();

  if (!items.length) {
    cartList.innerHTML = `<div class="cart-empty">Belum ada menu di keranjang.</div>`;
  } else {
    cartList.innerHTML = items.map((item) => `
      <article class="cart-item">
        <img class="cart-thumb" src="${item.image}" alt="" loading="lazy">
        <div>
          <h4>${item.name}</h4>
          <p>${rupiah.format(item.price)} • Subtotal ${rupiah.format(item.price * item.qty)}</p>
        </div>
        <div class="qty-control" aria-label="Atur jumlah ${item.name}">
          <button type="button" data-id="${item.id}" data-delta="-1" aria-label="Kurangi">−</button>
          <span>${item.qty}</span>
          <button type="button" data-id="${item.id}" data-delta="1" aria-label="Tambah">+</button>
        </div>
      </article>
    `).join("");
  }

  cartList.querySelectorAll(".qty-control button").forEach((button) => {
    button.addEventListener("click", () => updateQty(button.dataset.id, Number(button.dataset.delta)));
  });

  const qty = getCartQty();
  const total = getCartTotal();
  cartTotal.textContent = rupiah.format(total);
  dockQty.textContent = `${qty} item`;
  dockTotal.textContent = rupiah.format(total);
}
