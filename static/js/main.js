function setupGridster() {
    $(".gridster div.stickies").gridster({
        widget_selector: "div.stickies div",
        widget_margins: [10, 10],
        widget_base_dimensions: [137, 137],
        min_cols: 6,
        extra_rows: 6
    });

}

function setupStickyAdd() {
    function addSticky(color) {
        var gridster = $('.gridster div.stickies').gridster().data('gridster');
        var randomCol = Math.floor(Math.random() * 2) + 3;
        var sticky = $('<div>');
        if (color.toString() == "pink") {
            sticky.addClass('pink');
            gridster.add_widget(sticky, 1, 1, 1, 1);
        }
        if (color.toString() == "orange") {
            sticky.addClass('orange');
            gridster.add_widget(sticky, 1, 1, 2, 1);
        }
        if (color.toString() == "yellow") {
            sticky.addClass('yellow');
            gridster.add_widget(sticky, 1, 1, randomCol, 1);
        }
        if (color.toString() == "green") {
            sticky.addClass('green');
            gridster.add_widget(sticky, 1, 1, randomCol + 2, 1);
        }


    }

    $('header ul.nav li a').click(function () {
        var color = $(this).attr('class');
        addSticky(color);
    });
}

function setupStickyEdit() {
    function exitEdit() {
        var textarea = $(this);
        var text = textarea.val();
        var p = $('<p>').text(text);
        textarea.after(p);
        textarea.remove();
    }


    $(document).on('dblclick', 'div.gs_w', function () {
        var inputField = $('<textarea id="note">');
        var text = $(this).text().trim();
        inputField.text(text);
        $(this).html(inputField);
        inputField.focus();

        inputField.focusout(exitEdit);
    });
}


$(document).ready(function () {
    setupGridster();
    setupStickyAdd();
    setupStickyEdit();
});
