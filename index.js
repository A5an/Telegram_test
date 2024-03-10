// const TelegramBot = require('node-telegram-bot-api');

// const token = "7113832457:AAHgmg_zEGBLNwcWxlLDYlNoYgElBaghrQI"
// const token2 = "5878486474:AAG9jGAbYuUfqynJDRewyltHUGTEFYh_iaU"

// const bot = new TelegramBot(token, {polling: true});
// const bot2 = new TelegramBot(token2, {polling: true});

// async function handleMessage(bot, msg) {
//     console.log(msg);
//     const text = msg.text;
//     const chatId = msg.chat.id;

//     if (text === '/start') {
//        return bot.sendMessage(chatId, 'Welcome to pleep', {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: 'Pleep', web_app: {url: 'https://pleep.app//chat/ac0bb767-2949-4038-955d-0b637ea114bc'}}],
//             ]
//         }
//        });
//     }
//     if (text === '/info') {
//         return bot.sendMessage(chatId, `Pleep is universal chatbot ${msg.from.first_name}!`);
//     }

//     return bot.sendMessage(chatId, `Received your message ${msg.text}`);
// }

// async function setBotCommands(bot, commands) {
//     try {
//         await bot.setMyCommands(commands);
//         console.log('Bot commands set successfully:', commands);
//     } catch (error) {
//         console.error('Error setting bot commands:', error);
//     }
// }

// // Пример использования функции setBotCommands для установки команд бота
// const commands = [
//     { command: '/start', description: 'Welcome message' },
//     { command: '/info', description: 'Information about bot' }
// ];

// setBotCommands(bot, commands);

// bot2.setMyCommands([
//     {command: '/start', description: 'Welcome message Easy life'},
//     {command: '/info', description: 'Information about bot'}
// ]);

// bot.on('message', async (msg) => {
//     await handleMessage(bot, msg);
// });


// bot2.on('message', async msg => {
//     console.log(msg);
//     const text = msg.text;
//     const chatId = msg.chat.id;

//     if (text === '/start') {
//         return bot2.sendMessage(chatId, 'Welcome to pleep', {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: 'Pleep', web_app: {url: 'https://pleep.app//chat/ac0bb767-2949-4038-955d-0b637ea114bc'}}],
//             ]
//         }
//        });
//     }
//     if (text === '/info') {
//         return bot2.sendMessage(chatId, `Pleep is universal chatbot ${msg.from.first_name}!`);
//     }

//     bot2.sendMessage(chatId, `Received your message ${msg.text}`);
// });

const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000;

app.use(express.json());

let count = 0;
// Роут для добавления нового бота
app.post('/addBot', async (req, res) => {
    const newBotToken = req.body.token; // Получаем токен нового бота из запроса
    if (!newBotToken) {
        return res.status(400).json({ error: 'Bot token is required.' });
    }

    try {
        count++;
        // Создаем новый экземпляр бота
        const bot = new TelegramBot(newBotToken, { polling: true });

        bot.setMyCommands([
            //     {command: '/start', description: 'Welcome message Easy life'},
            //     {command: '/info', description: 'Information about bot'}
            // ]);

        bot.on('message', async msg => {
            console.log(msg);
            const text = msg.text;
            const chatId = msg.chat.id;
        
            if (text === '/start') {
               return bot.sendMessage(chatId, `Welcome to pleep ${count}`, {
                reply_markup: {
                    inline_keyboard: [
                        [{text: 'Pleep', web_app: {url: 'https://pleep.app//chat/ac0bb767-2949-4038-955d-0b637ea114bc'}}],
                    ]
                }
               });
            }
            if (text === '/info') {
                return bot.sendMessage(chatId, `Pleep is universal chatbot ${msg.from.first_name}!`);
            }
        
            return bot.sendMessage(chatId, `Received your message ${msg.text}`);
            });

        console.log(`New bot with token ${newBotToken} added successfully.`);
        return res.status(200).json({ message: 'Bot added successfully.' });
    } catch (error) {
        console.error('Error adding new bot:', error);
        return res.status(500).json({ error: 'Error adding new bot.' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
