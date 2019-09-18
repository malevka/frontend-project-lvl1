#!/usr/bin/env node
import { printWelcome, printGameRules, startGame } from '..';

const gameName = 'calc';
printWelcome();
printGameRules(gameName);
startGame(gameName);
