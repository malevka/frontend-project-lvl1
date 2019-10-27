import { cons } from '@hexlet/pairs';
import runGameProcess from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const minValueOfInitial = 0;
const maxValueOfInitial = 101;
const progressionLenght = 10;
const minIndexOfHiddenElement = 0;
const maxIndexOfHiddenElement = progressionLenght - 1;
const minValueOfDiff = 1;
const maxValueOfDiff = 101;
const generateProgression = (initial, diff, lenght) => {
  const progression = [];
  for (let i = 0; i < lenght; i += 1) {
    const nextTerm = initial + i * diff;
    progression.push(nextTerm.toString());
  }
  return progression;
};

export const generateQuestionAnswer = () => {
  const hiddenElementIndex = getRandomNumber(minIndexOfHiddenElement, maxIndexOfHiddenElement);
  const initial = getRandomNumber(minValueOfInitial, maxValueOfInitial);
  const diff = getRandomNumber(minValueOfDiff, maxValueOfDiff);
  const progression = generateProgression(initial, diff, progressionLenght);
  const question = progression.join(' ').replace(progression[hiddenElementIndex], '..');
  const answer = progression[hiddenElementIndex].toString();
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  runGameProcess(gameDescription, generateQuestionAnswer);
};
