import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcomeMsg = 'Welcome to the Brain Games!';
const roundsCount = 3;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const runGameProcess = (gameDescription, generatequestionAnswer) => {
  console.log(welcomeMsg);
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const questionAnswer = generatequestionAnswer();
    const question = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      const successMessage = i === roundsCount ? `Congratulations, ${userName}!` : 'Correct!';
      console.log(successMessage);
    } else {
      const failMessage = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`;
      console.log(failMessage);
      break;
    }
  }
};
