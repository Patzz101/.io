var pics = [
  "4.jpg", //0
  "P1.jpg", //1
  "5.jpg", //2
  "Patzz.jpg", //3
  "7.jpg", //4
  "22.jpg", //5
  "33.jpg", //6
  "44.jpg", //7
  "55.jpg", //8
  "66.jpg" //9
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;
btn.addEventListener("click", function() {
  if (counter === 9) {
    counter = 0;
  }

  img.src = pics[counter];
  counter = counter + 1;
});
