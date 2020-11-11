/**
 * 
 *   Module 을 import 하는 두가지 방법
 * 
 */

// node ./index.js
// const { getCircleArea } = require("./mathUtil");
// const { rl } = require("./readline");

import { getCircleArea } from "./mathUtil";
import { rl } from "./readline";
import "./index.css";
import $ from "jquery";
import logo from "./image/logo.jpg";
import svgImg from "./image/skull.svg"

// npm install esm
// node -r esm ./index.js
//import { getCircleArea } from "./mathUtil";


rl.question("input >>>> ", input => {
    console.log(getCircleArea(input));
    rl.close();
});

console.log($);
console.log(`IS_PRODUCTION MODE : ${IS_PRODUCTION}`)
console.log(`logo :: ${ logo}`);
console.log(`svgImg:: ${svgImg}`);