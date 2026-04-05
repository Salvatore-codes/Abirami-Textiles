<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Abirami Textiles — AI Admin Panel</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#0d2d6b;--mid:#1a4faa;--light:#e8f0fb;--pale:#f4f7fd;
  --gold:#c9a84c;--white:#fff;--muted:#6b7a9a;
  --green:#16a34a;--green-light:#dcfce7;
  --red:#dc2626;--red-light:#fee2e2;
  --radius:14px;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:var(--pale);color:#1a1a2e;min-height:100vh}

/* HEADER */
.header{
  background:linear-gradient(135deg,var(--blue),#163a8a);
  padding:20px 28px;
  display:flex;align-items:center;gap:14px;
  box-shadow:0 4px 24px rgba(13,45,107,0.2);
}
.header-logo{font-size:2rem}
.header-title{font-family:'Playfair Display',serif;font-size:1.3rem;color:var(--white)}
.header-sub{font-size:0.78rem;color:rgba(255,255,255,0.6);margin-top:2px}
.header-badge{
  margin-left:auto;background:rgba(201,168,76,0.2);
  border:1px solid rgba(201,168,76,0.4);
  color:var(--gold);font-size:0.75rem;font-weight:600;
  padding:6px 14px;border-radius:50px;white-space:nowrap;
}

/* LAYOUT */
.layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:1100px;margin:32px auto;padding:0 24px 60px}
@media(max-width:768px){.layout{grid-template-columns:1fr}}

/* PANELS */
.panel{background:var(--white);border-radius:var(--radius);border:1px solid rgba(13,45,107,0.08);box-shadow:0 2px 16px rgba(13,45,107,0.06);overflow:hidden}
.panel-header{padding:18px 22px;border-bottom:1px solid var(--light);display:flex;align-items:center;gap:10px}
.panel-header h2{font-size:0.95rem;font-weight:600;color:var(--blue)}
.panel-icon{font-size:1.2rem}
.panel-body{padding:22px}

/* PROMPT BOX */
.prompt-area{
  width:100%;min-height:110px;
  border:1.5px solid rgba(13,45,107,0.15);border-radius:10px;
  padding:14px;font-family:'DM Sans',sans-serif;font-size:0.95rem;
  color:#1a1a2e;resize:vertical;outline:none;
  transition:border-color .2s;line-height:1.6;
}
.prompt-area:focus{border-color:var(--mid)}
.prompt-area::placeholder{color:#aab4cb}

.examples{margin:12px 0;display:flex;flex-wrap:wrap;gap:8px}
.ex-chip{
  background:var(--light);color:var(--blue);
  border:none;border-radius:50px;padding:6px 14px;
  font-size:0.78rem;font-weight:500;cursor:pointer;
  transition:background .2s,transform .15s;font-family:'DM Sans',sans-serif;
}
.ex-chip:hover{background:var(--blue);color:var(--white);transform:translateY(-1px)}

.send-btn{
  width:100%;padding:14px;border:none;border-radius:10px;
  background:linear-gradient(135deg,var(--blue),var(--mid));
  color:var(--white);font-size:1rem;font-weight:600;
  cursor:pointer;font-family:'DM Sans',sans-serif;
  transition:transform .2s,box-shadow .2s;
  display:flex;align-items:center;justify-content:center;gap:10px;
  margin-top:14px;
}
.send-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(13,45,107,0.25)}
.send-btn:disabled{opacity:0.6;cursor:not-allowed;transform:none;box-shadow:none}

/* RESPONSE */
.response-box{
  background:var(--pale);border:1.5px solid rgba(13,45,107,0.1);
  border-radius:10px;padding:16px;min-height:80px;
  font-size:0.9rem;color:#333;line-height:1.7;
  white-space:pre-wrap;
}
.response-box.empty{color:var(--muted);font-style:italic;display:flex;align-items:center;justify-content:center;text-align:center;min-height:80px}

