//js

//LOADING SCREEN///////////////////
$(window).on("load", function () {
    $("#loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        clearForm();
    })
})
