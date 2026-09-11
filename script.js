const products = [
  {
    id: 1, name: "Classic Varsity Jacket", category: "Jackets", price: 40000,
    image: "images/varsity jacket.jfif",
    description: "An elegant fitted jacket designed for a clean, sophisticated appearance. Perfect for evenings, events and smart-casual outfits.",
    sizes: ["S","M","L","XL"], colors: ["#111","#765137","#23344b"]
  },
  {
    id: 2, name: "Denim Wool Jacket", category: "Jackets", price: 30000,
    image: "images/denim wool jacket.jfif",
    description: "A timeless leather-inspired jacket that brings character and confidence to your everyday wardrobe.",
    sizes: ["M","L","XL"], colors: ["#5898a8","#0e0d0d","#fff"]
  },
  {
    id: 3, name: "Denim Jacket", category: "Jackets", price: 27000,
    image: "images/denim jacket.jfif",
    description: "A versatile denim layer for relaxed days and effortless casual styling.",
    sizes: ["S","M","L","XL"], colors: ["#334d68","#111"]
  },
  {
    id: 4, name: "Harrington Jacket", category: "Jackets", price: 32000,
    image: "images/harrington jacket.jfif",
    description: "A classic Harrington Jacket best for men with high guarantee skin .",
    sizes: ["M","L","XL"], colors: ["#111","#68706f","#6d540379"]
  },
   {
    id: 5, name: "Giacca Jacket", category: "Jackets", price: 22000,
    image: "images/Giacca jacket.jfif",
    description: "A streetwear jacket best for teens and adults combining warmth with a clean streetwear silhouette.",
    sizes: ["M","L","XL"], colors: ["#111","#6d5e19","#ffff"],
    
  },
   {
    id: 6, name: "Hendon Nightfall Jacket", category: "Jackets", price: 32000,
    image: "images/hendon nightfall jacket.jfif",
    description: "A Hendon jacket best for classic events and also casual,good skin with high guarantee.",
    sizes: ["M","L","XL"], colors: ["#111","#68706f"] 
  },
   {
    id: 7, name: "Hooded zip up Jacket", category: "Jackets", price: 22000,
    image: "images/hooded zip up jacket.jfif",
    description: "A modern Hooded jacket combining warmth with a clean streetwear silhouette during rainy and cloudy seasons.",
    sizes: ["M","L","XL"], colors: ["#111","#4d1080"]
  },
  {
    id: 8, name: "De vo Jacket", category: "Jackets", price:18000,
    image: "images/jaqueta de vo.jfif",
    description: "A De vo jacket best for cold and cloudy climate for casual wear and best during evening walk or visitation.",
    sizes: ["M","L","XL"], colors: ["#111","#1b8f81,"]
  },
  {
    id: 9, name: "Short Sleeve Shirts", category: "Shirts", price: 12000,
    image: "C:/Users/emmanuelg/Desktop/codes/images/short sleeve.jfif",
    description: "A crisp shirt made for all occasions, office looks and refined evenings.",
    sizes: ["S","M","L","XL"], colors: ["#fff","#111","#6870","#123"]
  },
  {
    id: 10, name: "Lacoste shirts", category: "Shirts", price: 12000,
    image: "images/lacoste.jfif",
    description: "A sleek  shirt with a clean silhouette for a confident modern look.",
    sizes: ["S","M","L","XL"], colors: ["#422704","#111","#124","#178","#490202","#fff"]
  },
  {
    id: 11, name: "Lacoste uncolored shirts", category: "Shirts", price: 15000,
    image: "images/lacoste1.jfif",
    description: "A  shirt that works effortlessly from casual afternoons to smart occasions.",
    sizes: ["S","M","L"], colors: ["#111","#dfe1dc","#304158","#123","#987"]
  },
  {
    id: 12, name: "Denim Pants", category: "Pants", price: 26000,
    image: "images/denim pants.jfif",
    description: "Realaxed oversized pants for casual wearing and class attending for teens and adults.",
    sizes: ["M","L","XL"], colors: ["#111","#96732f","#aad2f3"]
  },
  {
    id: 13, name: "Suit Pants", category: "Pants", price: 40000,
    image: "images/suit pants.jfif",
    description: "A classic pant for special occassions, meetings and dates .Better for classic men.",
    sizes: ["S","M","L","XL"], colors: ["#111","#f2eee5","#86600e",]
  },
  {
    id: 14, name: "Sweatpants", category: "Pants", price:15000,
    image: "images/sweatpants.jfif",
    description: "A comfortable pant with a clean, minimal shape for everyday wear even at home it is so very comfortable.",
    sizes: ["M","L","XL"], colors: ["#3e3a35","#111","#8a8379","rgb(224, 16, 179)","#123","rgb(138, 85, 6)","#aad2f3"]
  },
  {
    id: 15, name: "ALO Tank tops", category: "Tank tops", price: 13000,
    image: "images/Tank tops.jfif",
    description: "Tailored trousers with a timeless silhouette for formal and smart-casual outfits.",
    sizes: ["M","L","XL"], colors: ["#111","#4d4a43","#24344a"]
  },
  {
    id: 16, name: "NIKE Tank top", category: "Tank tops", price: 10000,
    image: "images/nike tank tops.jfif",
    description: "Clean everyday tops that pair easily with sport casual and contemporary outfits. They are better wore in sports and in walks.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 17, name: "SHEIN Tank tops", category: "Tank tops", price: 15000,
    image: "images/tank top shein.jfif",
    description: "Casual Tops that  easily match with  casual and contemporary outfits. They are better in walks, redy to be wore in summer.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 18, name: "NIKE jogger set", category: "Jogger Sets", price: 30000,
    image: "images/Jogger set.jfif",
    description: "Clean everyday set that go easily with daily works casual and contemporary ones. They are better wore in sports and in walks.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 19, name: "Crop Shirts", category: "Shirts", price: 12000,
    image: "images/crop shirt.jfif",
    description: "Everyday shirt that pair easily with denim casual and contemporary outfits. ",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 20, name: "ALO Jogger Shorts Set", category: "Jogger Sets", price: 20000,
    image: "images/jogger shorts set.jfif",
    description: "Daily set best after work in evening walks or sports or chillin' with friends outside.And they are pretty cool at home in summer.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 21, name: "NIKE Underpants", category: "Underpants", price: 8000,
    image: "images/nike underpants.jfif",
    description: "Clean everyday underpants that pair easily with sports, casual and contemporary outfits. They are comfortable wore in sports and in walks.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 22, name: "ALO Underpants", category: "Underpants", price: 9000,
    image: "images/ALO underpants.jfif",
    description: "Clean everyday underpants that pair easily with sport ,casual and contemporary outfits. They are better wore in sports and in walks.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 23, name: "ALO V-neck Sweater", category: "Sweaters & Hoodies", price: 30000,
    image: "images/v-neck sweater.jfif",
    description: "Comfortable and portable sweater best in rainy and cloudy season.Wore casually and contemporary.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 24, name: "ALO Hoodie", category: "Sweaters & Hoodies", price: 24000,
    image: "images/ALO hoodie.jfif",
    description: "Comfortable and portable sweater best in rainy and cloudy season.Wore casually andcontemporary.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  }, {
    id: 25, name: "Ck V-neck Sweater", category: "Sweaters & Hoodies", price: 35000,
    image: "images/Ck v-neck sweater.jfif",
    description: "Comfortable and portable sweater best in rainy and cloudy season.Wore casually and contemporary.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 26, name: "Longneck Sweater", category: "Sweaters & Hoodies", price: 50000,
    image: "images/long neck sweater.jfif",
    description: "Comfortable and portable sweater best in rainy and cloudy season.Wore casually and contemporary.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 27, name: "V-neck sweater", category: "Sweaters & Hoodies", price: 30000,
    image: "images/valesse.jfif",
    description: "Comfortable and portable sweater best in rainy and cloudy season.Wore casually and contemprary.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 23, name: "Fly Emirates V-neck Sweater", category: "Sweaters & Hoodies", price: 25000,
    image: "images/fly emirates v-neck sweater.jfif",
    description: "Comfortable and portable sweater best in rainy and cloudy season.Wore casually and.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 24, name: "Camp-collar set", category: "Co-ord Sets", price: 50000,
    image: "images/complete.jfif",
    description: "Casual best outfit easy for wearing and preparing.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 25, name: "Cuban-collar set", category: "Co-ord Sets", price: 50000,
    image: "images/complete 1.jfif",
    description: "Gives sophiscated, effortless look while remaining relaxed",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 26, name: "Resort set", category: "Co-ord Sets", price: 50000,
    image: "images/cotton pants.jfif",
    description: "Breathable and comfortable while still looking put together.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 27, name: "Tailored set", category: "Co-ord Sets", price: 50000,
    image: "images/complete 2.jfif",
    description: "Looks more formal than a relaxed set while remaining comfortable",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 28, name: "ALO Yoga Shorts", category: "Shorts", price: 4000,
    image: "images/ALO yoga shorts.jfif",
    description: "Comfortable shorts for summer and home relaxation.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
   {
    id: 29, name: "'47NYY Baseball cap", category: "Caps", price: 5000,
    image: "images/'47NYY baseball cap.jfif",
    description: "Reliable cap wore either in sun or in rain good during walks.",
    sizes: ["M","L","XL"], colors: ["#111","#fff","#8a8379","#345","rgb(160, 110, 1)"]
  },
];

const categories = [
  ["Pants","images/suit pants.jfif"],
  ["Jackets","images/jackets.jfif"],
  ["Tank tops","images/Tank tops.jfif"],
  ["Jogger Sets","images/Jogger set.jfif"],
  ["Shirts","images/tops.jfif"],
  ["Sweaters & Hoodies","images/v-neck sweater.jfif"],
  ["Underpants","images/ck boxers.jfif"],
  ["Co-ord Sets","images/complete.jfif"],
  ["Shorts","images/ALO yoga shorts.jfif"],
  ["Caps","images/'47NYY baseball cap.jfif"]
];

let currentCategory = "All";
let favorites = JSON.parse(localStorage.getItem("house16Favorites") || "[]");

const money = n => `${n.toLocaleString()} RWF`;

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById(`${page}-page`);
  if (target) target.classList.add("active");

  document.querySelectorAll("[data-page]").forEach(el => {
    el.classList.toggle("active", el.dataset.page === page);
  });

  window.scrollTo({top: 0, behavior: "smooth"});
}

