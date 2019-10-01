import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.\n';
const getGCD = (num1, num2) => {
  const firstArgument = num1 > num2 ? num1 : num2;
  const secondArgument = num1 > num2 ? num2 : num1;
  if (firstArgument % secondArgument === 0) {
    return secondArgument;
  }
  const remainderOfDivision = firstArgument % secondArgument;
  const gcd = getGCD(secondArgument, remainderOfDivision);
  return gcd;
};

export const generateQuestionAnswer = () => {
  const minValueOfArgument = 1;
  const maxValueOfArgument = 101;

  const firstArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const secondArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const question = `${firstArgument} ${secondArgument}`;
  const answer = `${getGCD(firstArgument, secondArgument)}`;
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  const gameResult = runGameProcess(gameDescription, generateQuestionAnswer);
  console.log(gameResult);
};
