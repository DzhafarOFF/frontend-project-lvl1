#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting, * as game from '..';

export default () => {
  // Greeting. Get name of User.
  const userName = greeting('What is the result of the expression?');

  // Min and max value of posible random number that can be crated in iter.
  const minRandom = 1;
  const maxRandom = 100;
  const operators = ['+', '-', '*'];
  const actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  // One round of game;
  const iter = (score) => {
    if (game.checkScore(score, userName)) {
      const randomNumber1 = game.getRandom(minRandom, maxRandom);
      const randomNumber2 = game.getRandom(minRandom, maxRandom);
      const randomOperator = operators[Math.floor(Math.random() * operators.length)];
      const quetion = `${randomNumber1}${randomOperator}${randomNumber2}`;
      console.log(`Question: ${quetion}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = actions[randomOperator](randomNumber1, randomNumber2);
      game.isCorrect(correctAnswer, Number(userAnswer), userName, iter, score);
    }
  };
  // start game with score = 0.
  iter(0);
};
