// Description: This file contains the javascript for the index page
$(document).ready(function () {
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

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