function productCard(product) {
  const liked = favorites.includes(product.id);
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="favorite-btn ${liked ? "liked" : ""}" onclick="toggleFavorite(${product.id})">${liked ? "♥" : "♡"}</button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">${money(product.price)}</div>
        <p class="product-description">${product.description}</p>
        <button class="view-product" onclick="openProduct(${product.id})">View Details</button>
      </div>
    </article>
  `;
}

function renderCategories() {
  document.getElementById("category-grid").innerHTML = categories.map(([name,img]) => `
    <button class="category-card" onclick="filterCategory('${name}')">
      <img src="${img}" alt="${name}" loading="lazy">
      <span>${name}</span>
    </button>
  `).join("");
}

function renderFilters() {
  const names = ["All", ...categories.map(c => c[0])];
  document.getElementById("category-filters").innerHTML = names.map(name => `
    <button class="filter-pill ${name === currentCategory ? "active" : ""}" onclick="filterCategory('${name}')">${name}</button>
  `).join("");
}

function renderProducts() {
  let list = [...products];

  if (currentCategory !== "All") {
    list = list.filter(p => p.category === currentCategory);
  }

  const query = document.getElementById("search-input").value.trim().toLowerCase();
  if (query) {
    list = list.filter(p =>
      `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(query)
    );
  }

  const sort = document.getElementById("sort-select").value;
  if (sort === "low") list.sort((a,b) => a.price - b.price);
  if (sort === "high") list.sort((a,b) => b.price - a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name));

  document.getElementById("product-grid").innerHTML = list.map(productCard).join("");
  document.getElementById("no-results").classList.toggle("hidden", list.length !== 0);
}

