// =============================================
//  ABIRAMI TEXTILES — App Logic
// =============================================

const WHATSAPP_NUMBER = "919999999999"; // Update with real number

let activeCategory = "all";

// --- Render Products ---
function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");

  if (!list.length) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="pc-image" style="background: ${getGradient(p.category)}">
        ${p.emoji}
        ${p.badge ? `<div class="pc-badge">${p.badge}</div>` : ""}
      </div>
      <div class="pc-body">
        <div class="pc-cat">${formatCat(p.category)}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-price">${p.price}</div>
        <div class="pc-enquire">Enquire Now →</div>
      </div>
    </div>
  `).join("");
}

// --- Filter Logic ---
function filterProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  let list = products;

  if (activeCategory !== "all") {
    list = list.filter(p => p.category === activeCategory);
  }
  if (query) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query))
    );
  }
  renderProducts(list);
}

// --- Category Chips ---
document.getElementById("categoryChips").addEventListener("click", (e) => {
  if (e.target.classList.contains("chip")) {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    e.target.classList.add("active");
    activeCategory = e.target.dataset.cat;
    filterProducts();
  }
});

// --- Modal ---
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById("modalEmoji").textContent = p.emoji;
  document.getElementById("modalCat").textContent = formatCat(p.category);
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalPrice").textContent = p.price;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalTags").innerHTML = p.tags.map(t => `<span>${t}</span>`).join("");
  document.getElementById("modalWA").href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Abirami%20Textiles%2C%20I%27m%20interested%20in%20*${encodeURIComponent(p.name)}*%20(${encodeURIComponent(p.price)}).%20Please%20share%20more%20details.`;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// --- Mobile Menu ---
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

// --- Helpers ---
function formatCat(cat) {
  const map = {
    sarees: "Sarees", cotton: "Cotton Fabrics", silk: "Silk Fabrics",
    synthetic: "Synthetics", linen: "Linen", handloom: "Handloom",
    "dress-material": "Dress Materials", blouse: "Blouse Piece"
  };
  return map[cat] || cat;
}

function getGradient(cat) {
  const map = {
    sarees:          "linear-gradient(135deg,#e8f0fb,#c8d8f5)",
    cotton:          "linear-gradient(135deg,#e8f5ec,#c8e8d0)",
    silk:            "linear-gradient(135deg,#fdf5e8,#f5e0c0)",
    synthetic:       "linear-gradient(135deg,#f0e8fb,#dcc8f5)",
    linen:           "linear-gradient(135deg,#f5f0e8,#e8dcc8)",
    handloom:        "linear-gradient(135deg,#fbe8f0,#f5c8d8)",
    "dress-material":"linear-gradient(135deg,#e8fbf5,#c8f5e8)",
    blouse:          "linear-gradient(135deg,#fbf0e8,#f5d8c8)"
  };
  return map[cat] || "linear-gradient(135deg,#e8f0fb,#c8d8f5)";
}

// --- Init ---
renderProducts(products);
