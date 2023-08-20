let index = 0;
​
controls(index);
​
function controls(i) {
  index += i;
​
  let images = document.getElementsByClassName("im");
  let dots = document.getElementsByClassName("dot");
​
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
​
  if (index > images.length - 1) {
    index = 0;
  }
​
  if (index < 0) {
    index = images.length - 1;
  }
​
  images[index].style.display = "block";
  dots[index].className += " active";
}
​
document.querySelector(".right").addEventListener("click", function() {controls(1)});
​
document.querySelector(".left").addEventListener("click", function () {controls(-1)});