import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const minValueOfArgument = 1;
const maxValueOfArgument = 101;

const getGcd = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  const min = num1 > num2 ? num2 : num1;
  if (max % min === 0) {
    return min;
  }
  const remainderOfDivision = max % min;
  const gcd = getGcd(min, remainderOfDivision);
  return gcd;
};

export const generateQuestionAnswer = () => {
  const firstArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const secondArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const question = `${firstArgument} ${secondArgument}`;
  const answer = getGcd(firstArgument, secondArgument).toString();
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  runGameProcess(gameDescription, generateQuestionAnswer);
};
