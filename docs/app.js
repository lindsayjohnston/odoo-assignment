
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

});



document.querySelectorAll('.wrapper').forEach(item =>{
    item.addEventListener('mouseenter', openPopup);
    item.addEventListener('mouseleave', closePopup);
});


function openPopup() {
    //CREATE POPUP
    const popup = document.createElement('div');
    popup.id = 'current-popup';
    const offsetWidth= -1 * (75- .5*(event.target.offsetWidth));
    popup.style.left= offsetWidth + 'px';
    console.log(offsetWidth);
    const name = (event.target.attributes.name.value);
    popup.innerHTML = `
            <div id='inner-popup'>
                <i class="fas fa-times fa-xs" id="exit-popup" style="margin-left: 125px"></i>
                <p id="data-name">${name}</p>
                <button id="plan-btn">Plan Existing</button>
                <button id="create-btn">Create</button>
            </div>`;
    //ADD TO DOM
    event.target.appendChild(popup);
    popup.style.visibility = 'visible';
    document.getElementById('exit-popup').addEventListener('click', closePopup);

};

function closePopup() {
    document.getElementById('current-popup').remove();
};










