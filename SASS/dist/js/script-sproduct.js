const mainIMG = document.getElementById("mainIMG");
const variableImages = document.getElementsByClassName("img");

variableImages[0].onclick = function () {
  mainIMG.src = variableImages[0].src;
};
variableImages[1].onclick = function () {
  mainIMG.src = variableImages[1].src;
};
variableImages[2].onclick = function () {
  mainIMG.src = variableImages[2].src;
};
variableImages[3].onclick = function () {
  mainIMG.src = variableImages[3].src;
};

