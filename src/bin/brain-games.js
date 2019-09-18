#!/usr/bin/env node
import { printWelcome, printGreeting } from '..';
import { readInput } from '../common';

printWelcome();
console.log('\n');

const userName = readInput('May I have your name? ');
printGreeting(userName);
