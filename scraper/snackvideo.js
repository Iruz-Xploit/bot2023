const axios = require('axios');

async function scraperSnackVideo(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const regex = /<source src="(.*?)" type="video\/mp4"/g;
    const videoUrl = regex.exec(html)[1];
    return videoUrl;
  } catch (error) {
    console.log(error);
  }
}

module.exports = scraperSnackVideo;