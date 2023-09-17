const cheerio = require('cheerio');
console.log('running!');
async function acm() {
    const url = 'https://dl.acm.org/action/doSearch?fillQuickSearch=false&target=advanced&expand=all&AllField=AllField%3A%28%28%22Public+Safety%22+OR+%22First+Resp*%22+OR+%22Firefight*%22+OR+%22Polic*%22+OR+%22EMS%22+OR+%22Law+enforc*%22+OR+%22Emerg*+Med*+Serv*%22+OR+%22Emerg*+Resp*%22%29+AND+%28%22AR%22+OR+%22Mixed+Realit*%22+OR+%22Extend*+Realit*%22+OR+%22Wearable+Comput*%22+OR+%22Heads-Up+Display*%22+OR+%22HUD%22+OR+%22augmented+reality%22%29%29&startPage=0&pageSize=50&AfterYear=2010&BeforeYear=2023&queryID=10/6079855452';

    const page = await fetch(url);
    const html = await page.text();

    const $ = cheerio.load(html);
    $('issue-item__title span a').forEach((e) => {
        console.log(e);
    });
}

acm();