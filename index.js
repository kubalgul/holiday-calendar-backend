
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const holidays = [
    {
        country: 'Almanya',
        region: 'Berlin',
        date: '2024-01-01',
        holiday_type: 'Ulusal Tatil',
        name: 'Yılbaşı Günü',
    },
    {
        country: 'Almanya',
        region: 'Berlin',
        date: '2024-04-07',
        holiday_type: 'Dini Tatil',
        name: 'Paskalya Günü',
    },
    {
        country: 'Almanya',
        region: 'Berlin',
        date: '2024-08-23',
        holiday_type: 'Okul Tatil',
        name: 'Yaz Tatili',
    },
    {
        country: 'Almanya',
        region: 'Bavaria',
        date: '2024-10-03',
        holiday_type: 'Ulusal Tatil',
        name: 'Alman Birlik Günü',
    },
    {
        country: 'Almanya',
        region: 'Bavaria',
        date: '2024-01-01',
        holiday_type: 'Ulusal Tatil',
        name: 'Yılbaşı Günü',
    },
    {
        country: 'Almanya',
        region: 'Hamburg',
        date: '2024-01-01',
        holiday_type: 'Ulusal Tatil',
        name: 'Yılbaşı Günü',
    },
    {
        country: 'Almanya',
        region: 'Hamburg',
        date: '2024-05-18',
        holiday_type: 'Ulusal Tatil',
        name: 'Alman Birlik Günü',
    },
    {
        country: 'Almanya',
        region: 'Hamburg',
        date: '2024-06-15',
        holiday_type: 'Okul Tatil',
        name: 'Yaz Tatili',
    },
    {
        country: 'Almanya',
        region: 'Hesse',
        date: '2024-01-01',
        holiday_type: 'Ulusal Tatil',
        name: 'Yılbaşı Günü',
    },
    {
        country: 'Almanya',
        region: 'Hesse',
        date: '2024-04-07',
        holiday_type: 'Dini Tatil',
        name: 'Paskalya Günü',
    },
    {
        country: 'Almanya',
        region: 'Hesse',
        date: '2024-05-21',
        holiday_type: 'Okul Tatil',
        name: 'Yaz Tatili',
    },
];

app.get('/', (req, res) => {
    res.send('Merhaba, Express API\'si çalışıyor!');
});

// GET /holidays?country=Almanya&region=Berlin
app.get('/holidays', (req, res) => {
    const { country, region, holiday_type } = req.query;

    // Ülke ve bölgeye göre tatil filtreleme
    let filteredHolidays = holidays.filter((holiday) => {
        let matches = true;
        if (country && holiday.country !== country) {
            matches = false;
        }
        if (region && holiday.region !== region) {
            matches = false;
        }
        if (holiday_type && holiday.holiday_type !== holiday_type) {
            matches = false;
        }
        return matches;
    });

    res.json(filteredHolidays);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
