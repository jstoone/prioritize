function setupGridster(){
    $(".gridster div.stickies").gridster({
        widget_selector: "div.stickies div",
        widget_margins: [10, 10],
        widget_base_dimensions: [201, 201]
    });
}



function setupStickyEdit() {
    function exitEdit(){
        var textarea = $(this);
        var text = textarea.val();
        var p = $('<p>').text(text);
        textarea.after(p);
        textarea.remove();

    }


    $('.gridster div.stickies div').dblclick(function(e){
        var inputField = $('<textarea id="note">');
        var text = $(this).text().trim();
        inputField.text(text);
        $(this).html(inputField);
        inputField.focus();

        inputField.focusout(exitEdit);
    });
}


$(document).ready(function(){
    setupGridster();

    setupStickyEdit();
});
