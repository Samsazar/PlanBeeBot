import mongo from "./database/initdb"
const { Telegraf } = require('telegraf')
// const { connect, User } = require("./database")
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

bot.command('db', async (msg) => msg.reply(mongo.db().databaseName))

bot.command("reg", async (ctx) => {
  console.log(ctx.update)
  const tgid = String(ctx.from.id);
  const name = ctx.from.first_name;
  connect();
  const newuser = new User({tgid, name});
  newuser
    .save()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  ctx.reply("Вы зареганы")
})

// bot.on("text", async (ctx) => {
//     console.log(ctx.update)
//     ctx.replyWithHTML("Привет, я твой главный друг по тайм-менеджменту. Присылай мне свои заметки, планы, важные события - я все сохраню, а потом наглядно покажу)")
// })

bot.command("start", (ctx) => {
  console.log(ctx.update)
  ctx.replyWithHTML("Привет, я твой главный друг по тайм-менеджменту. Присылай мне свои заметки, планы, важные события - я все сохраню, а потом наглядно покажу)")
})

// bot.getEvents().onCommand("start", [&bot](TgBot::Message::Ptr message) {
//   bot.getApi().sendMessage(message->chat->id, "Hi!");
// });


bot.catch(error => {
  console.log(error)
}) 

module.exports = { bot }