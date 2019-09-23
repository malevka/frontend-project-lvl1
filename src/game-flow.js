import { car, cdr } from '@hexlet/pairs';
import { readInput } from './common';

export default (userName, generateQuestionAnswer, numberOfRounds) => {
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionData = generateQuestionAnswer();
    const question = car(questionData);
    const correctAnswer = cdr(questionData);
    console.log(`Question: ${question}`);
    const answer = readInput('Your answer: ');
    if (answer !== correctAnswer) {
      return `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};
