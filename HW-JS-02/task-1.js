const movies = {
    action: ["Die Hard", "John Wick", "The Matrix"],
    comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
    drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
    horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],
    getMoviesByGenre: function (genre) {
        return this[genre] || [];
    }
};

console.log(movies.getMoviesByGenre("action")); // ["Die Hard", "John Wick", "The Matrix"]
console.log(movies.getMoviesByGenre("comedy")); // ["The Hangover", "Bridesmaids", "Step Brothers"]
console.log(movies.getMoviesByGenre("romance")); // []