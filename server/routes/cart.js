const express = require("express");
const router = express.Router();

let cart = [];

router.get("/", (req, res) => {
  res.json(cart);
});

router.post("/add", (req, res) => {
  const product = req.body;
  cart.push(product);
  res.json({ message: "Added to cart", cart });
});

router.post("/remove", (req, res) => {
  const { id } = req.body;
  cart = cart.filter(item => item.id !== id);
  res.json({ message: "Removed from cart", cart });
});

module.exports = router;
