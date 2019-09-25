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
export const generateQuestionAnswerPair = () => {
  const minValueOfArgument = 0;
  const maxValueOfArgument = 101;

  const firstArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const secondArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);

  const minIndexOfOperation = 0;
  const maxIndexOfOperation = 3;
  const operationIndex = getRandomNumber(minIndexOfOperation, maxIndexOfOperation);
  const question = `${firstArgument} ${cdr(getOperation(operationIndex))} ${secondArgument}`;
  const answer = `${car(getOperation(operationIndex))(firstArgument, secondArgument)}`;
  const questionAnswerPair = cons(question, answer);
  return questionAnswerPair;
};
