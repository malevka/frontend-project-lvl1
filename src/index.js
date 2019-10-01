import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcomeMsg = 'Welcome to the Brain Games!';
const roundsCount = 3;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const runGameProcess = (gameDescription, generatequestionAnswer) => {
  console.log(welcomeMsg);
  console.log(gameDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < roundsCount; i += 1) {
    const questionAnswer = generatequestionAnswer();
    const question = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export const startBrainGames = () => {
  console.log(welcomeMsg);
  console.log('\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
