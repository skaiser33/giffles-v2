import books from '../models/books.js';
import movies from '../models/movies.js';
import songs from '../models/songs.js';
import weakWords from '../models/weakWords.js';
import respondToError from './respondToError.js';

//Generates random index, translates/tests title from master array
const getTitle = (category, gifSources, setGifSources, setPlayerFeedback) => {
  // clearAll(); //***TO BE UNCOMMENTED***
  let titles;
  switch (category) {
    case 'movies':
      titles = movies;
      break;
    case 'songs':
      titles = songs;
      break;
    case 'books':
      titles = books;
      break;
    default:
      titles = movies;
  }
  let nonGifText = {};
  let randomIndex, titleString, titleArray;
  let gifWords = []; //words to be converted to gifs will be pushed into this array

  const updateNonGifText = (text) => {
    const position = gifWords.length + 1;
    nonGifText[position]
      ? (nonGifText[position] += ` ${text}`)
      : (nonGifText[position] = text);
  };

  while (gifWords.length < 2 || gifWords.length > 4) {
    gifWords = [];
    nonGifText = {};
    randomIndex = Math.floor(Math.random() * titles.length);

    //Parse through each word of title for words that will be translated into gifs, "weak words" that will not, and punctuation

    titleString = titles[randomIndex].toLowerCase();
    titleArray = titleString.split(' ');

    // REFACTOR WITH INCLUDES METHOD
    for (let i = 0; i < titleArray.length; i++) {
      //check for weak words and put between gifs
      for (let j = 0; j < weakWords.length; j++) {
        // ***UNCOMMENT*** if (titleArray[i] === undefined) respondToError();
        if (titleArray[i].replace(/[^\w]|_/g, '') === weakWords[j]) {
          //feed into correct placeholder based on gifWords.length
          updateNonGifText(titleArray[i]);
          i++;
        }
      }
      //check for punctuation at start and end of words and put betwen gifs, then put
      if (i <= titleArray.length - 1) {
        // if first character is punctuation
        if (titleArray[i].search(/[.,:!?\(\)&']/) === 0) {
          updateNonGifText(titleArray[i].charAt(0));
          gifWords.push(titleArray[i].replace(/[^\w\s]|_/g, ''));
          // if last character is punctuation
        } else if (
          titleArray[i].search(/[.,:!?\(\)&']/) ===
          titleArray[i].length - 1
        ) {
          gifWords.push(titleArray[i].replace(/[^\w\s]|_/g, ''));
          updateNonGifText(titleArray[i].charAt(titleArray[i].length - 1));
          // if last two characters are 's
        } else if (titleArray[i].slice(-2) === "'s") {
          gifWords.push(titleArray[i].slice(0, -2));
          updateNonGifText(titleArray[i].slice(-2));
        } else {
          gifWords.push(titleArray[i]);
        }
      }
    }
    if (gifWords === null)
      respondToError(
        'gifWords null',
        gifSources,
        setGifSources,
        setPlayerFeedback
      );
    for (let y = 1; y <= gifWords.length; y++) {
      if (gifWords[y] === null)
        respondToError(
          'gifWords[y] null',
          gifSources,
          setGifSources,
          setPlayerFeedback
          // setPlayerFeedbackHidden
        );
    }
    //If title length is too short / too long, pick another title
  }
  console.log('to help guess, the titleString is', titleString);
  return {
    titleString: titleString,
    gifWords: gifWords,
    nonGifText: nonGifText,
  };
};

export default getTitle;
