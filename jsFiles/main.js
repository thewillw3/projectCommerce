$(function() {
    let test = new System();
    test.displaySystem();

    // Function to change Goku's form
    const ssj = {
        val: 0,
        transform() {
            let goku = ["img/ssjgoku.png", "img/ssggoku.png", "img/ssgssgoku.png"];

            if (this.val != goku.length) {
                $("#goku").attr("src", goku[this.val++]);
            }
        }
    }

    $("#goku").click(() => {ssj.transform()});
});