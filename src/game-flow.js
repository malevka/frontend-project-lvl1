import { car, cdr } from '@hexlet/pairs';
import { readInput } from './common';

export default (userName, generateQuestionAnswerPair, numberOfRounds) => {
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAnswerPair = generateQuestionAnswerPair();
    const question = car(questionAnswerPair);
    const correctAnswer = cdr(questionAnswerPair);
    console.log(`Question: ${question}`);
    const answer = readInput('Your answer: ');
    if (answer !== correctAnswer) {
      return `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};
