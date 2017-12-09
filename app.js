const express = require('express');
const cors = require('cors');
const nexmo = require('nexmo');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const nexmoConfig = new nexmo({
  apiKey: 'YOUR-API-KEY',
  apiSecret: 'YOUR-API-SECRET',
});

const from = 'YOUR-VIRTUAL-NUMBER';
const to = 'YOUR-TO-NUMBER';

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log(req.body);
  nexmoConfig.message.sendSms(from, to, req.body.text, (err, responseData) => {
    if (err) console.log(err);
    res.json({
      success: true,
      response: responseData
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
