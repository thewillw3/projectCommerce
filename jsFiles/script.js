$(function() {
    /**
     * General use functions.
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

    /**
     * Player object and functions.
     */

    const player = {
        /**
         * name - the player's name. Should be a string.
         * money - the player's money. Should be a number.
         * inventory - the player's items. Access and change the inventory
         * through the provided methods in the object.
         */
        name: "Player",
        money: 0,
        inventory: new Map(),

        /**
         * Setter and getter for the player's name.
         */
        set uName(newName) {
            this.name = newName;  
        },

        get uName() {
            return this.name;
        },

        /**
         * Setter and getter for the player's money.
         */
        set uMoney(amount) {
            this.money = amount;
        },

        get uMoney() {
            return this.money;
        },

        /**
         * Adds [amount] of money to player's money count.
         * @param {number} amount   Amount of money to add, must be >= 0. 
         */
        addMoney: function(amount) {
            this.money += amount;
        },

        /**
         * Removes [amount] of money from the player's money count.
         * @param {number} amount   Amount of money to remove, must be >= 0.
         */
        removeMoney: function(amount) {
            this.money = this.money - amount;
        },

        /**
         * Adds [amount] of item [id] to the player's inventory. 
         * @param {string}  id      The name of an item in the game. 
         * @param {number}  amount  The amount of item to add, must be >= 0. 
         */
        addItem: function(id, amount) {
            if (this.inventory.has(id)) {
                amount += this.inventory.get(id);
            }

            this.inventory.set(id, amount);
        },

        /**
         * Removes [amount] of item [id] to the player's inventory. 
         * @param {string}  id      The name of an item in the game. 
         * @param {number}  amount  The amount of item to remove, must be >= 0. 
         */
        removeItem: function(id, amount) {
            if (this.inventory.has(id)) {
                amount = this.inventory.get(id) - amount;
            }

            this.inventory.set(id, amount);
        },

        /**
         * Quickly obtains the number of item [id] the player has.
         * @param {string}  id  The name of an item in the game.
         * @returns {number}    The number of [id] in the player's inventory.
         */
        getItem: function(id) {
            return this.inventory.get(id);
        }
    };

    /**
     * Class for star creation.
     */
    class Star {
        /**
         * Name - the star's name. Should be a string.
         * sType - the star's type. Will be a string from a list of star types.
         */
        #name = "Unknown Star";
        #sType = "Unknown Type";
        
        /**
         * The constructor for a new star. Star type will be generated here.
         * @param {string} name The name to be assigned to the star. 
         */
        constructor(name) {
            this.#name = name;

            // Eventually stars will be randomly generated.
            this.#sType = "Main Sequence";
        }

        /**
         * Setter and getter for the name of the star.
         */
        set starName(newName) {
            this.#name = newName;
        }

        get starName() {
            return this.#name;
        }

        /**
         * Getter for the type of star.
         * 
         * Note: unless something changes, I don't think we would need
         * to make a setter for the star type. It shouldn't change throughout
         * the course of gameplay, so a setter has no function.
         */
        get starType() {
            return this.#sType;
        }
    };

    /**
     * Class for planet creation.
     */
    class Planet {
        /**
         * Name - the name of the planet. Should be a string.
         * pType - the planet's type. Should be a string.
         * habitable - whether or not the player can inhabit the planet. Boolean.
         */
        #name = "Unknown Planet";
        #pType = "Unknown Type";
        #habitable = false;

        /**
         * The constructor for new planets. Planet type will be generated here.
         * @param {string} name The name to be assigned to the planet. 
         */
        constructor(name) {
            this.#name = name;

            // Eventually planets will be randomly generated.
            this.#pType = "Gas Giant";
        }

        /**
         * Setter and getter for name of the planet.
         */
        set planetName(newName) {
            this.#name = newName;
        }

        get planetName() {
            return this.#name;
        }

        /**
         * Getter for the planet type.
         */
        get planetType() {
            return this.#pType;
        }
    };

    /**
     * Class for system creation.
     */
    class System {
        /**
         * name - the name of the current system.
         * stars - an array containing all stars in the current system.
         * planets - an array containing all planets in the current system.
         */
        #name = "Unknown System";
        #stars = [];
        #planets = [];

        // Bounds for minimum stars and maximum stars.
        static #MIN_STARS = 1;
        static #MAX_STARS = 3;

        // Bounds for minimum planets and maximum planets.
        static #MIN_PLANETS = 0;
        static #MAX_PLANETS = 8;

        /**
         * The constructor for systems.
         * Will randomly generate a name for itself, stars, and planets.
         */
        constructor() {
            // Establish the name for the system.
            this.#name = "Test System";

            // Establishing the suffix letter to be added to the end of a star / planet.
            let letter = "A";

            // Generating a random number of stars.
            let numOfStars = randNumInclusive(System.#MAX_STARS, System.#MIN_STARS);

            for (let i = 0; i < numOfStars; i++) {
                // Setting the name of the current star.
                let curStarName = this.#name + " " + letter;
                letter = String.fromCharCode(letter.charCodeAt(0) + 1);

                // Adding the new star to the system's array of stars.
                this.#stars.push(new Star(curStarName));
            }

            // Changing the suffix letter to be in line with planet naming conventions.
            letter = "b";

            // Generating a random number of planets.
            let numOfPlanets = randNumInclusive(System.#MAX_PLANETS, System.#MIN_PLANETS);

            for (let i = 0; i < numOfPlanets; i++) {
                // Setting the name of the current planet.
                let curPlanetName = this.#name + " " + letter;
                letter = String.fromCharCode(letter.charCodeAt(0) + 1);

                // Adding the new planet to the system's array of planets.
                this.#planets.push(new Planet(curPlanetName));
            }
        }

        /**
         * Display function.
         * Currently only displays system to the console.
         */
        displaySystem() {
            console.log("Stars in system: ");

            for (let curStar of this.#stars) {
                console.log(curStar.starName);
            }

            console.log("Planets in system: ");

            for (let curPlanet of this.#planets) {
                console.log(curPlanet.planetName);
            }
        }
    };

    // Create new system and print it to console.
    let test = new System();
    test.displaySystem();
});
