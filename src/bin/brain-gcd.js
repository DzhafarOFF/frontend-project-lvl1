#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '..';
// Greeting. Get name of User.
const userName = greeting('Find the greatest common divisor of given numbers.');

// Min and max value of posible random number that can be crated in iter. From 1 to 99 for example.
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
  if (score >= 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    const randomNumber1 = Math.round(Math.random() * (maxRandom - minRandom) + minRandom);
    const randomNumber2 = Math.round(Math.random() * (maxRandom - minRandom) + minRandom);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = gcd(randomNumber1, randomNumber2);

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
