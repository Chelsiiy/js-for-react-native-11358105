const { formatArrayStrings } = require('./arrayManipulation');

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    if (!Array.isArray(names) || !Array.isArray(modifiedNames) || names.length !== modifiedNames.length) {
        throw new Error("Both arguments should be arrays of the same length");
    }

    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

// Example usage
const originalNames = ["Anita", "Beatrice", "Charles"];
const numbers = [1, 2, 3];
const modifiedNames = formatArrayStrings(originalNames, numbers);
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//     { originalName: 'Anita', modifiedName: 'anita', id: 1 },
//     { originalName: 'Beatrice', modifiedName: 'beatrice', id: 2 },
//     { originalName: 'Charles', modifiedName: 'charles', id: 3 }
// ]

module.exports = { createUserProfiles };

