/**
 * Solution 1 - Recursive approach
 *
 * Complexity Analysis
 * O(logN) time | O(n) space
 *
 * Sort a given array of numbers
 *
 * @param {array} array of integers
 * @returns {array} sorted array
 */
function mergeSort(array = []) {
    // Gracefully handle type and Falsy values
    if (Array.isArray(array) === false || array.length === 0) {
        console.error('Parameter should be a valid non-empty array');
        return;
    }

    // Base case
    if (array.length === 1) {
        return array;
    }

    const middleArray = array.length / 2;

    const leftSide = array.splice(0, middleArray); // the first half of the array
    const rightSide = array;

    function merge(leftSide, rightSide) {
        let sortedArray = [];

        while (leftSide.length && rightSide.length) {
            // Insert the smallest element to the sortedArr
            if (leftSide[0] < rightSide[0]) {
                sortedArray.push(leftSide.shift());
            } else {
                sortedArray.push(rightSide.shift());
            }
        }

        return [...sortedArray, ...leftSide, ...rightSide];
    }

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: mergeSort([3, 2, 1, 0]), expected: [0, 1, 2, 3] },
    { assert: mergeSort([4, 6, 1, 9, 2, 4]), expected: [1, 2, 4, 4, 6, 9] },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: mergeSort([0]), expected: [0] },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: mergeSort(), expected: undefined }
];

// Run tests
testCases.forEach((test, index) => {
    const currentTest = `# Test ${index + 1}`;

    console.group(currentTest);
    console.log('Actual: ', test.assert);
    console.log('Expected: ', test.expected);
    console.log(
        JSON.stringify(test.assert) === JSON.stringify(test.expected) ? '🤘 Test PASSED 🤘' : '👎 Test FAILED 👎',
        '\n'
    );
    console.groupEnd(currentTest);
});
