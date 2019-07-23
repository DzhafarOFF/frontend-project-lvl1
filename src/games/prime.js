#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, * as game from '..';

export default () => {
  // Greeting. Get name of User.
  const userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');

  // Min and max value of posible random number that can be crated in iter.
  const minRandom = 1;
  const maxRandom = 100;
  // find greatest common divisor of 2 numbers
  const findDevisor = (number) => {
    if (number === 1) return false;
    if (number === 2) return true;
    for (let x = 2; x < number; x += 1) {
      if (number % x === 0) return false;
    }
    return true;
  };
  // One round of game;
  const iter = (score) => {
    if (game.checkScore(score, userName)) {
      const randomNumber = game.getRandom(minRandom, maxRandom);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = game.getCorrectAnswer(findDevisor(randomNumber));
      game.isCorrect(correctAnswer, userAnswer, userName, iter, score);
    }
  };
  // start game with score = 0.
  iter(0);
};
