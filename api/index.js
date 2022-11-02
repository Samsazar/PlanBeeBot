const express = require("express");
const app = express();
const product = require("./product");
const { bot } = require('../src/bot')
const webhookPath = `/mysuperpath`

// ошибка в чтении токена
app.use(express.json({ extended: false }));
app.use("/api/product", product);

app.use(bot.webhookCallback(webhookPath));

app.get("/", async (req, res) => {
    try {
      res.send("bombino");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));