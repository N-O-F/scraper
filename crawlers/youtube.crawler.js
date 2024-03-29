const ytsr = require("ytsr");
const {english_date_converter} = require("../helpers/timers");
const crypto = require("crypto");
const randomuid = (length)=>{
  return crypto.randomBytes(length).toString("hex");
}

const countChars = (string, char) => {
  return string.split("").filter((each) => each === char).length;
};

const timeConverter = (time) => {
  if (time) {
    let dots = countChars(time, ":");
    let hours = 0,
      minutes = 0,
      seconds = 0;
    if (dots == 2) {
      hours = parseInt(time.substring(0, time.indexOf(":")));
      minutes = parseInt(
        time.substring(time.indexOf(":") + 1, time.lastIndexOf(":"))
      );
    }
    if (dots == 1) {
      minutes = time.substring(0, time.indexOf(":"));
    }

    if (time.length >= 1)
      seconds = parseInt(time.substring(time.lastIndexOf(":") + 1));
    let total = hours * 60 + minutes * 60 + seconds;
    return total;
  } else {
    return 0;
  }
};

module.exports = async (title) => {
  let search;
  try {
    search = await ytsr(title, { pages: 1 });
  } catch (e) {
    console.error(e, "WHILE GETTING VIDEO INFO");
  }

  if (search.items.length == 0) return [];
  return search.items.map((each) => {
    let newAuthor = { ...each.author };
    newAuthor["url"] = newAuthor.bestAvatar ? newAuthor["bestAvatar"].url : "";
    delete newAuthor.bestAvatar;
    delete newAuthor.avatars;
    return {
      id: randomuid(14),
      author: newAuthor,
      searchWord:title,
      source:"youtube",
      video: {
        title: each.title,
        url: each.url,
        img: each.bestThumbnail ? each.bestThumbnail.url : "",
        badges: each.badges,
        desc: each.description,
        views: each.views,
        publishedOn: english_date_converter(each.uploadedAt),
        desc:"",
        watchTime: timeConverter(each["duration"]),
      },
    };
    return each;
  });
};
