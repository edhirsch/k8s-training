// Types of exports

// 1. Module exports 
const funcName = () => {
    console.log('funcName');
}
module.exports = {
    funcName
}

// 2. Export single entity
const getName = () => {
    return 'MyName';
}
exports.getName = getName;

// ES6 exports (THIS CAN BE USED IN NODE ONLY AFTER NODE 13 - EXPERIMENTAL / 
//              BUT CAN BE USED IN LATEST VERSIONS OF UI LIBS: React, Angular, Vue)

// 3. ES6 default export
const getValue = () => {
    return 1337;
}
export default getValue ;

// 4. ES6 specific export
export const getAge = () => {
    return 26;
}

// or do multiple exports
export { getAge }; // can add multiple values in here
export { getAge as receiveAge}; // this will be imported as receiveAge; 