#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '..';
// Greeting. Get name of User.
const userName = greeting();
console.log('Answer "yes" if number even otherwise answer "no".');
// Min and max value of posible random number that can be crated in iter. From 1 to 99 for example.
const minRandom = 1;
const maxRandom = 100;
// One round of game;
const iter = (score) => {
  if (score >= 3) return console.log(`Congratulations, ${userName}!`);

  const randomNumber = Math.round(Math.random() * (maxRandom - minRandom) + minRandom);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (randomNumber % 2 === 0) {
    if (userAnswer === 'yes' || userAnswer === 'Yes') {
      console.log('Correct!');
      return iter(score + 1);
    }
    return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
  }
  if (userAnswer === 'no' || userAnswer === 'No') {
    console.log('Correct!');
    return iter(score + 1);
  }
  return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
};
// start game with score = 0.
iter(0);
