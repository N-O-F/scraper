const {craw_medium} = require("../crawler");
const SITES = ["medium"];
exports.SCRAPE = async (req,res,next)=>{
    let scrapeFrom = req.params.site;
    let title = req.query.title;
    console.log(req.params)
    if(!scrapeFrom) return res.sendStatus(400);
    if(!SITES.includes(scrapeFrom)) return res.sendStatus(400);

    let results = await craw_medium(title);
    res.json({articles:results,searchWord:title,source:{title:scrapeFrom,url:"https://medium.com"}})
}