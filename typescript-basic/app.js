"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Nizar";
// userName = userInput // akan error karena type unknown
if (typeof userInput === "string") {
    userName = userInput;
}
function generatorError(message, code) {
    throw { message: message, errorCode: code };
}
generatorError("An error code ", 500);
