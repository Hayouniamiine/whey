const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve React static files
const reactBuildPath = path.join(__dirname, "..", "client", "build");
app.use(express.static(reactBuildPath));

// Sample products data (replace with your DB later)
const products = [
  { id: 1, name: "Whey Protein Vanilla", price: 29.99, category: "supplements" },
  { id: 2, name: "Whey Protein Chocolate", price: 31.99, category: "supplements" },
  { id: 3, name: "Sport T-Shirt", price: 19.99, category: "sportswear" },
];

// API route to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// API route to get products by category
app.get("/api/products/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const filtered = products.filter(p => p.category === category);
  res.json(filtered);
});

// API route to get a product by id
app.get("/api/product/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});

// Add your other API routes here...

// React Router fallback — send index.html on all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
