const express =require('express');

const {handleGenerateNewShortUrl,redirectShortUrl} =require('../controllers/url');
const router =express.Router();

router.post('/',handleGenerateNewShortUrl);
router.get("/:shortId",redirectShortUrl);
module.exports =router