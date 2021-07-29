const puppeteer = require("puppeteer");
const crypto = require("crypto");
const randomuid = (length)=>{
  return crypto.randomBytes(length).toString("hex");
}

module.exports =   async (titleWord) => {
  const MEDIUM_URL = `https://medium.com/search?q=${titleWord}`;
  const SEARCH_BUTTON = "search";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(MEDIUM_URL);
  // console.log(page)
  const articles2 = await page.evaluate(() => {
    let data = Array.from(
      document.getElementsByClassName(
        "postArticle postArticle--short js-postArticle js-trackPostPresentation"
      )
    )
    let output = [];
    data.forEach((card)=>{
      try{
        const removeTail = (link, delimiter = "?") => {
          return link.substring(0, link.indexOf(delimiter));
        };
        const convertNumber = (number) => {
          if(!number) return 0;
          if (number.endsWith("K"))
            return parseInt(removeTail(number, "K")) * 1000;
          else return parseInt(number);
        };
        
        let authorData = card.querySelector(".avatar-image");
        authorData = authorData ? authorData.getAttribute("src") : "";
        let authorUrl = card.querySelector(".link");
        authorUrl = authorUrl ? authorUrl.getAttribute("href") : "";
        let authorInfoDiv = card.querySelector(".postMetaInline-authorLockup");
        let linkElems = Array.from(authorInfoDiv.getElementsByTagName("a")).map(
          (link) => link.href
        );
        let info = {};
        if (linkElems.length > 0)
          info = { articleUrl: removeTail(linkElems[linkElems.length - 1]) };
        else {
          info = { articleUrl: "" };
        }
        let readingTime = authorInfoDiv.querySelector(".readingTime");
        readingTime = readingTime ? readingTime.getAttribute("title") : "";
  
        let publishedOn = authorInfoDiv.getElementsByTagName("time");
        publishedOn = publishedOn.length > 0 ? publishedOn[0].dateTime : null;
  
        let detailedArticle = card.querySelector(".section-content");
        let img = detailedArticle.getElementsByTagName("img");
        img = img.length > 0 ? img[0].getAttribute("src") : "";
        let title = detailedArticle.getElementsByTagName("h3");
        title = title.length > 0 ? title[0].textContent : "";
        let claps = card.querySelector(".js-multirecommendCountButton");
        claps = claps ? claps.textContent : null;
        output.push({
          author: {
            img: authorData,
            profile: authorUrl,
          },
          article: {
            url: info.articleUrl,
            readingTime: parseInt(removeTail(readingTime, " ")) * 60,
            publishedOn,
            img,
            title,
            likes: convertNumber(claps),
            desc:""
          },
        })
      }catch(err){
        console.error(err)
      }
    })
    return output;
      
  });
  articles2.forEach(article=>{
    article["author"]["id"] = randomuid(6);
    article["id"] = randomuid(14);
    article["searchWord"] = titleWord;
    article["source"] = "medium"
  })
  return articles2;
  //   const articles = await page.evaluate(() => {
  //     let a = Array.from(document.getElementsByClassName("section-content")).map(
  //       (each) => {
  //         try {
  //           let heading = each.getElementsByTagName("h3");
  //           heading = heading.length ? heading[0].innerText:"";
  //           let desc = each.getElementsByTagName("h4");
  //           desc = desc.length>0 ? desc[0].innerText : "";
  //           let image = each.getElementsByTagName("img");
  //           image = image.length ? image[0].getAttribute("src"):"";
  //           return { article:{heading, desc, image},publisher:{} };
  //         } catch (err) {
  //           console.error(err);
  //           return {err};
  //         }
  //       }
  //     );
  //     return a;
  //   });
  //   // let first = articles[0];
  //   console.log(articles);
  // await page.click(`input`);
  // await page.type("#"+SEARCH_BUTTON,"react",{delay:100});
  // await page.keyboard.press("Enter");
  // console.log(page)
};
