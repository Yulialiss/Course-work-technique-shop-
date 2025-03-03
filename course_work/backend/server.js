require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // дозволяє доступ тільки з порту 3000
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// Підключення до MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB підключено"))
    .catch(err => console.error("Помилка підключення:", err));

// Модель товару
const Product = mongoose.model("Product", new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
}));

// Отримати всі товари
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Помилка на сервері", error: err.message });
    }
});

// Додати товар
app.post("/products", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: "Помилка при додаванні товару", error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер працює на порті ${PORT}`));
