import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'What number is missing in the progression?';
const minValueOfInitial = 0;
const maxValueOfInitial = 101;
const minValueOfHiddenIndex = 0;
const maxValueOfHiddenIndex = 9;
const minValueOfDiff = 1;
const maxValueOfDiff = 101;
const progressionLenght = 10;
const generateProgression = (initial, diff) => {
  const progression = [];
  for (let i = 0; i < progressionLenght; i += 1) {
    const nextTerm = initial + i * diff;
    progression.push(nextTerm.toString());
  }
  return progression;
};

export const generateQuestionAnswer = () => {
  const hiddenIndex = getRandomNumber(minValueOfHiddenIndex, maxValueOfHiddenIndex);
  const initial = getRandomNumber(minValueOfInitial, maxValueOfInitial);
  const diff = getRandomNumber(minValueOfDiff, maxValueOfDiff);
  const progression = generateProgression(initial, diff);
  const hiddenNumberOfProgression = progression[hiddenIndex];
  const question = progression.join(' ').replace(hiddenNumberOfProgression, '..');
  const answer = hiddenNumberOfProgression.toString();
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  runGameProcess(gameDescription, generateQuestionAnswer);
};
