#!/usr/bin/env node
import {getUserName} from '../index.js';

const welcomeMsg = "Welcome to the Brain Games!\n";
console.log(welcomeMsg);

const userName = getUserName();
const greeting = `Hello, ${userName}!`;
console.log(greeting);


