const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const callBackendAPI = async () => {
    const response = await fetch("https://api.porssisahko.net/v1/latest-prices.json");
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
};

app.get('/get_prices', (req, res) => {
    console.log("get prices");
    callBackendAPI().then((data) => {
        console.log(JSON.stringify(data));
        return res.send({ data: data });
    }).catch((error) => {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    });
});
