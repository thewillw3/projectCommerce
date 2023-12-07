/**
 * Celestial Object class. Star, Planet, and System will extend this.
 */
class Celestial {
    /**
     * name - name of any given object.
     * type - either star type or planet type.
     * size - size in pixels to be displayed.
     * color - color to be displayed.
     */
    #name = "Unknown Object";
    #type = "Unknown";
    #size = 0;
    #color = "#fff";

    /**
     * Setter and getter for the name.
     */
    set celName(newName) {
        this.#name = newName;
    }

    get celName() {
        return this.#name;
    }

    /**
     * Setter and getter for the type.
     */
    set celType(newType) {
        this.#type = newType;
    }

    get celType() {
        return this.#type;
    }

    /**
     * Setter and getter for the size.
     */
    set celSize(newSize) {
        this.#size = newSize;
    }

    get celSize() {
        return this.#size;
    }

    /**
     * Setter and getter for the color.
     */
    set celColor(newColor) {
        this.#color = newColor;
    }

    get celColor() {
        return this.#color;
    }
}


/**
 * Class for star creation.
 */
class Star extends Celestial {
    // sClass - if the star is a main sequence star, it will have a class.
    #sClass = "Unknown Class";
    
    /**
     * #NONSEQUENCE - an array containing all special stellar objects.
     * #MAINSEQUENCE - an array containing all classes a main sequence star can be.
     */
    static #NONSEQUENCE = ["Neutron Star", "White Dwarf", "Black Hole"];
    static #MAINSEQUENCE = ["M", "K", "G", "F", "A", "B", "O"];

    // Percentage bound for each class of star.
    static #MCLASSPER = 0.765;
    static #KCLASSPER = 0.886;
    static #GCLASSPER = 0.962;
    static #FCLASSPER = 0.992;
    static #ACLASSPER = 0.998;
    static #BCLASSPER = 0.9993;

    // Size of each class of star in pixels.
    static #WDSIZE = 20;
    static #MSIZE = 30;
    static #KSIZE = 35;
    static #GSIZE = 40;
    static #FSIZE = 45;
    static #ASIZE = 50;
    static #BSIZE = 55;
    static #OSIZE = 75;

    // Hex color code of each star.
    static #WDCOLOR = "#c1ccde";
    static #MCOLOR = "#f56c49";
    static #KCOLOR = "#f58349";
    static #GCOLOR = "#f7be5c";
    static #FCOLOR = "#fad28e";
    static #ACOLOR = "#a3c0e3";
    static #BCOLOR = "#8fafe3";
    static #OCOLOR = "#7aa0de";
    
