// import axios from 'axios';
// import { useState } from 'react';

// // const [gifData, setGifData] = useState([]);
// // const [gifSources, setGifSources] = useState([]);

// const getGifs = async (title) => {
//   try {
//     // CREATE CONTROL IF title IS EMPTY
// const gifDataArray = title.gifWords.map(async (word) => {
//   const res = await axios.get(
//     `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
//   );
//   const resGifs = await res.data;
//   // console.log(resGifs.data[0]);
//   // fixed height of 200px; width is variable
//   return resGifs.data;
// });
// console.log('gifDataArray', await Promise.all(gifDataArray));
// setGifData(await Promise.all(gifDataArray));
// console.log('gifData1', gifData);
// // if (gifData[0] && gifData[0].images) {
// //   setGifSources(gifData[0].images.fixed_height);
// // }
//     // ** OCT 28 ATTEMPT
//     const gifDataArr = title.gifWords.map(async (word) => {
//       const res = await axios.get(
//         `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
//       );
//       const gifDataTest = await res.data.data;
//       // console.log('res-->', res);
//       console.log('gifDataTest-->', gifDataTest);
//       // const gifDataTest = await resGifs. data;
//       // console.log('gifDataTest-->', gifDataTest);
//       // fixed height of 200px; width is variable
//       // console.log(
//       //   'gifDataArr[0].images.fixed_height',
//       //   gifDataArr[0].images.fixed_height
//       // );
//       return gifDataTest;
//     });

//     // console.log('gifDataArr', gifDataArr);
//     const gifDataArrHelper = await Promise.all(gifDataArr);
//     return gifDataArrHelper;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default getGifs;

// ***HOW IT USED TO WORK***
// const gifUrls = title.gifWords.map(async (word) => {
//   const res = await axios.get(
//     `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
//   );
//   const resGifs = await res.data;
//   console.log(resGifs.data);
//   // fixed height of 200px; width is variable
//   return resGifs.data[0].images.fixed_height;
// });
// console.log('gifUrls', gifUrls);
// setGifSources(await Promise.all(gifUrls));
// console.log('NONGIFTEXT OBJ --->' + title.nonGifText);
// ***END OF HOW IT USED TO WORK***
