function menuOnclick(){
  document.querySelector('.navbar').style.display = "block";
  document.querySelector('.ri-menu-line').style.display = "none" ;
  document.querySelector('.ri-close-line').style.display = "inline" ;
}
function closeOnclick(){
  document.querySelector('.navbar').style.display = "none";
  document.querySelector('.ri-menu-line').style.display = "inline-block" ;
  document.querySelector('.ri-close-line').style.display = "none" ;
}
