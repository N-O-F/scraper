const moment = require("moment");

exports.english_date_converter = (text)=>{
    //text will be like 3 months ago
    if(!text) {
        console.warn("undefined was passed to english date converter")
        return Date.now()
    }
    let values = text.split(" ");
    if (values.length < 3){
        console.warn(`got ${text} for text in english date converter`)
        return Date.now();
    }
    let int = parseInt(values[0]);
    let timePeriod = values[1];
    try{
         return moment(Date.now()).subtract(int,timePeriod).unix()
    }catch(err){
        console.error(err,"while converting time through english date converter");
    }

   
}

// console.log(english_date_converter("3 months ago"))