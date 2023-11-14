$(function() {
    // Creating the player object.
    const player = {
        name: "Player",
        money: 0,
        inventory: new Map(),

        /**
         * Add [amount] of item [id] to the player's inventory. 
         * @param {int}     id      The name of an item in the game. 
         * @param {string}  amount  The amount of item to add, must be >= 0. 
         */
        addItem: function(id, amount) {
            let newAmount = this.inventory.get(id) + amount;
            this.inventory.set(id, newAmount);
        }
    };
});
