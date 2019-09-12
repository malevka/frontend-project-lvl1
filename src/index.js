import readlineSync from 'readline-sync';


export const printWelcome = () => {
  const welcomeMsg = 'Welcome to the Brain Games!';
  console.log(welcomeMsg);
};

export const readInput = (question) => readlineSync.question(question);

export const printGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const printEvenGameRules = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  console.log(gameRules);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const evenGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const checkingNumber = getRandomNumber(0, 50);
    console.log(`Question: ${checkingNumber}`);
    const answer = readInput('Your answer: ');
    const correctAnswer = isEven(checkingNumber);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
