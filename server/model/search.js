import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
const apikey = process.env.STIPOP_API_KEY;

const searchTrending = async(userId, lang, countryCode) => {
    const searchTrendingUrl = `https://messenger.stipop.io/v1/search/keyword?userId=${userId}&lang=${lang}&countryCode=${countryCode}`;
    const response = await fetch(searchTrendingUrl, { headers: { apikey: apikey } });
    const data = await response.json();
    const { keywordList } = data.body;
    const keywordArr = keywordList.map(({ keyword }) => keyword);
    // console.log(keywordArr);
    return keywordArr;
};

export {
    searchTrending
};