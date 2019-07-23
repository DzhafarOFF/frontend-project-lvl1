#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, * as game from '..';

export default () => {
// Greeting. Get name of User.
  const userName = greeting('What number is missing in the progression?');

  // Min and max value of posible random number that can be crated in iter.
  const minRandom = 1;
  const maxRandom = 15;
  const lOfProgression = 10;
  // One round of game;
  const iter = (score) => {
    if (game.checkScore(score, userName)) {
      const firstNumber = game.getRandom(minRandom, maxRandom);
      const rundomNumber = game.getRandom(minRandom, maxRandom);
      const rundomPosition = Math.floor(Math.random() * (lOfProgression - minRandom)) + minRandom;
      const progression = [firstNumber];
      // generate progression
      for (let i = 0; i < 9; i += 1) {
        progression.push(progression[i] + rundomNumber);
      }
      // remove random element of progression
      for (let i = 0; i <= 9; i += 1) {
        if (i === rundomPosition) {
          progression[i] = '..';
          break;
        }
      }
      console.log(`Question: ${progression}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = progression[rundomPosition - 1] + rundomNumber;
      game.isCorrect(correctAnswer, Number(userAnswer), userName, iter, score);
    }
  };
  // start game with score = 0.
  iter(0);
};
