const { Client } = require("@notionhq/client")
const fs = require('fs');
const { finished } = require("stream");

const notion = new Client({
    auth : "your notion integration token"
})

;(async() => {

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;

    console.log(formattedToday);

    let tweets=[];

    const res = await notion.databases.query({
        database_id: "0bf52ee93bbf4bdfb0a1ab0071c4ffe9",
            "filter": {
                "property": "Dates",
                "date": {
                    "equals": formattedToday
                }
            }
    })

    res.results.forEach(element =>{
    console.log(element.properties.Tweet.rich_text[0].plain_text)
    tweets.push(element.properties.Tweet.rich_text[0].plain_text)
});
// for (var i in tweets)
// {
//     console.log(tweets[i])
// };

// const data=JSON.stringify(tweets,null,2);
// fs.writeFile('tweets.json',data,finished);

const saveData = (data) => {
    const finished=(error) => {
        if (error){
            console.log(error)
            return;
        }
    }
    const jsondata=JSON.stringify(data,null,2)
    fs.writeFile('jsondata.json',jsondata,finished)
}

saveData(tweets);
console.log("The program has ended");
})()