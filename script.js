let lengthRange = document.getElementById("pass-length");
let lengthTooltip = document.getElementById("length-tooltip");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generatePass = document.getElementById("generate-pass");
let finalAnswer = document.querySelector(".final-answer");

let alphabets = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "1234567890";
let allSymbols = "!@#$%^&*()_+";
let length = 8;
let result;


lengthRange.addEventListener("input", function () {
  let value = this.value;
  lengthTooltip.textContent = value;
  length = parseInt(value);
});

generatePass.addEventListener("click", function () {
  let containsUppercase = uppercase.checked;
  let containslowercase = lowercase.checked;
  let containsNumbers = numbers.checked;
  let containsSymbols = symbols.checked;
  result = "";
  generateRandomPassword(
    length,
    containsUppercase,
    containslowercase,
    containsNumbers,
    containsSymbols
  );
  console.log(finalAnswer);
  finalAnswer.textContent = result;
  console.log(result);
});


function generateRandomPassword(
  desiredLength,
  containsUppercase,
  containsLowercase,
  containsNumbers,
  containsSymbols
) {
  let pool = "";
  if (containsUppercase) {
    pool += alphabets.toUpperCase();
  }
  if (containsLowercase) {
    pool += alphabets;
  }
  if (containsNumbers) {
    pool += allNumbers;
  }
  if (containsSymbols) {
    pool += allSymbols;
  }

  while (result.length < desiredLength) {
    if (pool.length > 0) {
      result += pool[createRandomNumber(pool.length)];
    }
  }
  return result;
}



function createRandomNumber(length) {
   return Math.floor(Math.random() * length);
}



finalAnswer.addEventListener("click", function() {
    // Create a temporary textarea element
    let textarea = document.createElement("textarea");
    
    // Set the value of the textarea to the text content of .final-answer
    textarea.value = this.textContent;
    
    // Append the textarea to the document body
    document.body.appendChild(textarea);
    
    // Select the text inside the textarea
    textarea.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary textarea from the document body
    document.body.removeChild(textarea);
    
    // Optionally, provide feedback to the user
    alert("Password copied to clipboard!");
});