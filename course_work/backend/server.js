const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB підключено"))
  .catch((err) => console.error("❌ Помилка підключення:", err));

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }, // Додано поле опису
    color: { type: String, required: true }, // Додано поле кольору
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "Продукти не знайдені" });
    }
    res.json(products);
  } catch (err) {
    console.error("Помилка на сервері:", err);
    res.status(500).json({ message: "Помилка на сервері", error: err.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "Продукти не знайдені" });
    }
    res.json(products);
  } catch (err) {
    console.error("Помилка на сервері:", err);
    res.status(500).json({ message: "Помилка на сервері", error: err.message });
  }
});


app.post("/products", async (req, res) => {
  const { name, price, image, description, color } = req.body;

  // Перевірка на наявність усіх обов'язкових полів
  if (!name || !price || !image || !description || !color) {
    return res.status(400).json({ message: "Усі поля є обов'язковими" });
  }

  try {
    const product = new Product({ name, price, image, description, color });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error("Помилка при додаванні товару:", err);
    res.status(500).json({ message: "Помилка при додаванні товару", error: err.message });
  }
});
const User = require('./models/User'); // Імпортуємо модель

app.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "Усі поля є обов'язковими" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Користувач вже існує" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "Користувача успішно зареєстровано" });
  } catch (err) {
    console.error("Помилка при реєстрації:", err);
    res.status(500).json({ message: "Помилка при реєстрації", error: err.message });
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Усі поля є обов'язковими" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Невірний email або пароль" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Невірний email або пароль" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error("Помилка при вході:", err);
    res.status(500).json({ message: "Помилка при вході", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Сервер працює на порті ${PORT}`));
