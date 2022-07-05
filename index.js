$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this)
            .prev(".accordion-header")
            .find(".fa-solid")
            .addClass("fa-minus")
            .removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse")
        .on("show.bs.collapse", function () {
            $(this)
                .prev(".accordion-header")
                .find(".fa-solid")
                .removeClass("fa-plus")
                .addClass("fa-minus");
        })
        .on("hide.bs.collapse", function () {
            $(this)
                .prev(".accordion-header")
                .find(".fa-solid")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        });
});
