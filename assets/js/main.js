//Offside.js minimal setup
var myOffside = offside( '#nav', {
    slidingElementsSelector:'#content',
    buttonsSelector: '#toggle, .another-button',
    slidingSide: 'right',
});

var navLinks = document.querySelectorAll(".nav_list_item");
navLinks.forEach(function(element) {
    element.addEventListener("click", function() {
        myOffside.close();
    })
});