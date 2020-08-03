// 1. Module Imports 
const func = require('./exports')
console.log(func.funcName())

// 2. Import single entity
const getN = require('./exports');
console.log(getN.getName());

// 3. ES6 import default (usually good when you'd like to default export a class or a single function component)
import getValue from './exports';
console.log(getValue());

// 4. ES6 single import
import { getAge } from './exports';
console.log(getAge());