function filterCategory(category) {
  currentCategory = category;
  renderFilters();
  renderProducts();
  showPage("shop");
}

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById("product-detail").innerHTML = `
    <div class="detail-image">
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="detail-info">
      <p class="eyebrow">${p.category}</p>
      <h1>${p.name}</h1>
      <div class="detail-price">${money(p.price)}</div>
      <p class="detail-description">${p.description}</p>

      <p class="option-title">SELECT SIZE</p>
      <div class="size-options">
        ${p.sizes.map((s,i) => `<button class="size-btn ${i===0 ? "selected":""}" onclick="selectSize(this)">${s}</button>`).join("")}
      </div>

      <p class="option-title">AVAILABLE COLORS</p>
      <div class="color-options">
        ${p.colors.map(c => `<button class="color-dot" style="background:${c}" aria-label="Color"></button>`).join("")}
      </div>

      <button class="gold-btn" onclick="contactProduct('${p.name.replace(/'/g, "\\'")}')">Contact Owner</button>
    </div>
  `;
  showPage("product");
}

function selectSize(btn) {
  btn.parentElement.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function contactProduct(productName) {
  const email = "houseof16@gmail.com";
  const subject = encodeURIComponent(`Inquiry about ${productName}`);
  const body = encodeURIComponent(
    `Hello THE HOUSE OF 16,\n\nI'm interested in the ${productName}. Could you please provide information about availability, sizes and purchasing?\n\nThank you.`
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(x => x !== id)
    : [...favorites, id];

  localStorage.setItem("house16Favorites", JSON.stringify(favorites));
  renderProducts();
  renderFavorites();
}

function renderFavorites() {
  const list = products.filter(p => favorites.includes(p.id));
  document.getElementById("favorite-grid").innerHTML = list.map(productCard).join("");
  document.getElementById("empty-favorites").classList.toggle("hidden", list.length !== 0);
}

document.getElementById("welcome-btn").addEventListener("click", () => {
  document.getElementById("welcome-screen").classList.add("hide");
  document.getElementById("app").classList.remove("hidden");
  showPage("home");
});

document.querySelectorAll("[data-page]").forEach(el => {
  el.addEventListener("click", () => {
    const page = el.dataset.page;
    if (page) showPage(page);
  });
});

document.getElementById("sort-select").addEventListener("change", renderProducts);

document.getElementById("search-input").addEventListener("input", () => {
  if (!document.getElementById("shop-page").classList.contains("active")) showPage("shop");
  renderProducts();
});

document.getElementById("search-toggle").addEventListener("click", () => {
  document.getElementById("search-box").classList.toggle("hidden");
  if (!document.getElementById("search-box").classList.contains("hidden")) {
    document.getElementById("search-input").focus();
  }
});

document.getElementById("favorites-toggle").addEventListener("click", () => {
  renderFavorites();
  showPage("favorites");
});

document.getElementById("menu-btn").addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.toggle("mobile-open");
});

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;

  const subject = encodeURIComponent("THE HOUSE OF 16 Customer Inquiry");
  const body = encodeURIComponent(`Name: ${name}\nCustomer email: ${email}\n\n${message}`);
  window.location.href = `mailto:houseof16@gmail.com?subject=${subject}&body=${body}`;
});

renderCategories();
renderFilters();
renderProducts();
renderFavorites();
