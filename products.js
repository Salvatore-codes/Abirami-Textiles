// =============================================
//  ABIRAMI TEXTILES — PRODUCT CATALOG DATA
//  To add/edit products, simply update this file
// =============================================

const products = [
  // ---- SAREES ----
  {
    id: 1, name: "Kanjivaram Pure Silk Saree", category: "sarees",
    emoji: "🥻", price: "₹4,500 onwards", badge: "Bestseller",
    desc: "Classic Kanjivaram saree with zari border, available in 30+ colours. Perfect for weddings and celebrations.",
    tags: ["Silk", "Zari", "Wedding", "6 yards"]
  },
  {
    id: 2, name: "Cotton Tant Saree", category: "sarees",
    emoji: "🥻", price: "₹650 onwards", badge: null,
    desc: "Lightweight Bengali-style tant saree. Ideal for daily wear. Breathable and comfortable in all seasons.",
    tags: ["Cotton", "Daily Wear", "6 yards"]
  },
  {
    id: 3, name: "Banarasi Silk Saree", category: "sarees",
    emoji: "🥻", price: "₹3,200 onwards", badge: "Premium",
    desc: "Authentic Banarasi weave with intricate brocade patterns. A timeless choice for festivals and weddings.",
    tags: ["Silk", "Brocade", "Varanasi", "Festival"]
  },
  {
    id: 4, name: "Chiffon Printed Saree", category: "sarees",
    emoji: "🥻", price: "₹850 onwards", badge: null,
    desc: "Flowy chiffon sarees with modern prints. Available in floral, abstract and geometric designs.",
    tags: ["Chiffon", "Printed", "Party Wear"]
  },

  // ---- COTTON ----
  {
    id: 5, name: "Pure Cotton Shirting Fabric", category: "cotton",
    emoji: "👕", price: "₹120/metre", badge: null,
    desc: "Premium 100% cotton shirting material. Soft, durable and available in 50+ solid and checked patterns.",
    tags: ["100% Cotton", "Shirting", "Checks", "Solids"]
  },
  {
    id: 6, name: "Cotton Salwar Kameez Fabric", category: "cotton",
    emoji: "👗", price: "₹180/metre", badge: "New Arrival",
    desc: "Soft cotton fabric ideal for salwar suits. Available in prints, block prints and plain weaves.",
    tags: ["Cotton", "Salwar", "Printed", "Block Print"]
  },
  {
    id: 7, name: "Khadi Cotton Fabric", category: "cotton",
    emoji: "🧵", price: "₹200/metre", badge: null,
    desc: "Authentic hand-spun khadi cotton. Eco-friendly, breathable and excellent for summer clothing.",
    tags: ["Khadi", "Handspun", "Eco-Friendly", "Summer"]
  },

  // ---- SILK ----
  {
    id: 8, name: "Raw Silk Fabric", category: "silk",
    emoji: "✨", price: "₹380/metre", badge: "Premium",
    desc: "Luxurious raw silk with natural texture. Perfect for blouses, indo-westerns and ethnic wear.",
    tags: ["Raw Silk", "Blouse", "Indo-Western"]
  },
  {
    id: 9, name: "Dupion Silk Fabric", category: "silk",
    emoji: "🌟", price: "₹420/metre", badge: null,
    desc: "Shiny dupion silk with distinctive slub texture. Available in 40+ rich colours for party and bridal wear.",
    tags: ["Dupion", "Bridal", "Party Wear", "Shiny"]
  },
  {
    id: 10, name: "Mysore Crepe Silk", category: "silk",
    emoji: "💎", price: "₹550/metre", badge: "Exclusive",
    desc: "Classic Mysore crepe with a smooth, lustrous finish. Ideal for sarees, blouses and formal wear.",
    tags: ["Mysore", "Crepe", "Lustrous", "Formal"]
  },

  // ---- SYNTHETIC ----
  {
    id: 11, name: "Georgette Fabric", category: "synthetic",
    emoji: "🌊", price: "₹95/metre", badge: null,
    desc: "Lightweight georgette with a subtle sheer texture. Great for tops, sarees and dupatta material.",
    tags: ["Georgette", "Sheer", "Lightweight"]
  },
  {
    id: 12, name: "Polyester Satin", category: "synthetic",
    emoji: "💫", price: "₹80/metre", badge: null,
    desc: "Smooth and glossy satin fabric for evening wear, nightwear and lining material.",
    tags: ["Satin", "Glossy", "Evening Wear", "Lining"]
  },
  {
    id: 13, name: "Net Fabric", category: "synthetic",
    emoji: "🕸️", price: "₹70/metre", badge: null,
    desc: "Embroidered and plain net fabric for lehengas, dupattas and bridal overlays.",
    tags: ["Net", "Embroidered", "Lehenga", "Bridal"]
  },

  // ---- LINEN ----
  {
    id: 14, name: "Pure Linen Fabric", category: "linen",
    emoji: "🍃", price: "₹320/metre", badge: "Summer Pick",
    desc: "100% pure linen — crisp, breathable and long-lasting. Ideal for formal shirts, trousers and kurtas.",
    tags: ["100% Linen", "Formal", "Shirts", "Kurtas"]
  },
  {
    id: 15, name: "Linen-Cotton Blend", category: "linen",
    emoji: "🌿", price: "₹210/metre", badge: null,
    desc: "Soft linen-cotton blend with the best of both worlds — comfort of cotton with the texture of linen.",
    tags: ["Linen Blend", "Cotton", "Comfortable"]
  },

  // ---- HANDLOOM ----
  {
    id: 16, name: "Pochampally Ikat Fabric", category: "handloom",
    emoji: "🎨", price: "₹280/metre", badge: "GI Tagged",
    desc: "Authentic Pochampally ikat weave with vibrant geometric patterns. Supports local artisans.",
    tags: ["Ikat", "Pochampally", "Geometric", "Handloom"]
  },
  {
    id: 17, name: "Chettinad Cotton Saree Fabric", category: "handloom",
    emoji: "🧶", price: "₹350/metre", badge: null,
    desc: "Traditional Chettinad weave with distinctive checks and bright colour combinations.",
    tags: ["Chettinad", "Checks", "Traditional", "Tamil Nadu"]
  },
  {
    id: 18, name: "Kalamkari Block Print", category: "handloom",
    emoji: "🖌️", price: "₹240/metre", badge: "Artisan",
    desc: "Hand-painted kalamkari with mythological and floral motifs on cotton base. Each piece is unique.",
    tags: ["Kalamkari", "Hand-Painted", "Floral", "Unique"]
  },

  // ---- DRESS MATERIAL ----
  {
    id: 19, name: "Anarkali Dress Material Set", category: "dress-material",
    emoji: "👘", price: "₹850/set", badge: "Combo",
    desc: "3-piece set: top, bottom and dupatta fabric. Ready-to-stitch anarkali suit material with embroidery.",
    tags: ["3-Piece Set", "Anarkali", "Embroidery", "Dupatta"]
  },
  {
    id: 20, name: "Patiala Salwar Set", category: "dress-material",
    emoji: "👗", price: "₹600/set", badge: null,
    desc: "Comfortable Patiala suit material in cotton and rayon options. Available in 25+ prints and colours.",
    tags: ["Patiala", "Cotton", "Rayon", "Casual"]
  },
  {
    id: 21, name: "Kurti Fabric Roll", category: "dress-material",
    emoji: "🥿", price: "₹150/metre", badge: "Value",
    desc: "Versatile kurti fabric in rayon, cotton and crepe. Perfect for casual and semi-formal kurtis.",
    tags: ["Kurti", "Rayon", "Casual", "Semi-Formal"]
  },

  // ---- BLOUSE PIECE ----
  {
    id: 22, name: "Brocade Blouse Piece", category: "blouse",
    emoji: "🌺", price: "₹350/piece", badge: "Wedding Special",
    desc: "Rich brocade blouse piece with gold/silver zari work. Matches Kanjivaram and Banarasi sarees perfectly.",
    tags: ["Brocade", "Zari", "Wedding", "Gold"]
  },
  {
    id: 23, name: "Velvet Blouse Material", category: "blouse",
    emoji: "🍷", price: "₹280/piece", badge: null,
    desc: "Soft velvet blouse fabric for festive wear. Available in jewel tones — maroon, navy, emerald.",
    tags: ["Velvet", "Festive", "Jewel Tones"]
  },
  {
    id: 24, name: "Embroidered Net Blouse Piece", category: "blouse",
    emoji: "🌸", price: "₹320/piece", badge: "Trending",
    desc: "Delicate net fabric with embroidered flowers and stones. Perfect for party and bridal blouses.",
    tags: ["Net", "Embroidered", "Stones", "Bridal"]
  }
];
