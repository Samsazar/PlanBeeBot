const { Telegraf } = require('telegraf')
const { db } = require("./database")
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
    ctx.replyWithHTML("Привет, я твой главный друг по тайм-менеджменту. Присылай мне свои заметки, планы, важные события - я все сохраню, а потом наглядно покажу)")
    
})

bot.catch(error => {
  console.log(error)
})

module.exports = { bot }