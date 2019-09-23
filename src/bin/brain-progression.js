#!/usr/bin/env node
import { printWelcome, printGameRules, startGame } from '..';

const gameName = 'progression';
printWelcome();
printGameRules(gameName);
startGame(gameName);
