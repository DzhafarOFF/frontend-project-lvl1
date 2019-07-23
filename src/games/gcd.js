#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, * as game from '..';

export default () => {
  // Greeting. Get name of User.
  const userName = greeting('Find the greatest common divisor of given numbers.');

  // Min and max value of posible random number that can be crated in iter.
  const minRandom = 1;
  const maxRandom = 100;
  // gcd function
  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  // One round of game;
  const iter = (score) => {
    if (game.checkScore(score, userName)) {
      const randomNumber1 = game.getRandom(minRandom, maxRandom);
      const randomNumber2 = game.getRandom(minRandom, maxRandom);
      console.log(`Question: ${randomNumber1} ${randomNumber2}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = gcd(randomNumber1, randomNumber2);
      game.isCorrect(correctAnswer, Number(userAnswer), userName, iter, score);
    }
  };
  // start game with score = 0.
  iter(0);
};
