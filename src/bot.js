const { Telegraf } = require('telegraf')
const BOT_TOKEN = process.env.TOKEN
const domain = process.env.DOMAIN
const webhookPath = `/mysuperpath`
const bot = new Telegraf(BOT_TOKEN)

bot.telegram.setWebhook(domain + webhookPath)
  .then(console.log)

// const handlers = require('./handlers')
// const { commandArgs } = require('./plugins')

// bot.use(commandArgs())
// bot.use(handlers)

bot.on("text", async (ctx) => {
    console.log(ctx.update)
    ctx.reply("Цыган лох, но этот момент великий")
})

bot.catch(error => {
  console.log(error)
})

module.exports = { bot }