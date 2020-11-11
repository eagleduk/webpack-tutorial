// Console 창에서 입력을 받을 수 있게 하는 node module
// npm i readline
// const readLine = require('readline');
import readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// module.exports = { rl };
export {
    rl
};