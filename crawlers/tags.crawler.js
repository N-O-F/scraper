const puppeteer = require("puppeteer");

module.exports = async (topic) => {
  const URL = `https://medium.com/search?q=${topic}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);

  const tags = await page.evaluate(() => {
    if (!document.getElementsByClassName("tags tags--postTags tags--light"))
      return [];
    return Array.from(
      document.getElementsByClassName("tags tags--postTags tags--light")
    ).map((each) => {
      return Array.from(each.getElementsByTagName("a")).map((eachLink) => {
        return {
          url: eachLink.getAttribute("href"),
          tag: eachLink.innerText,
        };
      });
    });
  });
  if(tags && tags.length>0)
    return tags[0]; // to avoid array of array structure
  else
    return [];
};
