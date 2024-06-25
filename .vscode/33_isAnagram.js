const isAnagram = (word1, word2) => {
    const sortedWord1 = word1.toLowerCase().split("").sort().join("");
    const sortedWord2 = word2.toLowerCase().split("").sort().join("");
    return sortedWord1 === sortedWord2;
}

const checkAndLogAnagram = (word1, word2) => {
    const res = isAnagram(word1, word2);
    if (res) {
        console.log(`The Given Word: "${word1}" and "${word2}" are anagrams.`);
    } else {
        console.log(`The Given Word: "${word1}" and "${word2}" are not anagrams.`);
    }
}

// Example usage with multiple word pairs
const wordPairs = [
    ["vile", "evil"],
    ["silent", "listen"],
    ["gram", "aram"],
    ["mom", "tom"]
];

wordPairs.forEach(pair => {
    checkAndLogAnagram(pair[0], pair[1]);
});
