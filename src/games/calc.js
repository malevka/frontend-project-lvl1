import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'What is the result of the expression?\n';
const operations = ['+', '-', '*'];
const getOperation = (index) => {
  let operation;
  switch (index) {
    case 0:
      operation = (a, b) => a + b;
      break;
    case 1:
      operation = (a, b) => a - b;
      break;
    case 2:
      operation = (a, b) => a * b;
      break;
    // no default
  }
  return operation;
};

const generateQuestionAnswer = () => {
  const minValueOfArgument = 0;
  const maxValueOfArgument = 101;

  const firstArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const secondArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);

  const minIndexOfOperation = 0;
  const maxIndexOfOperation = 3;
  const operationIndex = getRandomNumber(minIndexOfOperation, maxIndexOfOperation);
  const question = `${firstArgument} ${operations[operationIndex]} ${secondArgument}`;
  const answer = `${getOperation(operationIndex)(firstArgument, secondArgument)}`;
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  const gameResult = runGameProcess(gameDescription, generateQuestionAnswer);
  console.log(gameResult);
};
