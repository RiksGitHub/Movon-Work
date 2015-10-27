
function RikFunction() { // Invoked when body is resized (and once when body is loaded)
    var w = window.outerWidth; // Expressed as number of pixels
    var h = window.outerHeight; // Expressed as number of pixels
    var headerpicdiv = document.getElementById("headerpic"); // De header movon instituut plaatje div (required for centering)
    var headerpic = headerpicdiv.getElementsByTagName("img"); // Collectie van alle (1) plaatjes (die we willen varieren)

//Changing picture for different windowsize:
	if (w < 598) {
		headerpic[0].src = "images/header_narrow.png"; headerpicdiv.style.maxWidth="550px"; // test test test
	} //
	else if (w >= 598,w < 968) {
		headerpic[0].src = "images/header.png"; headerpicdiv.style.maxWidth="912px"; // test test test
	} //
	else if (w >= 968,w < 1200) {
		headerpic[0].src = "images/header.png"; headerpicdiv.style.maxWidth="912px"; // test test test
	} //
	else {
		headerpic[0].src = "images/header.png"; headerpicdiv.style.maxWidth="912px"; // test test test
	} // 
}

/* Note to self:
// 1 vw = 1/100 viewport width (like 1%) 1 vh = 1/100 viewport height (only IE9+ though)
*/

// Functies voor het omzetten van een procentuele breedte/hoogte naar pixels:
// http://ejohn.org/blog/getboundingclientrect-is-awesome/
// parseFloat(x) parses a string and returns a floating point number
// toFixed(x) determines x digits after the comma
function getWidth(elem) { return parseFloat(elem.getBoundingClientRect().right - elem.getBoundingClientRect().left).toFixed(0);}
function getHeight(elem) { return parseFloat(elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top).toFixed(0);}
