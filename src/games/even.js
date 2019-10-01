
import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const isEven = (number) => (number % 2 === 0);

const generateQuestionAnswer = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 100;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  const gameResult = runGameProcess(gameDescription, generateQuestionAnswer);
  console.log(gameResult);
};
