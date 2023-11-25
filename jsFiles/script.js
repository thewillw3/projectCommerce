$(function() {
    /**
     * Player object and functions.
     */

    // Creating the player object.
    const player = {
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
});
