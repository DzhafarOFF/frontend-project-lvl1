import readlineSync from 'readline-sync';

// Greeting, get user name, print task
export default (taskOfGame = '') => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${taskOfGame}`);
  return userName;
};
// get random number from min to max
export const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

// check user answer is correct or not
export const isCorrect = (correctAnswer, userAnswer, userName, iter, score) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return iter(score + 1);
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
  return false;
};

// check score of current game
export const checkScore = (score, userName) => {
  if (score >= 3) {
    console.log(`Congratulations, ${userName}!`);
    return false;
  }
  return true;
};

// get correct answer of actual iteration
export const getCorrectAnswer = (correctCondition) => {
  if (correctCondition) {
    return 'yes';
  }
  return 'no';
};
