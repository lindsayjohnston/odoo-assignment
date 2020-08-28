
let popupOpen = false;
$(document).ready(function () {

    let toggledDown = false;

    $("#primary-label").click(function () {
        $("#toggled-data-window").slideToggle();
        if (toggledDown) {
            $(".fa-plus-circle").css({ 'display': 'flex' });
            $(".fa-minus-circle").css({ 'display': 'none' });
            toggledDown = false;
        } else {
            $(".fa-plus-circle").css({ 'display': 'none' });
            $(".fa-minus-circle").css({ 'display': 'flex' });
            toggledDown = true;
        }
    });


    $('body').click(function (e) {
        if (e.target.className == 'tdp' || e.target.className ==
            'td') {
            const name = (e.target.attributes.name.nodeValue);
            const popupName = document.getElementById('data-name');
            popupName.textContent = name;
            const top = e.pageY + 10;
            const left = e.pageX - 75;
            $('#popup').offset({ top: top, left: left }).fadeIn();
            popupOpen = true;
        }
    });
});

