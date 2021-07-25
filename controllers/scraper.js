const mediumCrawler = require("../crawlers/medium.crawler");
const youtubeCrawler = require("../crawlers/youtube.crawler");

const scrapeTags = require("../crawlers/tags.crawler");

const SITES = {
  medium: { crawler: mediumCrawler, url: "https://medium.com" },
  youtube: { crawler: youtubeCrawler, url: "https://youtube.com" },
};
exports.SCRAPE = async (req, res, next) => {
  let scrapeFrom = req.params.site;
  let title = req.query.title;
  console.log(req.params);
  if (!scrapeFrom) return res.sendStatus(400);
  scrapeFrom = scrapeFrom.toLowerCase();
  if (!(scrapeFrom in SITES)) return res.sendStatus(400);
  let currentCrawler;
  try {
    currentCrawler = SITES[scrapeFrom];
  } catch (err) {
    console.error("Wrong scrapeFrom passed", scrapeFrom);
    res.sendStatus(400);
  }
  let results = await currentCrawler.crawler(title);
  res.json({
    articles: results,
    searchWord: title,
    source: { title: scrapeFrom, url: currentCrawler.url },
  });
};

exports.SCRAPE_TAGS = async (req, res) => {
  const topic = req.query.topic;
  if (!topic) return res.sendStatus(400);
  const tags = await scrapeTags(topic);
  res.json({ tags });
};
