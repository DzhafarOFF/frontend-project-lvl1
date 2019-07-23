#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, * as game from '..';

export default () => {
  // Greeting. Get name of User.
  const userName = greeting('Answer "yes" if number even otherwise answer "no".');

  // Min and max value of posible random number that can be crated in iter.
  const minRandom = 1;
  const maxRandom = 100;
  // One round of game;
  const iter = (score) => {
    if (game.checkScore(score, userName)) {
      const randomNumber = game.getRandom(minRandom, maxRandom);
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = game.getCorrectAnswer(randomNumber % 2 === 0);
      game.isCorrect(correctAnswer, userAnswer, userName, iter, score);
    }
  };
  // start game with score = 0.
  iter(0);
};
