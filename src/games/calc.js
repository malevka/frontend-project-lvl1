import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'What is the result of the expression?';
const minValueOfArgument = 0;
const maxValueOfArgument = 101;
const operations = ['+', '-', '*'];
const minIndexOfOperation = 0;
const maxIndexOfOperation = operations.length;

const getOperation = (operator) => {
  let operation;
  switch (operator) {
    case '+':
      operation = (a, b) => a + b;
      break;
    case '-':
      operation = (a, b) => a - b;
      break;
    case '*':
      operation = (a, b) => a * b;
      break;
    // no default
  }
  return operation;
};

const generateQuestionAnswer = () => {
  const firstArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const secondArgument = getRandomNumber(minValueOfArgument, maxValueOfArgument);
  const operationIndex = getRandomNumber(minIndexOfOperation, maxIndexOfOperation);
  const question = `${firstArgument} ${operations[operationIndex]} ${secondArgument}`;
  const answer = getOperation(operations[operationIndex])(firstArgument, secondArgument).toString();
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  runGameProcess(gameDescription, generateQuestionAnswer);
};
