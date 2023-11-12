const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/search', async (req, res) => {
    const { proficiency, company } = req.body;
    const apiKey = '363559df21388c05b4d8fc58e6ccdf3e403a7e62'; // Replace with your actual API key

    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(`${proficiency} ${company} tech guide`)}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data.items);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
