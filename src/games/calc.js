import { cons } from '@hexlet/pairs';
import runGameProcess from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const minValueOfArgument = 0;
const maxValueOfArgument = 101;
const operations = ['+', '-', '*'];
const minIndexOfOperation = 0;
const maxIndexOfOperation = operations.length - 1;

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
  const operation = operations[getRandomNumber(minIndexOfOperation, maxIndexOfOperation)];
  const question = `${firstArgument} ${operation} ${secondArgument}`;
  const answer = getOperation(operation)(firstArgument, secondArgument).toString();
  return cons(question, answer);
};

export default () => {
  runGameProcess(gameDescription, generateQuestionAnswer);
};
