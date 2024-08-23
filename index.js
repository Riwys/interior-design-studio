"use strict";

/********* Images absent before scrolling *********/
window.onload = function() {
	let images = document.getElementById('firstImageToAppear');
	console.log('onload running');
	let coords = firstImageToAppear.getBoundingClientRect();
	console.log('coords fine');
	if (coords.top > document.documentElement.clientHeight) {
		console.log('greater running');
		let images = document.getElementsByClassName('image')
		for ( let image of images) {
		image.classList.add('removeImages');
		}
		let landscapeImage = document.getElementsByClassName('landscape-image');
		landscapeImage[0].classList.add('removeImages');
	}
}
	

/********* Images slide in ***************/
window.addEventListener('scroll', function(){
	console.log('running scroll');
	let imageToAppear = document.getElementById('firstImageToAppear');
	console.log('onscroll running');
	let coords = imageToAppear.getBoundingClientRect();
	console.log('coords fine');
	
	if (coords.top <= document.documentElement.clientHeight - ((document.documentElement.clientHeight * 18)/100)) {
		console.log(coords.top + '<=' + document.documentElement.clientHeight + 'minus' + ((document.documentElement.clientHeight * 18)/100));
		imageToAppear.classList.add('slideIt');
		  imageToAppear = document.getElementById('secondImageToAppear');
		  console.log('second onscroll running');
		  coords = imageToAppear.getBoundingClientRect();
		  console.log('second coords fine');
		  
		  if (coords.top <= document.documentElement.clientHeight - ((document.documentElement.clientHeight * 18)/100)) {
			  console.log(coords.top + '<=' + document.documentElement.clientHeight + 'minus' + ((document.documentElement.clientHeight * 18)/100));
			  imageToAppear.classList.add('slideIt');
			    imageToAppear = document.getElementById('thirdImageToAppear');
			    console.log('third onscroll running');
			    coords = imageToAppear.getBoundingClientRect();
			    console.log('third coords fine');

			    if (coords.top <= document.documentElement.clientHeight - ((document.documentElement.clientHeight * 18)/100)) {
			    	console.log(coords.top + '<=' + document.documentElement.clientHeight + 'minus' + ((document.documentElement.clientHeight * 18)/100));
			    	imageToAppear.classList.add('slideIt');
			    	imageToAppear = document.getElementById('fourthImageToAppear');
			    	console.log('fourth onscroll running');
			    	coords = imageToAppear.getBoundingClientRect();
			    	console.log('fourth coords fine');

			    	if (coords.top <= document.documentElement.clientHeight - ((document.documentElement.clientHeight * 18)/100)) {
			    	console.log(coords.top + '<=' + document.documentElement.clientHeight + 'minus' + ((document.documentElement.clientHeight * 18)/100));
			    	imageToAppear.classList.add('slideIt');
					}
		        }
		 }
	}
});


/********** Button when clicked takes to a section *************/
let buttonArray = document.documentElement.getElementsByClassName('button-space');
let button = buttonArray[0];
button.addEventListener("click", function() {
	let formArray = document.documentElement.getElementsByClassName('form-container');
	let form = formArray[0];
	console.log(form);
	form.scrollIntoView();
});