    /**
     * The constructor for a new star. Star type will be generated here.
     * @param {string} name The name to be assigned to the star. 
     */
    constructor(name) {
        // Calling the super constructor.
        super();

        // Setting the name of the star.
        this.celName = name;

        // Generating a random percentage.
        let randPercent = Math.random();

        // 90% of stars are main sequence stars.
        if (randPercent <= 0.9) {
            // Set this as a main sequence star.
            this.celType = "Main Sequence";

            // Generate a class for the star.
            randPercent = Math.random();

            // Determining star class.
            switch (true) {
                case randPercent < Star.#MCLASSPER:
                    // 76.5% of all stars will be M class.
                    this.#sClass = Star.#MAINSEQUENCE[0];
                    this.celSize = Star.#MSIZE;
                    this.celColor = Star.#MCOLOR;
                    break;
                case randPercent < Star.#KCLASSPER:
                    // 12.1% of all stars will be K class.
                    this.#sClass = Star.#MAINSEQUENCE[1];
                    this.celSize = Star.#KSIZE;
                    this.celColor = Star.#KCOLOR;
                    break;
                case randPercent < Star.#GCLASSPER:
                    // 7.6% of all stars will be G class.
                    this.#sClass = Star.#MAINSEQUENCE[2];
                    this.celSize = Star.#GSIZE;
                    this.celColor = Star.#GCOLOR;
                    break;
                case randPercent < Star.#FCLASSPER:
                    // 3% of all stars will be F class.
                    this.#sClass = Star.#MAINSEQUENCE[3];
                    this.celSize = Star.#FSIZE;
                    this.celColor = Star.#FCOLOR;
                    break;
                case randPercent < Star.#ACLASSPER:
                    // 0.6% of all stars will be A class.
                    this.#sClass = Star.#MAINSEQUENCE[4];
                    this.celSize = Star.#ASIZE;
                    this.celColor = Star.#ACOLOR;
                    break;
                case randPercent < Star.#BCLASSPER:
                    // 0.13% of all stars will be B class.
                    this.#sClass = Star.#MAINSEQUENCE[5];
                    this.celSize = Star.#BSIZE;
                    this.celColor = Star.#BCOLOR;
                    break;
                default:
                    // Roughly 0.07% of all stars will be O class.
                    this.#sClass = Star.#MAINSEQUENCE[6];
                    this.celSize = Star.#OSIZE;
                    this.celColor = Star.#OCOLOR;
                    break;
            }
        } else {
            // Generate a non-sequence star.
            randPercent = Math.floor(Math.random() * Star.#NONSEQUENCE.length);

            switch (randPercent) {
                case 0:
                    // Neutron Star.
                    this.celType = Star.#NONSEQUENCE[0];
                    break;
                case 1:
                    // White Dwarf.
                    this.celType = Star.#NONSEQUENCE[1];
                    this.celSize = Star.#WDSIZE;
                    this.celColor = Star.#WDCOLOR;
                    break;
                case 2:
                    // Black Hole.
                    this.celType = Star.#NONSEQUENCE[2];
                    break;
                default:
                    // In case something breaks.
                    console.log("Special star was unable to be created.");
                    break;
            }
        }
    }

    /**
     * Returns a boolean value depending upon if the stellar object is not a main sequence star.
     * @returns {bool}  Returns true if the current stellar object is considered special.
     */
    isSpecial() {
        return Star.#NONSEQUENCE.includes(this.celType);
    }

    /**
     * This version of displayStar will take in an x and y coordinate to display a
     * star at. If no arguments are passed, then it will display the star in the
     * middle of the screen.
     * @param {number} x        Horizontal position to place the new star at. 
     * @param {number} y        Vertical position to place the new star at. 
     * @param {number} radius   Radius of point to center stars around.
     * @param {tag}    parElem  Parent element to attach a star to.
     */
    displayStar(x, y, radius, parElem) {
        if (!arguments.length) {
            /**
             * This is my janky ass way of overloading the function.
             * If no parameters are passed, the function will display
             * the star in the middle of the screen.
             */

            // Creating a new div element.
            let newChild = $("<div></div>").addClass("star");
    
            // Applying size, color, glow, and position.
            newChild.css({
                "width": this.celSize.toString() + "px",
                "background-color": this.celColor,
                "box-shadow": "0 0 20px " + this.celColor,
                "top": "50%",
                "right": "50%",
                "transform": "translateX(50%) translateY(-50%)"
            });
            
            // Adding the new child to the star-wrapper.
            $(".center-point").append(newChild);

            return;     
        }

        // Calculating the total offset using the current star's size.
        let totalOffset = (radius / 2) - (this.celSize / 2);

        // Creating a new div element.
        let newChild = $("<div></div>").addClass("star");

        // Applying size, color, glow, and positioning.
        newChild.css({
            "width": this.celSize.toString() + "px",
            "background-color": this.celColor,
            "box-shadow": "0 0 20px " + this.celColor,
            "top": (y + totalOffset).toString() + "px",
            "left": (x + totalOffset).toString() + "px"
        });
            
        // Appending the new element to the star-wrapper.
        parElem.append(newChild);
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
        if (this.celType === Star.#NONSEQUENCE[1] || this.celType === "Main Sequence") {
            return true;
        }

        return false;
    }

    /**
     * Returns the object as a string.
     * @returns {string}    A string formatted as "name: sType (sClass)"
     */
    toString() {
        let starInfo = this.celName + ": " + this.celType;

        if (!this.isSpecial()) {
            starInfo += " (" + this.#sClass + ")";
        }

        return starInfo;
    }
}

/**
 * Class for planet creation.
 */
class Planet extends Celestial {
    /**
     * habitable - whether or not the player can inhabit the planet. Boolean.
     */
    #habitable = false;

