$(function() {
    let test = new System();
    test.displaySystem();

    /**
     * TESTING CODE, WILL NOT BE IN FINAL BUILD!
     */
    let div = 360 / 3;
    let radius = $(".star-wrapper").width();
    let totalOffset = (radius / 2) - 25;

    for (let i = 1; i <= 3; ++i) {
        // Creating a new div element.
        let newChild = $("<div></div>").addClass("star");

        // Calculating the proper distance from the system.
        let y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        let x = Math.cos((div * i) * (Math.PI / 180)) * radius;

        // Applying the proper position.
        newChild.css({
            "top": (y + totalOffset).toString() + "px",
            "left": (x + totalOffset).toString() + "px"
        });

        // Appending the new element to the star-wrapper.
        $(".star-wrapper").append(newChild);
    }
});