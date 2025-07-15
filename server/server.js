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

const products = [
  { id: '1', name: 'Whey Protein', price: 49.99, originalPrice: 60.00, image: 'https://images.unsplash.com/photo-1579758629938-03607ccDBaba?q=80&w=800', rating: 5, reviews: 112, category: 'Supplements', isSale: true, isNew: false },
  { id: '2', name: 'Pre-Workout', price: 34.99, image: 'https://images.unsplash.com/photo-1632295619934-a2d3a1236108?q=80&w=800', rating: 4, reviews: 98, category: 'Supplements', isSale: false, isNew: true },
  { id: '3', name: 'Performance Tee', price: 29.99, image: 'https://images.unsplash.com/photo-1593493489185-83e4141b7125?q=80&w=800', rating: 5, reviews: 204, category: 'Sportswear', isSale: false, isNew: true },
  { id: '4', name: 'Creatine Monohydrate', price: 24.99, image: 'https://images.unsplash.com/photo-1614928228253-dc086241d7c3?q=80&w=800', rating: 5, reviews: 310, category: 'Supplements', isSale: false, isNew: false },
  { id: '5', name: 'Running Shorts', price: 45.00, image: 'https://images.unsplash.com/photo-1591195853828-11db59a43f65?q=80&w=800', rating: 4, reviews: 150, category: 'Sportswear', isSale: false, isNew: false },
  { id: '6', name: 'Multivitamins', price: 19.99, originalPrice: 25.00, image: 'https://images.unsplash.com/photo-1607620839355-72a197fc4723?q=80&w=800', rating: 5, reviews: 188, category: 'Supplements', isSale: true, isNew: false },
];

const categories = [
    { id: "supplements", title: "Supplements", description: "Premium nutrition for peak performance", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200", products: "150+ Products", color: "primary" },
    { id: "sportswear", title: "Sportswear", description: "High-performance athletic apparel", image: "https://images.unsplash.com/photo-1552674605-db6ffd402907?q=80&w=1200", products: "200+ Products", color: "accent" },
];

const testimonials = [
    { id: "1", name: "Marcus Johnson", role: "Professional Bodybuilder", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", content: "FitStore's supplements have been a game-changer for my training. The quality is unmatched and results speak for themselves.", rating: 5 },
    { id: "2", name: "Sarah Williams", role: "Fitness Trainer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face", content: "I recommend FitStore to all my clients. Their sportswear is comfortable, durable, and actually enhances performance.", rating: 5 },
    { id: "3", name: "David Chen", role: "CrossFit Athlete", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", content: "Fast shipping, premium quality, and excellent customer service. This is where serious athletes shop.", rating: 5 },
];

// #################################################################
// ###                       API ROUTES                          ###
// #################################################################
// These routes MUST be placed BEFORE the React Router fallback below

// GET all products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// GET a single product by ID
app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send("Product not found");
    }
});

// GET all categories
app.get("/api/categories", (req, res) => {
    res.json(categories);
});

// GET all testimonials
app.get("/api/testimonials", (req, res) => {
    res.json(testimonials);
});

// #################################################################
// ###         STATIC FILE SERVING & REACT ROUTER FALLBACK       ###
// #################################################################

// Define the path to the React build folder
const reactBuildPath = path.join(__dirname, "..", "client", "dist"); // Use "dist" for Vite, "build" for Create React App

// Serve static files from the React app
app.use(express.static(reactBuildPath));

// The "catch-all" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

// ### START SERVER ###
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});