var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight= "0px";
function menutoggle(){
  if(MenuItems.style.maxHeight== "0px") {
    MenuItems.style.maxHeight = "200px";
}
  else{
    MenuItems.style.maxHeight= "0px";
  }
}

var icon = document.getElementById("icon");
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src= "images/sun.png";            
  }
  else{
    icon.src = "images/moon.png";
  }
}