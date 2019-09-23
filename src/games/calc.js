import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomNumber } from '../common';

const getOperation = (index) => {
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
export const generateQuestionAnswer = () => {
  const minValueOfOperand = 0;
  const maxValueOfOperand = 101;

  const firstOperand = getRandomNumber(minValueOfOperand, maxValueOfOperand);
  const secondOperand = getRandomNumber(minValueOfOperand, maxValueOfOperand);

  const minIndexOfOperation = 0;
  const maxIndexOfOperation = 3;
  const operationIndex = getRandomNumber(minIndexOfOperation, maxIndexOfOperation);
  const question = `${firstOperand} ${cdr(getOperation(operationIndex))} ${secondOperand}`;
  const answer = `${car(getOperation(operationIndex))(firstOperand, secondOperand)}`;
  const questionData = cons(question, answer);
  return questionData;
};
