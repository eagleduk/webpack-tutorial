/**
 * 
 *   Module 을 import 하는 두가지 방법
 * 
 */

// node ./index.js
const { getCircleArea } = require("./mathUtil");
const { rl } = require("./readline");

import "./index.css";
import $ from "jquery";

// npm install esm
// node -r esm ./index.js
//import { getCircleArea } from "./mathUtil";


rl.question("input >>>> ", input => {
    console.log(getCircleArea(input));
    rl.close();
})
console.log($);