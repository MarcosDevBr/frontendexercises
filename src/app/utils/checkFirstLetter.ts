function checkIfTheFirstLetterIsUppercase(word: string): boolean {
    if (!word) return false;
    return word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase();
}

export default checkIfTheFirstLetterIsUppercase;