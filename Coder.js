/**
 * Coder.js
 * 
 * Objecto responsável pelas operações de um gerador de códigos
 * 
 */

const coder = {

	code: '',

	charNumber: 6,

	chars: [
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-', '#', '@', '$', '1', '2', '3', '4', '5', '6', '7', '8', '9'
	],

	generateChar: function() {
		return this.chars[
			Math.floor(
				Math.random() * this.chars.length
			)
		];
	},

	generate: function () {
		for (let i = 1; i <= this.charNumber; i++) {
			this.code = i == 1 ? this.generateChar() : this.code + this.generateChar();
		}

		return this.code;
	},

};