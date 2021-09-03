// packages needed in this file
const express = require('express');
const shortid = require('shortid');
const validUrl = require('valid-url');
const { baseUrl } = require('../config/config');

//express routes handler
const router = express.Router();

router.post('/shortener', async (req, res) => {
    let {
        longUrl,
        urlCode = undefined
    } = req.body

    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    // if valid, we create the url code
    if (!urlCode) {
        urlCode = shortid.generate()
    }

    // check long url if valid using the validUrl.isUri method
    if (validUrl.isUri(longUrl)) {
        let url = findLongUrl();
        // si url existe, devuelve url
        //si url no existe, guarda url y shortURL o urlCode, devuelve urlCode
    } else {
        res.status(401).json('Invalid longUrl')
    }

    res.send(`Long: ${longUrl} urlCode: ${urlCode}`);
});

module.exports = router;

function findLongUrl(){
    //do something
};
