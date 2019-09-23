#!/usr/bin/env node
import { printWelcome, printGameRules, startGame } from '..';

const gameName = 'prime';
printWelcome();
printGameRules(gameName);
startGame(gameName);
