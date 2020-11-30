$(document).ready(function () {

    $(".boundary").mouseover(function () {
        $(".boundary").addClass("youlose");
        $("#status").text("Sorry you lose! :[");
    });

//    $(".boundary").mouseout(function () {
//        
//    });

    $("#end").mouseover(function () {
        $("#status").text("You win! :]");
    });

    $("#start").click(function () {
        $(".boundary").removeClass("youlose");
        
        $("#status").text("Click the \"S\" to begin.");

//        $("maze").not("div.boundary").mouseover(function () {
//            $(".boundary").addClass("youlose");
//        });

    });



//    // boundary 2
//    $("#boundary2").mouseover(function () {
//        $(this).addClass("youlose");
//    });
//
//    $("#boundary2").mouseout(function () {
//        $(this).removeClass("youlose");
//    });
//    // end
//
//    // boundary 3
//    $("#boundary3").mouseover(function () {
//        $(this).addClass("youlose");
//    });
//    $("#boundary3").mouseout(function () {
//        $(this).removeClass("youlose");
//    });
//    // end
//
//    // boundary 4
//    $("#boundary4").mouseover(function () {
//        $(this).addClass("youlose");
//    });
//
//    $("#boundary4").mouseout(function () {
//        $(this).removeClass("youlose");
//    });
//    // end
//
//    // boundary 5
//    $("#boundary5").mouseover(function () {
//        $(this).addClass("youlose");
//    });
//
//    $("#boundary5").mouseout(function () {
//        $(this).removeClass("youlose");
//    });
    // end


});