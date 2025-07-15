const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve React build folder
const reactBuildPath = path.join(__dirname, "..", "client", "build");
app.use(express.static(reactBuildPath));

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// React Router fallback — send index.html on all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
