var randomNumber = Math.floor(Math.random() * 9) + 1;

var randomImage = "pictures/image" + randomNumber + ".jpg";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);