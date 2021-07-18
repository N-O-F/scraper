# Bundler Scraper


This is the core scraper which powers bundler. It follows simple MVC coding pattern with splitted cralwers.

**Crawler:** These are the entities which scraped website. Each crawler is designed to scrape a particular website. We have different crawlers like youtube.crawler and medium.crawler

#### The Endpoints

```
http://localhost:5000/api/v1/{crawlerName}?title={searchPhrase}
```

**Mock Requests**

```
http://localhost:5000/api/v1/scrape/medium?title=arts
```

```
{
    "articles": [
        {
            "author": {
                "img": "https://cdn-images-1.medium.com/fit/c/72/72/1*2Whw_0yDRKM_dIhO4iqu6Q.png",
                "profile": "https://medium.com/@uniartsnetwork",
                "id": "99e8483d590d"
            },
            "article": {
                "url": "https://medium.com/@uniartsnetwork/uni-arts-cross-chain-nft-auction-house-96c52007bd1",
                "readingTime": 120,
                "publishedOn": "2021-03-03T11:16:48.977Z",
                "img": "https://cdn-images-1.medium.com/fit/t/1600/480/1*IHFtz3KuCVnD2QIRyFEh7Q.png",
                "title": "Uni-Arts: Cross-Chain NFT Auction House",
                "likes": 27000,
                "id": "0d1ff0c8e48763ef670e8cba5366"
            }
        },
	...
    ],
    "searchWord": "arts",
    "source": {
        "title": "medium",
        "url": "https://medium.com"
    }
}
```

For complete mock up requests checkout the shared [Postman collection](https://drive.google.com/file/d/1v8lSVR8RXQiIFht-0NFUG6a5cYHoNv1n/view?usp=sharing).
