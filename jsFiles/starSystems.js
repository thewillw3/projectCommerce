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
 * Class for star creation.
 */
class Star {
    /**
     * Name - the star's name. Should be a string.
     * sType - the star's type. Will be a string from a list of star types.
     */
    #name = "Unknown Stellar Object";
    #sType = "Main Sequence";
    #sClass = "Unknown Class";
    
    /**
     * #NONSEQUENCE - an array containing all special stellar objects.
     * #MAINSEQUENCE - an array containing all classes a main sequence star can be.
     * #MCLASSPER - percentage bound that a star will be M class.
     * #KCLASSPER - percentage bound that a star will be K class.
     * #GCLASSPER - percentage bound that a star will be G class.
     * #FCLASSPER - percentage bound that a star will be F class.
     * #ACLASSPER - percentage bound that a star will be A class.
     * #BCLASSPER - percentage bound that a star will be B class.
     */
    static #NONSEQUENCE = ["Neutron Star", "White Dwarf", "Black Hole"];
    static #MAINSEQUENCE = ["M", "K", "G", "F", "A", "B", "O"];
    static #MCLASSPER = 0.765;
    static #KCLASSPER = 0.886;
    static #GCLASSPER = 0.962;
    static #FCLASSPER = 0.992;
    static #ACLASSPER = 0.998;
    static #BCLASSPER = 0.9993;
    
    /**
     * The constructor for a new star. Star type will be generated here.
     * @param {string} name The name to be assigned to the star. 
     */
    constructor(name) {
        // Setting the name of the star.
        this.#name = name;

        // Generating a random percentage.
        let randPercent = Math.random();

        // 90% of stars are main sequence stars.
        if (randPercent < 0.90) {
            // Generate a class for the star.
            randPercent = Math.random();

            // Determining star class.
            switch (true) {
                case randPercent < Star.#MCLASSPER:
                    // 76.5% of all stars will be M class.
                    this.#sClass = Star.#MAINSEQUENCE[0]
                    break;
                case randPercent < Star.#KCLASSPER:
                    // 12.1% of all stars will be K class.
                    this.#sClass = Star.#MAINSEQUENCE[1];
                    break;
                case randPercent < Star.#GCLASSPER:
                    // 7.6% of all stars will be G class.
                    this.#sClass = Star.#MAINSEQUENCE[2];
                    break;
                case randPercent < Star.#FCLASSPER:
                    // 3% of all stars will be F class.
                    this.#sClass = Star.#MAINSEQUENCE[3];
                    break;
                case randPercent < Star.#ACLASSPER:
                    // 0.6% of all stars will be A class.
                    this.#sClass = Star.#MAINSEQUENCE[4];
                    break;
                case randPercent < Star.#BCLASSPER:
                    // 0.13% of all stars will be B class.
                    this.#sClass = Star.#MAINSEQUENCE[5];
                    break;
                default:
                    // Roughly 0.07% of all stars will be O class.
                    // This is actually more favorable than realistic odds.
                    this.#sClass = Star.#MAINSEQUENCE[6];
                    break;
            }
        } else {
            // Generate a non-sequence star.
            this.#sType = Star.#NONSEQUENCE[Math.floor(Math.random() * Star.#NONSEQUENCE.length)];
        }
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

    /**
     * Getter for star class.
     */
    get starClass() {
        return this.#sClass;
    }

    /**
     * Returns a boolean value depending upon if the stellar object is not a main sequence star.
     * @returns {bool}  Returns true if the current stellar object is considered special.
     */
    isSpecial() {
        return Star.#NONSEQUENCE.includes(this.#sType);
    }

    /**
     * Returns a boolean value depending on whether or not a stellar object is considered a star.
     * @returns {bool}  Returns true if the current object is a star.
     */
    isStar() {
        /**
         * Note: So I wrote this function because White Dwarves walk the line of being a star,
         * but not being a main sequence star. They can exist with other stars, so I decided to
         * just write this function for system generation.
         */
        if (this.#sType === Star.#NONSEQUENCE[1] || this.#sType === "Main Sequence") {
            return true;
        }

        return false;
    }

    /**
     * Returns the object as a string.
     * @returns {string}    A string formatted as "name: sType (sClass)"
     */
    toString() {
        let starInfo = this.#name + ": " + this.#sType;

        if (!this.isSpecial()) {
            starInfo += " (" + this.#sClass + ")";
        }

        return starInfo;
    }
}

/**
 * Class for planet creation.
 */
class Planet {
    /**
     * name - the name of the planet. Should be a string.
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
}

/**
 * Class for system creation.
 */
class System {
    /**
     * name - the name of the current system.
     * sysType - the type of star system.
     * stars - an array containing all stars in the current system.
     * planets - an array containing all planets in the current system.
     */
    #name = "Unknown System";
    #sysType = "Unknown System";
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
     * Currently generates stars and planets along with properly assigning the system type.
     * If the system generates a special stellar object, then the system will only contain
     * that special object (excluding the White Dwarf, systems will generate as per usual).
     */
    constructor() {
        // Establish the name for the system.
        this.#name = "Test System";

        // Establishing the suffix letter to be added to the end of a star / planet.
        let letter = "A";

        // Generating a random number of stars.
        let numOfStars = randNumInclusive(System.#MAX_STARS, System.#MIN_STARS);

        // Defining the system type properly.
        switch (numOfStars) {
            case 1:
                this.#sysType = "Unary Star System";
                break;
            case 2:
                this.#sysType = "Binary Star System";
                break;
            case 3:
                this.#sysType = "Trinary Star System";
                break;
            default:
                this.#sysType = "Unknown Star System";
                break;
        }

        for (let i = 0; i < numOfStars; i++) {
            // Setting the name of the current star.
            let curStarName = this.#name + " " + letter;
            letter = String.fromCharCode(letter.charCodeAt(0) + 1);

            // Adding the new star to the system's array of stars.
            this.#stars.push(new Star(curStarName));

            /**
             * If the current object that was just generated is not considered a star,
             * then it will exist on its own.
             */
            if (!this.#stars[i].isStar()) {
                // Removing all other stellar objects.
                while (this.#stars.length != 1) {
                    this.#stars.shift();
                }

                // Renaming the main object.
                this.#stars[0].starName = this.#name + " A*";

                // Redefining the system type.
                this.#sysType = this.#stars[0].starType;

                // Breaking out of this loop.
                break;
            }
        }

        // Planets will not be generated around Neutron Stars or Black Holes.
        if (this.#stars[0].isStar()) {
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
    }

    /**
     * Getter for number of planets in system.
     */
    get planetNum() {
        return this.#planets.length;
    }

    /**
     * Display function.
     * Currently only displays system to the console.
     */
    displaySystem() {
        
        console.log(this.#name + " (" + this.#sysType + ") \n" + "Stars in system: ");

        for (let curStar of this.#stars) {
            console.log(curStar.toString());
        }

        console.log(this.planetNum + " planets in system: ");

        for (let curPlanet of this.#planets) {
            console.log(curPlanet.planetName);
        }
    }
}