    /**
     * The constructor for new planets. Planet type will be generated here.
     * @param {string} name The name to be assigned to the planet. 
     */
    constructor(name) {
        // Calling the super constructor.
        super();

        this.celName = name;

        // Eventually planets will be randomly generated.
        this.celType = "Gas Giant";
    }
}

/**
 * Class for system creation.
 */
class System extends Celestial {
    /**
     * stars - an array containing all stars in the current system.
     * planets - an array containing all planets in the current system.
     */
    #stars = [];
    #planets = [];

    // Bounds for minimum stars and maximum stars.
    static #MIN_STARS = 1;
    static #MAX_STARS = 3;

    // Bounds for minimum planets and maximum planets.
    static #MIN_PLANETS = 0;
    static #MAX_PLANETS = 8;

    // Creating variables for the different system types.
    static #ONESTAR = "Unary Star System";
    static #TWOSTAR = "Binary Star System";
    static #THREESTAR = "Trinary Star System";

    /**
     * The constructor for systems.
     * Currently generates stars and planets along with properly assigning the system type.
     * If the system generates a special stellar object, then the system will only contain
     * that special object (excluding the White Dwarf, systems will generate as per usual).
     */
    constructor() {
        // Calling the super constructor.
        super();

        // Establish the name for the system.
        this.celName = randomName(3);

        // Establishing the suffix letter to be added to the end of a star / planet.
        let letter = "A";

        // Generating a random number of stars.
        let numOfStars = randNumInclusive(System.#MAX_STARS, System.#MIN_STARS);

        // Defining the system type properly.
        switch (numOfStars) {
            case 1:
                this.celType = System.#ONESTAR;
                break;
            case 2:
                this.celType = System.#TWOSTAR;
                break;
            case 3:
                this.celType = System.#THREESTAR;
                break;
            default:
                console.log("Star value for system is not valid.");
                break;
        }

        for (let i = 0; i < numOfStars; ++i) {
            // Setting the name of the current star.
            let curStarName = this.celName + " " + letter;
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
                this.#stars[0].starName = this.celName + " A*";

                // Redefining the system type.
                this.celType = this.#stars[0].celType;

                // Breaking out of this loop.
                break;
            }
        }

        // Sorting stars based off of size in descending order.
        this.#stars.sort((a, b) => b.celSize - a.celSize);

        // Planets will not be generated around Neutron Stars or Black Holes.
        if (this.#stars[0].isStar()) {
            // Changing the suffix letter to be in line with planet naming conventions.
            letter = "b";

            // Generating a random number of planets.
            let numOfPlanets = randNumInclusive(System.#MAX_PLANETS, System.#MIN_PLANETS);

            for (let i = 0; i < numOfPlanets; ++i) {
                // Setting the name of the current planet.
                let curPlanetName = this.celName + " " + letter;
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
     * Currently only works for stars, but will display the number
     * of stars in the center of the website.
     */
    displaySystem() {
        // Creating the center point in which everything will orbit.
        let cenPoint = $("<div></div>").addClass("center-point");
        $("body").append(cenPoint);

        if (this.#stars.length === 1) {
            // If only one star exists within the system, display it.
            this.#stars[0].displayStar();
        } else {
            let startPoint = (this.#stars.length === 3) ? 1 : 0;

            // If trinary system, then display a star in the middle of the system.
            if (startPoint) {
                this.#stars[0].displayStar();
            }

            // Creating the orbit for multiple stars.
            let starOrbit = $("<div></div>").addClass("orbit");
            cenPoint.append(starOrbit);

            // Dividing a circle into equal parts depending on how many stars there are.
            let div = 180;
            
            // Getting the width of the center-point.
            let radius = $(".center-point").width();

            // Iterate through the stars to get their appropriate size.
            for (let i = startPoint; i < this.#stars.length; ++i) {
                // Calculating the proper distance from center-point.
                let y = Math.sin((div * i) * (Math.PI / 180)) * (radius);
                let x = Math.cos((div * i) * (Math.PI / 180)) * (radius);

                // Displaying the star.
                this.#stars[i].displayStar((x * 1.75), (y * 1.75), radius, starOrbit);
            }
        }
    }
}