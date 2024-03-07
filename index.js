const TelegramBot = require('node-telegram-bot-api');

const token = "7113832457:AAHgmg_zEGBLNwcWxlLDYlNoYgElBaghrQI"

const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'Welcome message'},
    {command: '/info', description: 'Information about bot'}
]);

bot.on('message', async msg => {
    console.log(msg);
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
       await bot.sendMessage(chatId, 'Welcome to pleep', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Google', web_app: {url: 'https://www.google.com'}}],
            ]
        }
       });
    }
    if (text === '/info') {
       await bot.sendMessage(chatId, `Pleep is universal chatbot ${msg.from.first_name}!`);
    }

    bot.sendMessage(chatId, `Received your message ${msg.text}`);
});