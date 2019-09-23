import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../common';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
export const generateQuestionAnswer = () => {
  const minRandomNumber = 2;
  const maxRandomNumber = 1512;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = isPrime(question);
  const questionData = cons(question, answer);
  return questionData;
};
