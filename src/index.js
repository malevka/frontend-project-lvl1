import { cons } from '@hexlet/pairs';
import * as even from './games/even';
import * as calc from './games/calc';
import * as gcd from './games/gcd';
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
    default:
      console.log('Unknown game.');
  }
};

export const startGame = (gameName) => {
  const userName = readInput('May I have your name? ');
  printGreeting(userName);

  let questionDataGenerator;
  switch (gameName) {
    case 'even':
      questionDataGenerator = even.questionDataGenerator;
      break;
    case 'calc':
      questionDataGenerator = calc.questionDataGenerator;
      break;
    case 'gcd':
      questionDataGenerator = gcd.questionDataGenerator;
      break;
    default:
      questionDataGenerator = () => cons(15, 'no');
  }
  runGameProcess(userName, questionDataGenerator, numberOfRounds);
};
