import { cons } from '@hexlet/pairs';
import runGameProcess from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = -2572;
const max = 3572;
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateQuestionAnswer = () => {
  const question = getRandomNumber(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  runGameProcess(gameDescription, generateQuestionAnswer);
};
