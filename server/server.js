const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ### MIDDLEWARE ###
app.use(cors());
app.use(express.json());

// #################################################################
// ###                  MOCK DATABASE (SAMPLE DATA)              ###
// #################################################################

let products = [
  { id: '1', name: 'Whey Protein', price: 49.99, originalPrice: 60.00, image: 'https://images.unsplash.com/photo-1579758629938-03607ccDBaba?q=80&w=800', rating: 5, reviews: 112, category: 'Supplements', isSale: true, isNew: false, description: 'High-quality whey protein for muscle growth.', stock: 100, sku: 'WP-100' },
  { id: '2', name: 'Pre-Workout', price: 34.99, image: 'https://images.unsplash.com/photo-1632295619934-a2d3a1236108?q=80&w=800', rating: 4, reviews: 98, category: 'Supplements', isSale: false, isNew: true, description: 'Explosive energy for your workouts.', stock: 75, sku: 'PW-200' },
  { id: '3', name: 'Performance Tee', price: 29.99, image: 'https://images.unsplash.com/photo-1593493489185-83e4141b7125?q=80&w=800', rating: 5, reviews: 204, category: 'Sportswear', isSale: false, isNew: true, description: 'Lightweight and breathable for any activity.', stock: 120, sku: 'ST-300' },
  { id: '4', name: 'Creatine Monohydrate', price: 24.99, image: 'https://images.unsplash.com/photo-1614928228253-dc086241d7c3?q=80&w=800', rating: 5, reviews: 310, category: 'Supplements', isSale: false, isNew: false, description: 'Pure creatine for strength and power.', stock: 150, sku: 'CM-400' },
  { id: '5', name: 'Running Shorts', price: 45.00, image: 'https://images.unsplash.com/photo-1591195853828-11db59a43f65?q=80&w=800', rating: 4, reviews: 150, category: 'Sportswear', isSale: false, isNew: false, description: 'Comfortable shorts for long runs.', stock: 90, sku: 'RS-500' },
  { id: '6', name: 'Multivitamins', price: 19.99, originalPrice: 25.00, image: 'https://images.unsplash.com/photo-1607620839355-72a197fc4723?q=80&w=800', rating: 5, reviews: 188, category: 'Supplements', isSale: true, isNew: false, description: 'Complete daily vitamins for overall health.', stock: 200, sku: 'MV-600' },
];

const categories = [
    { id: "supplements", title: "Supplements", description: "Premium nutrition for peak performance", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200", products: "150+ Products", color: "primary" },
    { id: "sportswear", title: "Sportswear", description: "High-performance athletic apparel", image: "https://images.unsplash.com/photo-1552674605-db6ffd402907?q=80&w=1200", products: "200+ Products", color: "accent" },
];

const testimonials = [
    { id: "1", name: "Marcus Johnson", role: "Professional Bodybuilder", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", content: "FitStore's supplements have been a game-changer for my training...", rating: 5 },
    { id: "2", name: "Sarah Williams", role: "Fitness Trainer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face", content: "I recommend FitStore to all my clients...", rating: 5 },
    { id: "3", name: "David Chen", role: "CrossFit Athlete", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", content: "Fast shipping, premium quality...", rating: 5 },
];

// #################################################################
// ###                       API ROUTES                          ###
// #################################################################

// --- AUTH ---
app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    // In a real app, you'd generate a JWT here
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});


// --- PRODUCTS (CRUD) ---

// READ all products (GET)
app.get("/api/products", (req, res) => {
    res.json(products);
});

// READ a single product by ID (GET)
app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send("Product not found");
    }
});

// CREATE a new product (POST)
app.post("/api/products", (req, res) => {
    const newProduct = {
      id: Date.now().toString(), // Simple unique ID
      rating: 5, // Default rating
      reviews: 0, // Default reviews
      ...req.body,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// UPDATE a product by ID (PUT)
app.put("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
        // Update the product
        products[productIndex] = { ...products[productIndex], ...req.body };
        res.json(products[productIndex]);
    } else {
        res.status(404).send("Product not found");
    }
});

// DELETE a product by ID (DELETE)
app.delete("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const initialLength = products.length;
    products = products.filter(p => p.id !== productId);

    if (products.length < initialLength) {
        res.status(204).send(); // Success, no content to send back
    } else {
        res.status(404).send("Product not found");
    }
});


// --- CATEGORIES & TESTIMONIALS ---
app.get("/api/categories", (req, res) => res.json(categories));
app.get("/api/testimonials", (req, res) => res.json(testimonials));


// #################################################################
// ###         STATIC FILE SERVING & REACT ROUTER FALLBACK       ###
// #################################################################

const reactBuildPath = path.join(__dirname, "..", "client", "dist");
app.use(express.static(reactBuildPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

// ### START SERVERs ###
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});