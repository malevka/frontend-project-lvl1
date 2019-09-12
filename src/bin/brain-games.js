#!/usr/bin/env node
import { printWelcome, printGreeting, readInput } from '..';

printWelcome();
console.log('\n');

const userName = readInput('May I have your name? ');
printGreeting(userName);
