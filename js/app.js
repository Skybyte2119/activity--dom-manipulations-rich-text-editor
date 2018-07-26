/**
 * TASK 1: Add an event listener to the `<button class="rte-italics">`.
 *
 *         When user clicks, it should toggle the `fontStyle` property
 *         value of the `<p class="textbox"></p>` to «italic».
 */

var button = document.querySelector('.rte-italics');
button.addEventListener('click', function(btn){
		if(document.querySelector('.textbox').style.fontStyle === "") {
           document.querySelector('.textbox').style.fontStyle = 'italic';
        } else {
           document.querySelector('.textbox').style.fontStyle = "";
        }
  //       console.log(document.querySelector('.textbox').style.fontStyle);
})

/**
 * TASK 2: Add an event listener to the `<button class="rte-bold"></button>`.
 *
 *         When user clicks, it should toggle the `fontWeight` property
 *         value of the `<p class="textbox"></p>` to 700.
 */

var buttonBold = document.querySelector('.rte-bold');
buttonBold.addEventListener('click', function(){
	console.log(document.querySelector('.textbox').style.fontWeight);
	if (document.querySelector('.textbox').style.fontWeight === "") {
		document.querySelector('.textbox').style.fontWeight = 700;
	} else {
		document.querySelector('.textbox').style.fontWeight = "";
	}
});

/**
 * TASK 3:
 * Add event listeners to the `<button class="rte-fontsize"></button>` elements.
 *
 *         When user clicks, it should change the `fontSize` property of the
 *         `<p class="textbox"></p>` to the value of the button that was clicked.
 */
var buttonItems = document.querySelectorAll('.rte-fontsize');
buttonItems.forEach(function(btn){
	btn.addEventListener('click', function(e){
		var valueText = e.currentTarget.innerText;
		document.querySelector('.textbox').style.fontSize = valueText;
	})
});

/**
 * TASK 4:
 * Add event listener to the `<button class="rte-fontcolor"></button>` elements.
 *
 *         When user clicks, it should take the value from the `data-color`
 *         attribute and set the `color` property of the `<p class="textbox"></p>`
 *
 *         To access data-* attributes
 *         https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */


var buttonFonts = document.querySelectorAll('.rte-fontcolor');
buttonFonts.forEach(function(btn){
	btn.addEventListener('click', function(e){
		var colorTarget = e.currentTarget.dataset.color;
		document.querySelector('.textbox').style.color = colorTarget; 
	});
});

