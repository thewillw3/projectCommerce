$(function() {
    let test = new System();
    test.displaySystem();

    let num = 0;

    // Function to change Goku's form
    $("#goku").click(function() {
        let goku = ["img/ssjgoku.png", "img/ssggoku.png", "img/ssgssgoku.png"];
        if(num === goku.length){
            return;
        }
        $("#goku").attr("src", goku[num]);
        num++;
    });
});