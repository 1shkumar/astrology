// server.js (or your Express.js server file)

const express = require('express');
const bodyParser = require('body-parser');
const calculateKundliScore = require('./kundliCalculator'); 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


function compareKundli(boyDOB, girlDOB) {
    
    const boyKundliScore = calculateKundliScore(boyDOB);
    const girlKundliScore = calculateKundliScore(girlDOB);

    
    const compatibilityScore = (boyKundliScore + girlKundliScore) / 2;

    return compatibilityScore;
}

app.post('/matchmaking', (req, res) => {
   
    const { boyDOB, girlDOB } = req.body;

    
    const compatibilityScore = compareKundli(boyDOB, girlDOB);

    
    res.json({ compatibilityScore });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
