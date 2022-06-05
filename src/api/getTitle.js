import React from 'react';
import movieTitles from '../models/movieTitles.js';
import weakWords from '../models/weakWords.js';

//Generatees random index, translates/tests title from master array
const getTitle = () => {
  // clearAll(); //***TO BE UNCOMMENTED***
  const masterArray = movieTitles;  //***TO BE MODIFIED***
  let randomIndex, titleString, titleArray;
  let gifWords = []; //words to be converted to gifs will be pushed into this array
  while (gifWords.length < 2 || gifWords.length > 4) {
    gifWords = [];
    randomIndex = Math.floor(Math.random() * masterArray.length);
    // console.log('MOVIE TITLE ---->' + masterArray[randomIndex]) // logs the full title

    //Parse through each word of title for words that will be translated into gifs, "weak words" that will not, and punctuation 
    
    titleString = masterArray[randomIndex].toLowerCase();
    titleArray = titleString.split(" ");
    console.log('getTitle() TITLESTR --->' + titleString);
    console.log('getTitle() TITLEARR --->' + titleArray);

    for (let i = 0; i < titleArray.length; i++) {
      //check for weak words and put between gifs
      for (let j = 0; j < weakWords.length; j++) {
          // if ((titleArray[i] || titleArray[i].replace(/[^\w]|_/g, "")) === weakWords[j]){
          // ***UNCOMMENT*** if (titleArray[i] === undefined) respondToError();
          if ((titleArray[i].replace(/[^\w]|_/g, "")) === weakWords[j]){
              //feed into correct placeholder based on gifWords.length
              document.getElementById(`pre${ gifWords.length + 1}`).textContent += ` ${ titleArray[i] }`
              i++;
          }    
      }
      //check for punctuation at start and end of words and put betwen gifs, then put 
      if (i <= (titleArray.length - 1)) {
          // if first character is punctuation
          if (titleArray[i].search(/[.,:!?\(\)&']/) === 0) {
              document.getElementById(`pre${ gifWords.length + 1 }`).textContent += ` ${ titleArray[i].charAt(0) }`;
              gifWords.push(titleArray[i].replace(/[^\w\s]|_/g, ""));
          // if last character is punctuation
          } else if (titleArray[i].search(/[.,:!?\(\)&']/) === (titleArray[i].length - 1)) {       
              gifWords.push(titleArray[i].replace(/[^\w\s]|_/g, ""));   
              document.getElementById(`pre${ gifWords.length + 1 }`).textContent += ` ${ titleArray[i].charAt(titleArray[i].length - 1) }`;  
          } else {
              gifWords.push(titleArray[i]);
          }  
      }
    }   
    // console.log(gifWords)
    //***TO BE UNCOMMENTED*** if (gifWords === null) respondToError();
    //***TO BE UNCOMMENTED***for (let y = 1; y <= gifWords.length; y++) {
    //***TO BE UNCOMMENTED***    if (gifWords[y] === null) respondToError();
    //***TO BE UNCOMMENTED***}
    console.log('getTitle() GIFWORDS ---->' + gifWords) // logs the full title
          //If title length is too short / too long, pick another title
    // while (gifWords.length < 2 || gifWords.length > 4) {
    //   gifWords = getTitle();
  }   
  // return gifWords;
  return [titleString, gifWords];
}
//
export default getTitle;