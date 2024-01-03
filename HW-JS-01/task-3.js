const formatString = function (string) {
    // Check if the length of the string exceeds 40 characters
    if (string.length > 40) {
        // Truncate the string to 40 characters and append '...'
        return string.slice(0, 37) + '...';
    } else {
        // Return the original string
        return string;
    }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// original string will be returned

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// return a formatted string

console.log(formatString('Curabitur ligula sapien.'));
// original string will be returned

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique Curabitur a felis in nunc fringilla tristique Curabitur a felis in nunc fringilla tristique'
    )
);