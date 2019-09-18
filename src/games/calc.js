import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomNumber } from '../common';

const operationGenerator = (index) => {
  let operation;
  switch (index) {
    case 0:
      operation = cons((a, b) => a + b, '+');
      break;
    case 1:
      operation = cons((a, b) => a - b, '-');
      break;
    case 2:
      operation = cons((a, b) => a * b, '*');
      break;
    default:
      operation = cons((a, b) => a * b, '+');
  }
  return operation;
};

export const gameRules = 'What is the result of the expression?\n';
export const questionDataGenerator = () => {
  const minValueOfOperand = 0;
  const maxValueOfOperand = 100;

  const firstOperand = getRandomNumber(minValueOfOperand, maxValueOfOperand);
  const secondOperand = getRandomNumber(minValueOfOperand, maxValueOfOperand);

  const minIndexOfOperation = 0;
  const maxIndexOfOperation = 2;
  const operationIndex = getRandomNumber(minIndexOfOperation, maxIndexOfOperation);

  const question = `${firstOperand} ${cdr(operationGenerator(operationIndex))} ${secondOperand}`;
  const answer = `${car(operationGenerator(operationIndex))(firstOperand, secondOperand)}`;
  const questionData = cons(question, answer);
  return questionData;
};
