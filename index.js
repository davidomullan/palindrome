module.exports = Phrase;


// Adds 'Reverse a string' functionality to strings
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

// Define a Phrase object
function Phrase(content) {
	this.content = content;

	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}

	this.letters = function letters() {
		let theLetters = [];
		for (let i = 0; i < this.content.length; i++) {
			if (this.content.charAt(i).match(/[a-zA-Z]/)) {
				theLetters.push(this.content.charAt(i));
			}
		}
		return theLetters.join("");
	}
}