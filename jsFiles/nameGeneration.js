/**
 * This module will provide all random name generation. It works off of a Markov Chain.
 */

// Dictionary of possible syllables.
const syllables = ["a", "ae", "ar", "mis", "ra", "te", "tra"];

/**
 * An object containing all possible syllable transitions and their probability.
 */
const transitions = {
    "a": [{next: "a", probability: 0.2}, {next: "tra", probability: 0.8}],
    "ae": [{next: "ra", probability: 0.2}, {next: "mis", probability: 0.8}],
    "ar": [{next: "te", probability: 0.7}, {next: "a", probability: 0.3}],
    "mis": [{next: "te", probability: 0.4}, {next: "tra", probability: 0.6}],
    "ra": [{next: "mis", probability: 0.7}, {next: "te", probability: 0.3}],
    "te": [{next: "ra", probability: 0.5}, {next: "mis", probability: 0.5}],
    "tra": [{next: "a", probability: 0.4}, {next: "te", probability: 0.6}]
}

/**
 * This function takes in a syllable and gets the next valid syllable.
 * @param {string}      syllable    Any syllable that exists within the syllables array.
 * @returns {string}                If the function runs as expected, a proper transition
 *                                  variable will be chosen. If something goes wrong, it
 *                                  will just return the current syllable.
 */
function getNextSyllable(syllable) {
    // Getting the possible transitions for the current syllable.
    let possibleTransitions = transitions[syllable];

    // Setting up a storage variable for total probability and generating a probability.
    let totalProb = 0;
    let prob = Math.random();

    // Looping through the transitions.
    for (let transition of possibleTransitions) {
        totalProb += transition.probability;

        // If the total probability is greater than the random
        // probability, then return the current next syllable.
        if (prob <= totalProb) {
            return transition.next;
        }
    }

    // If something goes wrong, just return the current syllable.
    return syllable;
}

/**
 * This function makes use of the getNextSyllable function to generate a random name.
 * @param {number}      syllableCount   The amount of syllables in the generated word.
 * @returns {string}                    A word containing [syllableCount] syllables.
 */
function randomName(syllableCount) {
    // Starting with a random syllable.
    let curName = syllables[Math.floor(Math.random() * syllables.length)];
    let curSyllable = curName;

    // Looping through the process.
    for (let i = 0; i < (syllableCount - 1); ++i) {
        let nextSyllable = getNextSyllable(curSyllable);
        curName += nextSyllable;
        curSyllable = nextSyllable;
    }

    // Modifying the string to have an uppercase name.
    let finName = curName[0].toUpperCase() + curName.slice(1); 

    // Return the final string.
    return finName;
}