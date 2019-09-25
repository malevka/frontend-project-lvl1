import * as even from './games/even';
import * as calc from './games/calc';
import * as gcd from './games/gcd';
import * as progression from './games/progression';
import * as prime from './games/prime';
import runGameProcess from './game-flow';
import { readInput } from './common';

const roundsCount = 3;

export const printWelcome = () => {
  const welcomeMsg = 'Welcome to the Brain Games!';
  console.log(welcomeMsg);
};

export const printGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const printGameRules = (gameName) => {
  switch (gameName) {
    case 'even':
      console.log(even.gameRules);
      break;
    case 'calc':
      console.log(calc.gameRules);
      break;
    case 'gcd':
      console.log(gcd.gameRules);
      break;
    case 'progression':
      console.log(progression.gameRules);
      break;
    case 'prime':
      console.log(prime.gameRules);
      break;
    //  no default
  }
};

export const startGame = (gameName) => {
  const userName = readInput('May I have your name? ');
  printGreeting(userName);

  let generateQuestionAnswerPair;
  switch (gameName) {
    case 'even':
      generateQuestionAnswerPair = even.generateQuestionAnswerPair;
      break;
    case 'calc':
      generateQuestionAnswerPair = calc.generateQuestionAnswerPair;
      break;
    case 'gcd':
      generateQuestionAnswerPair = gcd.generateQuestionAnswerPair;
      break;
    case 'progression':
      generateQuestionAnswerPair = progression.generateQuestionAnswerPair;
      break;
    case 'prime':
      generateQuestionAnswerPair = prime.generateQuestionAnswerPair;
      break;
    // no default
  }
  const gameResult = runGameProcess(userName, generateQuestionAnswerPair, roundsCount);
  console.log(gameResult);
};
