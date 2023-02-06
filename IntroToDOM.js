// DOM Introduction
// DOM -> Document Object Model
// It is heirarchy of html elements where root is document

// Access Object
var target = document.getElementById("third");
target.innerText = document.getElementById("one").innerText+document.getElementById("two").innerText;
target.style.color = "tomato";

target.style.fontSize = "50px";
target.style.backgroundColor = "cyan";