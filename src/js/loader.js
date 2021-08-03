$(window).on("load", function() {
    if ($("#loader").length) {
        $("#loader")
            .delay(800)
            .fadeOut("slow", function() {
                $(this).remove();
            });
    }
});
