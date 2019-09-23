import { cons } from '@hexlet/pairs';
import * as even from './games/even';
import * as calc from './games/calc';
import * as gcd from './games/gcd';
import * as progression from './games/progression';
import runGameProcess from './game-flow';
import { readInput } from './common';

const numberOfRounds = 3;

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
    default:
      console.log('Unknown game.');
  }
};

export const startGame = (gameName) => {
  const userName = readInput('May I have your name? ');
  printGreeting(userName);

  let generateQuestionAnswer;
  switch (gameName) {
    case 'even':
      generateQuestionAnswer = even.generateQuestionAnswer;
      break;
    case 'calc':
      generateQuestionAnswer = calc.generateQuestionAnswer;
      break;
    case 'gcd':
      generateQuestionAnswer = gcd.generateQuestionAnswer;
      break;
    case 'progression':
      generateQuestionAnswer = progression.generateQuestionAnswer;
      break;
    default:
      generateQuestionAnswer = () => cons(15, 'no');
  }
  const gameResult = runGameProcess(userName, generateQuestionAnswer, numberOfRounds);
  console.log(gameResult);
};
