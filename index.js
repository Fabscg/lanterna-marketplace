$("button").on('click', function(){
    var panelId = $(this).attr('data-content');
    $('#'+panelId).toggle(500);

    $(this).find('.panel-icon').text(function(_, txt) {
        return txt === "+" ? "-" : "+";
    });
});
