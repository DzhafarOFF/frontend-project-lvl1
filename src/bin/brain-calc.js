#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '..';
// Greeting. Get name of User.
const userName = greeting('What is the result of the expression?');

// Min and max value of posible random number that can be crated in iter. From 1 to 99 for example.
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
  if (score >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    const randomNumber1 = Math.round(Math.random() * (maxRandom - minRandom) + minRandom);
    const randomNumber2 = Math.round(Math.random() * (maxRandom - minRandom) + minRandom);
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const sResult = `${randomNumber1}${randomOperator}${randomNumber2}`;
    const nResult = actions[randomOperator](randomNumber1, randomNumber2);
    console.log(`Question: ${sResult}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (nResult === Number(userAnswer)) {
      console.log('Correct!');
      iter(score + 1);
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${nResult}. Let's try again, ${userName}!`);
    }
  }
};
// start game with score = 0.
iter(0);
