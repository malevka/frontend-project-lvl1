
import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../common';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
export const generateQuestionAnswer = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 100;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = isEven(question);
  const questionData = cons(question, answer);
  return questionData;
};
