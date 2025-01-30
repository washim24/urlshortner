
const shortid =require('shortid');
const URL =require('../models/url');


async function handleGenerateNewShortUrl(req,res) {
        const shortId =shortid();
        const body =req.body;
        if(!body.url) return res.status(400).json({ error:'url is required'});
        await URL.create({
            shortId:shortId,
            redirectUrl:body.url,
            visitedHistory:[]
        });

        // return res.json({ id: shortId});
        return res.render('home',{
            id:shortId
        })
}


async function redirectShortUrl(req,res) {
    const shortId =req.params.shortId;
    const entry = await URL.findOneAndUpdate({
         shortId
     },
     {
         $push:{
             visitHistory:{
                 timestamp:Date.now()
             }
         }
     });

     if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }
     res.redirect(entry.redirectUrl);
}

module.exports ={
    handleGenerateNewShortUrl,
    redirectShortUrl
}