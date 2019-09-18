#!/usr/bin/env node
import { printWelcome, printGameRules, startGame } from '..';

const gameName = 'even';
printWelcome();
printGameRules(gameName);
startGame(gameName);
