#!/usr/bin/env node
import { printWelcome, printGameRules, startGame } from '..';

const gameName = 'gcd';
printWelcome();
printGameRules(gameName);
startGame(gameName);
