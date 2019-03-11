// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked

// "el" stands for the "element" that was just clicked
var wrongSound = document.getElementById('wrong');
var rightSound = document.getElementById('goal');
function removeClass(el){
	el.classList.remove("pats-silver");
}
function beach2(el){
	document.getElementById("beach_pic").src =("image/beach.jpg");
	document.getElementById("grey_box").src =("image/beach.jpg");
}

a = document.getElementById("correct");
b = document.getElementById("correct1");


function greenImage(el){
	document.getElementById("correct").src =("images/soccergoall.png");
	if (el.src.match=("images/soccergoall.png")){
		document.getElementById("key").classList.remove("hidekey");
		document.getElementById("key").classList.add("show");
		rightSound.play();
	} else {
	}
}

function redImage(el){
	el.src =("images/redx.png");
    if (el.src.match=("images/redx.png")){
		wrongSound.play();
	} else {
	}
}

