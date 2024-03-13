const express = require('express');
const { Bot } = require('grammy');

const app = express();
const port = 3000;

app.use(express.json());

const bots = {};

// Маршрут для обработки обновлений от Telegram
app.post('/webhook/:botToken', async (req, res) => {
    const botToken = req.params.botToken;
    const bot = bots[botToken];

    if (!bot) {
        return res.status(404).json({ error: 'Bot not found.' });
    }

    try {
        await bot.handleUpdate(req.body);
        console.log('Update handled successfully'); // Лог об успешной обработке обновления
        res.sendStatus(200); // Отправляем успешный статус клиенту
    } catch (error) {
        console.error('Error handling update:', error);
        res.sendStatus(500);
    }
});

// Маршрут для добавления нового бота
app.post('/addBot', async (req, res) => {
    const newBotToken = req.body.token;

    if (!newBotToken) {
        return res.status(400).json({ error: 'Bot token is required.' });
    }

    if (bots[newBotToken]) {
        return res.status(409).json({ error: 'Bot with this token already exists.' });
    }

    try {
        const bot = new Bot(newBotToken);
        bots[newBotToken] = bot;

        // Установите вебхук для этого бота
        await bot.api.setWebhook(`https://your-domain.com/webhook/${newBotToken}`);

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
