let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Nizar";

// userName = userInput // akan error karena type unknown

if (typeof userInput === "string") {
  userName = userInput;
}

function generatorError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generatorError("An error code ", 500);
