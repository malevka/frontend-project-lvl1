import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcomeMessage = 'Welcome to the Brain Games!';
const roundsCount = 3;

export default (gameDescription, generatequestionAnswer) => {
  console.log(welcomeMessage);
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
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
