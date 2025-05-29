const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve car_price.html as the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'car_price.html'));
});

// Format number to Rupiah
function formatToRupiah(number) {
    // Convert dollar amount to Rupiah (1 USD = Rp 16,000)
    const USD_TO_IDR_RATE = 16000;
    
    // Convert the dollar amount (e.g., 12.50 means $12,500) to actual dollars first
    const actualDollarAmount = number * 1000;
    
    // Convert to Rupiah
    const rupiahAmount = actualDollarAmount * USD_TO_IDR_RATE;
    
    // Round to nearest whole number
    const normalizedNumber = Math.round(rupiahAmount);
    
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true
    }).format(normalizedNumber);
}

app.post('/api/predict', (req, res) => {
    const pythonProcess = spawn('python', ['predict_car_price.py']);
    let dataString = '';

    pythonProcess.stdout.on('data', (data) => {
        dataString += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        try {
            const result = JSON.parse(dataString);
            if (result.error) {
                res.status(500).json({ error: result.error });
            } else {
                // Convert the predicted price (in dollars) to Rupiah
                const price = parseFloat(result.predicted_price);
                const formattedPrice = formatToRupiah(price);
                res.json({ predicted_price_rupiah: formattedPrice });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to process prediction' });
        }
    });

    pythonProcess.stdin.write(JSON.stringify(req.body));
    pythonProcess.stdin.end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 