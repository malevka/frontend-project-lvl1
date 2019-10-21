import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;
const isEven = (number) => number % 2 === 0;
const generateQuestionAnswer = () => {
  const question = getRandomNumber(min, max);
  const answer = isEven(question) ? 'yes' : 'no';
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  runGameProcess(gameDescription, generateQuestionAnswer);
};