/* CODE OUTPUT */
.code-output{display:none;margin-top:16px}
.code-output.visible{display:block}
.code-label{font-size:0.78rem;font-weight:600;color:var(--muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px}
.code-box{
  background:#0d1b2e;color:#a8d8ff;
  border-radius:10px;padding:16px;
  font-family:'DM Mono',monospace;font-size:0.78rem;
  max-height:280px;overflow-y:auto;line-height:1.6;
  white-space:pre;
}

.copy-btn{
  width:100%;padding:14px;border:none;border-radius:10px;
  background:linear-gradient(135deg,var(--green),#15803d);
  color:var(--white);font-size:1rem;font-weight:700;
  cursor:pointer;font-family:'DM Sans',sans-serif;
  transition:transform .2s,box-shadow .2s;
  display:flex;align-items:center;justify-content:center;gap:10px;
  margin-top:12px;
}
.copy-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(22,163,74,0.3)}

/* STEPS PANEL */
.steps{display:flex;flex-direction:column;gap:0}
.step-item{display:flex;gap:14px;padding:16px 0;border-bottom:1px solid var(--light);align-items:flex-start}
.step-item:last-child{border-bottom:none}
.step-num{
  width:32px;height:32px;border-radius:50%;
  background:var(--blue);color:var(--white);
  display:flex;align-items:center;justify-content:center;
  font-weight:700;font-size:0.85rem;flex-shrink:0;margin-top:2px;
}
.step-text strong{display:block;font-size:0.9rem;color:var(--blue);margin-bottom:3px}
.step-text p{font-size:0.83rem;color:var(--muted);line-height:1.5}
.step-text a{color:var(--mid);font-weight:500}
.step-text code{background:var(--light);color:var(--blue);padding:2px 8px;border-radius:4px;font-family:'DM Mono',monospace;font-size:0.8rem}

/* HISTORY */
.history-list{display:flex;flex-direction:column;gap:10px;max-height:320px;overflow-y:auto}
.history-item{
  background:var(--pale);border:1px solid rgba(13,45,107,0.08);
  border-radius:10px;padding:12px 14px;cursor:pointer;
  transition:border-color .2s,background .2s;
}
.history-item:hover{border-color:var(--mid);background:var(--light)}
.hi-prompt{font-size:0.85rem;color:var(--blue);font-weight:500;margin-bottom:4px}
.hi-time{font-size:0.72rem;color:var(--muted)}
.history-empty{color:var(--muted);font-size:0.85rem;font-style:italic;text-align:center;padding:20px 0}

/* TOAST */
.toast{
  position:fixed;bottom:28px;right:28px;z-index:999;
  background:var(--green);color:var(--white);
  padding:14px 22px;border-radius:10px;
  font-weight:600;font-size:0.9rem;
  box-shadow:0 8px 24px rgba(22,163,74,0.3);
  transform:translateY(80px);opacity:0;
  transition:all .3s ease;
  display:flex;align-items:center;gap:8px;
}
.toast.show{transform:translateY(0);opacity:1}

/* SPINNER */
@keyframes spin{to{transform:rotate(360deg)}}
.spinner{width:18px;height:18px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin .7s linear infinite;display:none}
.spinner.visible{display:block}

/* LOADING DOTS */
@keyframes blink{0%,80%,100%{opacity:0}40%{opacity:1}}
.dot{display:inline-block;animation:blink 1.4s infinite;font-size:1.2rem}
.dot:nth-child(2){animation-delay:.2s}
.dot:nth-child(3){animation-delay:.4s}

/* FULL WIDTH */
.full-width{grid-column:1/-1}
</style>
</head>
<body>

<div class="header">
  <div class="header-logo">🪡</div>
  <div>
    <div class="header-title">Abirami Textiles — AI Admin Panel</div>
    <div class="header-sub">Type what you want to change. Get the update instantly.</div>
  </div>
  <div class="header-badge">✨ Powered by Claude AI</div>
</div>

<div class="layout">

  <!-- PROMPT PANEL -->
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">💬</div>
      <h2>Tell me what to change</h2>
    </div>
    <div class="panel-body">
      <textarea class="prompt-area" id="promptInput" placeholder="Example: Add a new green cotton saree called Summer Breeze for ₹1200. It's for daily wear."></textarea>

      <div class="examples">
        <button class="ex-chip" onclick="fillExample(this)">Add new saree</button>
        <button class="ex-chip" onclick="fillExample(this)">Change a price</button>
        <button class="ex-chip" onclick="fillExample(this)">Remove a product</button>
        <button class="ex-chip" onclick="fillExample(this)">Add new category</button>
        <button class="ex-chip" onclick="fillExample(this)">Update description</button>
      </div>

      <button class="send-btn" id="sendBtn" onclick="sendPrompt()">
        <div class="spinner" id="spinner"></div>
        <span id="sendLabel">✨ Generate Update</span>
      </button>
    </div>
  </div>

  <!-- HOW TO USE -->
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">📋</div>
      <h2>How it works — 3 simple steps</h2>
    </div>
    <div class="panel-body">
      <div class="steps">
        <div class="step-item">
          <div class="step-num">1</div>
          <div class="step-text">
            <strong>Type your change above</strong>
            <p>Describe what you want in plain English. E.g. "Add a blue silk saree for ₹3000"</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">2</div>
          <div class="step-text">
            <strong>Click the big green "Copy" button</strong>
            <p>The updated products code is copied to your clipboard automatically.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">3</div>
          <div class="step-text">
            <strong>Paste it on GitHub</strong>
            <p>Go to <a href="https://github.com/Salvatore-codes/Abirami-Textiles/blob/main/products.js" target="_blank">your products.js on GitHub</a> → click ✏️ → Select All → Paste → Commit. Done! ✅</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- AI RESPONSE -->
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">🤖</div>
      <h2>AI Response</h2>
    </div>
    <div class="panel-body">
      <div class="response-box empty" id="responseBox">
        Your AI response will appear here…
      </div>

      <div class="code-output" id="codeOutput">
        <div class="code-label">📄 Updated products.js — Ready to paste</div>
        <div class="code-box" id="codeBox"></div>
        <button class="copy-btn" onclick="copyCode()">
          📋 Copy & Paste into GitHub
        </button>
      </div>
    </div>
  </div>

  <!-- HISTORY -->
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">🕐</div>
      <h2>Recent Changes</h2>
    </div>
    <div class="panel-body">
      <div class="history-list" id="historyList">
        <div class="history-empty">No changes yet. Make your first update above!</div>
      </div>
    </div>
  </div>

</div>

<!-- TOAST -->
<div class="toast" id="toast">✅ Copied! Now paste it on GitHub.</div>

<script>
// =============================================
// CURRENT PRODUCTS — mirrors your products.js
// =============================================
const INITIAL_PRODUCTS = `const products = [
  { id: 1, name: "Kanjivaram Pure Silk Saree", category: "sarees", emoji: "🥻", price: "₹4,500 onwards", badge: "Bestseller", desc: "Classic Kanjivaram saree with zari border, available in 30+ colours. Perfect for weddings and celebrations.", tags: ["Silk", "Zari", "Wedding", "6 yards"] },
  { id: 2, name: "Cotton Tant Saree", category: "sarees", emoji: "🥻", price: "₹650 onwards", badge: null, desc: "Lightweight Bengali-style tant saree. Ideal for daily wear. Breathable and comfortable in all seasons.", tags: ["Cotton", "Daily Wear", "6 yards"] },
  { id: 3, name: "Banarasi Silk Saree", category: "sarees", emoji: "🥻", price: "₹3,200 onwards", badge: "Premium", desc: "Authentic Banarasi weave with intricate brocade patterns. A timeless choice for festivals and weddings.", tags: ["Silk", "Brocade", "Varanasi", "Festival"] },
  { id: 4, name: "Chiffon Printed Saree", category: "sarees", emoji: "🥻", price: "₹850 onwards", badge: null, desc: "Flowy chiffon sarees with modern prints. Available in floral, abstract and geometric designs.", tags: ["Chiffon", "Printed", "Party Wear"] },
  { id: 5, name: "Pure Cotton Shirting Fabric", category: "cotton", emoji: "👕", price: "₹120/metre", badge: null, desc: "Premium 100% cotton shirting material. Soft, durable and available in 50+ solid and checked patterns.", tags: ["100% Cotton", "Shirting", "Checks", "Solids"] },
  { id: 6, name: "Cotton Salwar Kameez Fabric", category: "cotton", emoji: "👗", price: "₹180/metre", badge: "New Arrival", desc: "Soft cotton fabric ideal for salwar suits. Available in prints, block prints and plain weaves.", tags: ["Cotton", "Salwar", "Printed", "Block Print"] },
  { id: 7, name: "Khadi Cotton Fabric", category: "cotton", emoji: "🧵", price: "₹200/metre", badge: null, desc: "Authentic hand-spun khadi cotton. Eco-friendly, breathable and excellent for summer clothing.", tags: ["Khadi", "Handspun", "Eco-Friendly", "Summer"] },
  { id: 8, name: "Raw Silk Fabric", category: "silk", emoji: "✨", price: "₹380/metre", badge: "Premium", desc: "Luxurious raw silk with natural texture. Perfect for blouses, indo-westerns and ethnic wear.", tags: ["Raw Silk", "Blouse", "Indo-Western"] },
  { id: 9, name: "Dupion Silk Fabric", category: "silk", emoji: "🌟", price: "₹420/metre", badge: null, desc: "Shiny dupion silk with distinctive slub texture. Available in 40+ rich colours for party and bridal wear.", tags: ["Dupion", "Bridal", "Party Wear", "Shiny"] },
  { id: 10, name: "Mysore Crepe Silk", category: "silk", emoji: "💎", price: "₹550/metre", badge: "Exclusive", desc: "Classic Mysore crepe with a smooth, lustrous finish. Ideal for sarees, blouses and formal wear.", tags: ["Mysore", "Crepe", "Lustrous", "Formal"] },
  { id: 11, name: "Georgette Fabric", category: "synthetic", emoji: "🌊", price: "₹95/metre", badge: null, desc: "Lightweight georgette with a subtle sheer texture. Great for tops, sarees and dupatta material.", tags: ["Georgette", "Sheer", "Lightweight"] },
  { id: 12, name: "Polyester Satin", category: "synthetic", emoji: "💫", price: "₹80/metre", badge: null, desc: "Smooth and glossy satin fabric for evening wear, nightwear and lining material.", tags: ["Satin", "Glossy", "Evening Wear", "Lining"] },
  { id: 13, name: "Net Fabric", category: "synthetic", emoji: "🕸️", price: "₹70/metre", badge: null, desc: "Embroidered and plain net fabric for lehengas, dupattas and bridal overlays.", tags: ["Net", "Embroidered", "Lehenga", "Bridal"] },
  { id: 14, name: "Pure Linen Fabric", category: "linen", emoji: "🍃", price: "₹320/metre", badge: "Summer Pick", desc: "100% pure linen — crisp, breathable and long-lasting. Ideal for formal shirts, trousers and kurtas.", tags: ["100% Linen", "Formal", "Shirts", "Kurtas"] },
  { id: 15, name: "Linen-Cotton Blend", category: "linen", emoji: "🌿", price: "₹210/metre", badge: null, desc: "Soft linen-cotton blend with the best of both worlds — comfort of cotton with the texture of linen.", tags: ["Linen Blend", "Cotton", "Comfortable"] },
  { id: 16, name: "Pochampally Ikat Fabric", category: "handloom", emoji: "🎨", price: "₹280/metre", badge: "GI Tagged", desc: "Authentic Pochampally ikat weave with vibrant geometric patterns. Supports local artisans.", tags: ["Ikat", "Pochampally", "Geometric", "Handloom"] },
  { id: 17, name: "Chettinad Cotton Saree Fabric", category: "handloom", emoji: "🧶", price: "₹350/metre", badge: null, desc: "Traditional Chettinad weave with distinctive checks and bright colour combinations.", tags: ["Chettinad", "Checks", "Traditional", "Tamil Nadu"] },
  { id: 18, name: "Kalamkari Block Print", category: "handloom", emoji: "🖌️", price: "₹240/metre", badge: "Artisan", desc: "Hand-painted kalamkari with mythological and floral motifs on cotton base. Each piece is unique.", tags: ["Kalamkari", "Hand-Painted", "Floral", "Unique"] },
  { id: 19, name: "Anarkali Dress Material Set", category: "dress-material", emoji: "👘", price: "₹850/set", badge: "Combo", desc: "3-piece set: top, bottom and dupatta fabric. Ready-to-stitch anarkali suit material with embroidery.", tags: ["3-Piece Set", "Anarkali", "Embroidery", "Dupatta"] },
  { id: 20, name: "Patiala Salwar Set", category: "dress-material", emoji: "👗", price: "₹600/set", badge: null, desc: "Comfortable Patiala suit material in cotton and rayon options. Available in 25+ prints and colours.", tags: ["Patiala", "Cotton", "Rayon", "Casual"] },
  { id: 21, name: "Kurti Fabric Roll", category: "dress-material", emoji: "🥿", price: "₹150/metre", badge: "Value", desc: "Versatile kurti fabric in rayon, cotton and crepe. Perfect for casual and semi-formal kurtis.", tags: ["Kurti", "Rayon", "Casual", "Semi-Formal"] },
  { id: 22, name: "Brocade Blouse Piece", category: "blouse", emoji: "🌺", price: "₹350/piece", badge: "Wedding Special", desc: "Rich brocade blouse piece with gold/silver zari work. Matches Kanjivaram and Banarasi sarees perfectly.", tags: ["Brocade", "Zari", "Wedding", "Gold"] },
  { id: 23, name: "Velvet Blouse Material", category: "blouse", emoji: "🍷", price: "₹280/piece", badge: null, desc: "Soft velvet blouse fabric for festive wear. Available in jewel tones — maroon, navy, emerald.", tags: ["Velvet", "Festive", "Jewel Tones"] },
  { id: 24, name: "Embroidered Net Blouse Piece", category: "blouse", emoji: "🌸", price: "₹320/piece", badge: "Trending", desc: "Delicate net fabric with embroidered flowers and stones. Perfect for party and bridal blouses.", tags: ["Net", "Embroidered", "Stones", "Bridal"] }
];`;

let currentProductsCode = INITIAL_PRODUCTS;
let history = [];

const EXAMPLES = {
  "Add new saree": "Add a new saree called 'Rose Garden Silk' in the sarees category. It's a pink silk saree priced at ₹2,800. Good for parties.",
  "Change a price": "Change the price of Kanjivaram Pure Silk Saree to ₹5,000 onwards.",
  "Remove a product": "Remove the Polyester Satin product from the catalog.",
  "Add new category": "Add a new product called 'Merino Wool Shawl' in a new category called 'woollen'. Price is ₹1,500. It's warm and soft.",
  "Update description": "Update the description of Khadi Cotton Fabric to say it is also great for kurtas and formal shirts."
};

function fillExample(btn) {
  document.getElementById('promptInput').value = EXAMPLES[btn.textContent] || '';
  document.getElementById('promptInput').focus();
}

async function sendPrompt() {
  const prompt = document.getElementById('promptInput').value.trim();
  if (!prompt) { alert('Please type what you want to change!'); return; }

  const btn = document.getElementById('sendBtn');
  const spinner = document.getElementById('spinner');
  const label = document.getElementById('sendLabel');
  const responseBox = document.getElementById('responseBox');
  const codeOutput = document.getElementById('codeOutput');

  btn.disabled = true;
  spinner.classList.add('visible');
  label.textContent = 'Thinking…';
  responseBox.className = 'response-box';
  responseBox.innerHTML = '<span class="dot">●</span><span class="dot">●</span><span class="dot">●</span>';
  codeOutput.classList.remove('visible');

  const systemPrompt = `You are an assistant that manages the product catalog for Abirami Textiles, a retail textile shop in Chennai, India.

The user will describe a change they want to make to their product catalog in plain English.

Your job:
1. Understand what they want (add product, edit price, remove product, update description, etc.)
2. Apply the change to the current products.js code
3. Return a JSON response in this exact format (no markdown, no backticks, pure JSON):
{
  "explanation": "A friendly 1-2 sentence explanation of what you changed, in simple language.",
  "updatedCode": "THE COMPLETE UPDATED products.js CODE HERE"
}

Current products.js code:
${currentProductsCode}

Rules for the updatedCode:
- Always return the COMPLETE file, not just the changed part
- Keep the same format as the original
- For new products, use the next available id number
- Choose an appropriate emoji for new products
- Keep category values exactly as: sarees, cotton, silk, synthetic, linen, handloom, dress-material, blouse (or a new one if user asks)
- badge can be a short string like "New", "Bestseller", "Premium" or null
- Price should include ₹ symbol
- Always return valid JavaScript`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        system: systemPrompt,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.content?.find(b => b.type === 'text')?.text || '';

    let parsed;
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(clean);
    } catch(e) {
      throw new Error("Could not understand the AI response. Please try again.");
    }

    // Update state
    currentProductsCode = parsed.updatedCode;

    // Show response
    responseBox.className = 'response-box';
    responseBox.textContent = '✅ ' + parsed.explanation;

    // Show code
    document.getElementById('codeBox').textContent = parsed.updatedCode;
    codeOutput.classList.add('visible');

    // Save to history
    const entry = { prompt, time: new Date().toLocaleTimeString(), explanation: parsed.explanation };
    history.unshift(entry);
    renderHistory();

    // Clear input
    document.getElementById('promptInput').value = '';

  } catch(err) {
    responseBox.className = 'response-box';
    responseBox.textContent = '❌ Error: ' + err.message;
  }

  btn.disabled = false;
  spinner.classList.remove('visible');
  label.textContent = '✨ Generate Update';
}

function copyCode() {
  const code = document.getElementById('codeBox').textContent;
  navigator.clipboard.writeText(code).then(() => {
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (!history.length) {
    list.innerHTML = '<div class="history-empty">No changes yet. Make your first update above!</div>';
    return;
  }
  list.innerHTML = history.map((h,i) => `
    <div class="history-item" onclick="recallHistory(${i})">
      <div class="hi-prompt">${h.explanation}</div>
      <div class="hi-time">🕐 ${h.time} — Click to recall</div>
    </div>
  `).join('');
}

function recallHistory(i) {
  document.getElementById('promptInput').value = history[i].prompt;
}

// Allow Ctrl+Enter to submit
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') sendPrompt();
});
</script>
</body>
</html>
