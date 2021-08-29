/**
 * 
 * Main JS
 * 
 */

var generateButton = document.querySelector('#generate-code-button');
var codeInput = document.querySelector('#code');

generateButton.addEventListener('click', () => codeInput.value = coder.generate());