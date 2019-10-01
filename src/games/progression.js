import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGameProcess } from '..';

const gameDescription = 'What number is missing in the progression?\n';
const generateProgression = (initial, progressionLenght, diff, hiddenIndex) => {
  let progressionStr = '';
  for (let i = 0; i < progressionLenght; i += 1) {
    const nextTerm = i === hiddenIndex ? '.. ' : `${initial + i * diff} `;
    progressionStr += nextTerm;
  }
  return progressionStr;
};
const calculateDiff = (initial, diff, hiddenIndex) => initial + hiddenIndex * diff;

export const generateQuestionAnswer = () => {
  const minValueOfInitial = 0;
  const maxValueOfInitial = 101;
  const minValueOfHiddenIndex = 0;
  const maxValueOfHiddenIndex = 9;
  const minValueOfDiff = 1;
  const maxValueOfDiff = 101;
  const progressionLenght = 10;
  const hiddenIndex = getRandomNumber(minValueOfHiddenIndex, maxValueOfHiddenIndex);
  const initial = getRandomNumber(minValueOfInitial, maxValueOfInitial);
  const diff = getRandomNumber(minValueOfDiff, maxValueOfDiff);
  const question = generateProgression(initial, progressionLenght, diff, hiddenIndex);
  const answer = `${calculateDiff(initial, diff, hiddenIndex)}`;
  const questionAnswer = cons(question, answer);
  return questionAnswer;
};

export default () => {
  const gameResult = runGameProcess(gameDescription, generateQuestionAnswer);
  console.log(gameResult);
};
