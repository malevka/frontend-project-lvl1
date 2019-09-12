#!/usr/bin/env node
import { printWelcome, printEvenGameRules, printGreeting, readInput, evenGame } from '..';

printWelcome();
printEvenGameRules();

const userName = readInput('May I have your name? ');
printGreeting(userName);

evenGame(userName);
