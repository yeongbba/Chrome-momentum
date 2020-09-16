const imgBox = document.querySelector("body");
const bgImg = document.querySelector(".backimg");

let divAspect = window.innerHeight / window.innerWidth; // div의 가로세로비는 알고 있는 값이다
let imgAspect = bgImg.height / bgImg.width;

if (imgAspect <= divAspect) {
  // 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
  var imgWidthActual = imgBox.offsetHeight / imgAspect;
  var imgWidthToBe = imgBox.offsetHeight / divAspect;
  var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2);
  bgImg.style.cssText =
    "width: auto; height: 100%; margin-left: " + marginLeft + "px;";
} else {
  // 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
  bgImg.style.cssText = "width: 100%; height: auto; margin-left: 0;";
}
