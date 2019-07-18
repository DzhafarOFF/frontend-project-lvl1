#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '..';
// Greeting. Get name of User.
const userName = greeting('What number is missing in the progression?');

// Min and max value of posible random number that can be crated in iter. From 1 to 99 for example.
const minRandom = 1;
const maxRandom = 15;
const lOfProgression = 10;

// One round of game;
const iter = (score) => {
  if (score >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    const firstNumber = Math.round(Math.random() * (maxRandom - minRandom) + minRandom);
    const rundomNumber = Math.round(Math.random() * (maxRandom - minRandom) + minRandom);
    const rundomPosition = Math.floor(Math.random() * (lOfProgression - minRandom)) + minRandom;
    const progression = [firstNumber];
    for (let i = 0; i < 9; i += 1) progression.push(progression[i] + rundomNumber);
    for (let i = 0; i <= 9; i += 1) {
      if (i === rundomPosition) {
        progression[i] = '..';
        break;
      }
    }
    console.log(`Question: ${progression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = progression[rundomPosition - 1] + rundomNumber;
    if (result === Number(userAnswer)) {
      console.log('Correct!');
      iter(score + 1);
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${userName}!`);
    }
  }
};
// start game with score = 0.
iter(0);
