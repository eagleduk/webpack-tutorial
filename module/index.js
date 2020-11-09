/**
 * 
 *   Module 을 import 하는 두가지 방법
 * 
 */

// node ./index.js
const { getCircleArea } = require("./mathUtil");

// npm install esm
// node -r esm ./index.js
import { getCircleArea } from "./mathUtil";

console.log(getCircleArea(2));