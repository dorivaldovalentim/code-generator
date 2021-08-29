/**
 * 
 * Main JS
 * 
 */

var generateButton = document.querySelector('#generate-code-button');
var copyButton = document.querySelector('#copy-code-button');
var codeInput = document.querySelector('#code');

generateButton.addEventListener('click', () => codeInput.value = coder.generate());
copyButton.addEventListener('click', () => { coder.copy(); alert('Código copiado!') });