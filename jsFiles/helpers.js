/**
 * This file will contain general use functions.
 */

/**
 * Randomly generates a number between min - max (inclusive).
 * @param {number}  max     The upper bound of the number to generate.
 * @param {number}  min     The lower bound of the number to generate.
 * @returns {number}        min <= number <= max.
 */
function randNumInclusive(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}