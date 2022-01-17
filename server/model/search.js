import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
const apikey = process.env.STIPOP_API_KEY;

const searchTrending = async (userId) => {
  const searchTrendingUrl = `https://messenger.stipop.io/v1/search/keyword?userId=${userId}&lang=en&countryCode=SG`;
  const response = await fetch(searchTrendingUrl, {
    headers: { apikey: apikey },
  });
  const data = await response.json();
  const { keywordList } = data.body;
  const keywordArr = keywordList.map(({ keyword }) => keyword);

  return keywordArr;
};

const searchStickers = async (userId, query) => {
  const searchStickerUrl = `https://messenger.stipop.io/v1/search?userId=${userId}&q=${query}&lang=en&pageNumber=1`;
  const response = await fetch(searchStickerUrl, {
    headers: { apikey: apikey },
  });
  const data = await response.json();
  const { stickerList } = data.body;
  // lines 22 to 30 can probably be shortened using object.assign or smth else but idk how D:
  const stickers = stickerList.map(
    ({ stickerId, packageId, artistName, stickerImg }) => [
      stickerId,
      packageId,
      artistName,
      stickerImg,
    ]
  );
  const stickerInfo = stickers.map((sticker) => {
    return {
      stickerID: sticker[0],
      packageID: sticker[1],
      artist: sticker[2],
      image: sticker[3],
    };
  });

  return stickerInfo;
};

export { searchTrending, searchStickers };
