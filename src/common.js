import readlineSync from 'readline-sync';

export const readInput = (question) => readlineSync.question(question);
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
