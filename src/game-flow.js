import { car, cdr } from '@hexlet/pairs';
import { readInput } from './common';

export default (userName, questionDataGenerator, numberOfRounds) => {
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionData = questionDataGenerator();
    const question = car(questionData);
    const correctAnswer = cdr(questionData);
    console.log(`Question: ${question}`);
    const answer = readInput('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
  return 0;
};
