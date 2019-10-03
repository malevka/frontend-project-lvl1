import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateQuestionAnswer = () => {
  const minRandomNumber = -2572;
  const maxRandomNumber = 3572;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  const gameResult = runGameProcess(gameDescription, generateQuestionAnswer);
  console.log(gameResult);
};
