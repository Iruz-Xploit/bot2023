const cheerio = require("cheerio")
const axios = require("axios")

async function capcut() {
var $ = await cheerio.load(await (await axios(arguments[0])).data);
return {
nama: $("img").attr("alt"),
used: $("b").text().replace($("img").attr("alt"), ""),
thumbnail: $("img").attr("src"),
video: $("video").attr("src"),
};
}
module.exports.capcut = capcut