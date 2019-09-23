import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../common';

const getGCD = (num1, num2) => {
  const firstOperand = num1 > num2 ? num1 : num2;
  const secondOperand = num1 > num2 ? num2 : num1;
  if (firstOperand % secondOperand === 0) {
    return secondOperand;
  }
  const remainderOfDivision = firstOperand % secondOperand;
  const gcd = getGCD(secondOperand, remainderOfDivision);
  return gcd;
};

export const gameRules = 'Find the greatest common divisor of given numbers.\n';
export const generateQuestionAnswer = () => {
  const minValueOfOperand = 1;
  const maxValueOfOperand = 101;

  const firstOperand = getRandomNumber(minValueOfOperand, maxValueOfOperand);
  const secondOperand = getRandomNumber(minValueOfOperand, maxValueOfOperand);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = `${getGCD(firstOperand, secondOperand)}`;
  const questionData = cons(question, answer);
  return questionData;
};
