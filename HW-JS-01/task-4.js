const checkForSpam = function (message) {
    const lowerCaseMessage = message.toLowerCase();

    const prohibitedWords = ['spam', 'sale'];

    for (let word of prohibitedWords) {
        if (lowerCaseMessage.includes(word)) {
            return true;
        }
    }

    return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true