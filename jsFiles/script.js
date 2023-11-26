$(function() {
    /**
     * Player object and functions.
     */

    const player = {
        /**
         * Name - the player's name. Should be a string.
         * Money - the player's money. Should be a number.
         * Inventory - the player's items. Access and change the inventory
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
        name = "Unknown Star";
        sType = "Unknown Type";
        
        /**
         * Setting up the constructor.
         */
        constructor(name) {
            this.name = name;

            // Eventually stars will be randomly generated.
            this.sType = "Main Sequence";
        }

        /**
         * Setter and getter for the name of the star.
         */
        set starName(newName) {
            this.name = newName;
        }

        get starName() {
            return this.name;
        }

        /**
         * Getter for the type of star.
         * 
         * Note: unless something changes, I don't think we would need
         * to make a setter for the star type. It shouldn't change throughout
         * the course of gameplay, so a setter has no function.
         */
        get starType() {
            return this.sType;
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
        name = "Unknown Planet";
        pType = "Unknown Type";
        habitable = false;

        /**
         * Settings up the constructor.
         */
        constructor(name) {
            this.name = name;

            // Eventually planets will be randomly generated.
            this.pType = "Gas Giant";
        }

        /**
         * Setter and getter for name of the planet.
         */
        set planetName(newName) {
            this.name = newName;
        }

        get planetName() {
            return this.name;
        }

        /**
         * Getter for the planet type.
         */
        get planetType() {
            return this.planetType;
        }
    };
});
