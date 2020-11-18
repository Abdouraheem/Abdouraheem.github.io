/* global ANIMATIONS */
var index = 0;
var interval;
var myText = "";
var myTab;
$(document).ready(function () {

    $("#start").click(function () {

        $(this).prop('disabled', true);
        $("#stop").prop('disabled', false);

        speed = 250;

        if ($("#speed").attr("checked")) {
            speed = 50;
        } else {
            speed = 250;
        }

        animate();

    });

    $("#stop").click(function () {

        setAnimationText();
        setSize();

        $(this).prop('disabled', true);
        $("#start").prop('disabled', false);
        //clearInterval(interval);


    });



    function animate(speed) {

        mytext = $("#textArea").val();
        mytab = mytext.split("=====");
        interval = setInterval(setFrame(index, mytab), speed);
    }



});


function setFrame(index, frames) {
    if (index < frames.length)
        $("#textArea").val(frames[index]);
    if (index >= frames.length)
        index = 0;
}

function setAnimationText() {
    animation = $("#animation").val();
    $("#textArea").val(ANIMATIONS[animation]);
}

function setSize() {
    size = $("#size").val();
    textSize = 12;
    if (size === "Tiny")
        textSize = 7;
    if (size === "Small")
        textSize = 10;
    if (size === "Medium")
        textSize = 12;
    if (size === "Large")
        textSize = 16;
    if (size === "Extra")
        textSize = 24;
    if (size === "XXL")
        textSize = 32;
    $("#textArea").css("font-size", textSize);

}