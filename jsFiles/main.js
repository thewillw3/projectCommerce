$(function() {
    let test = new System();
    test.displaySystem();

    $("#goku").click(function() {
        $("#goku").attr("src", "../img/ssjgoku.png");
    });
});