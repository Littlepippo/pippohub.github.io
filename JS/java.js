
//SIDEBAR

var sideBarB1 = document.getElementById("arrow1");
var sideBarB2 = document.getElementById("arrow2");

var sidenav = document.getElementById("sidenav")

sideBarB1.onclick = function(){ if(sidenav.style.right == "0"){sidenav.style.right = "-300";}

else{sidenav.style.right = "0";}}

sideBarB2.onclick = function(){ if(sidenav.style.right == "-300px"){sidenav.style.right = "0";}

else{sidenav.style.right = "-300px";}}

//SEARCH BAR

var sideBa1 = document.getElementById("fwdsearch");
var sideBa2 = document.getElementById("bksearch1");

var searchnav = document.getElementById("searchnav")

var search1= document.getElementById("fwdsearch")

var search2 = document.getElementById("bksearch1");

sideBa1.onclick = function(){a();b();c()}

function a(){if(searchnav.style.right == "-1000px"){searchnav.style.right = "0";}
else{searchnav.style.right = "0";}}

function b(){search1.style.right = "-100";}

function c(){search2.style.right = "10";}

sideBa2.onclick = function(){d();e();f()}

 function d(){ if(searchnav.style.right == "0"){searchnav.style.right= "-1000";}
else{searchnav.style.right= "-1000";}}

 function e(){search2.style.right = "-100";}

function f(){search1.style.right = "10";}
 


//SWITCH
var color1 =document.getElementById("switch")
var switch1 =document.getElementById("switch")

 //switch
 
switch1.onclick=function whole(){g();h()}

function g(){if(switch1.style.marginLeft=="0px"){switch1.style.marginLeft="15px";}
else{switch1.style.marginLeft="0px";}}

function h(){if(color1.style.marginLeft=="0px"){color1.style.backgroundColor="white"}
else{color1.style.backgroundColor="#521AB7"}}

var color2 =document.getElementById("switch2")
var switch2 =document.getElementById("switch2")


switch2.onclick=function whole(){i();j()}

function i(){if(switch2.style.marginLeft=="0px"){switch2.style.marginLeft="15px";}
else{switch2.style.marginLeft="0px";}}

function j(){if(color2.style.marginLeft=="0px"){color2.style.backgroundColor="white"}
else{color2.style.backgroundColor="#521AB7"}}


var color3 =document.getElementById("switch3")
var switch3 =document.getElementById("switch3")


switch3.onclick=function whole(){k();l()}

function k(){if(switch3.style.marginLeft=="0px"){switch3.style.marginLeft="15px";}
else{switch3.style.marginLeft="0px";}}

function l(){if(color3.style.marginLeft=="0px"){color3.style.backgroundColor="white"}
else{color3.style.backgroundColor="#521AB7"}}

var color4 =document.getElementById("switch4")
var switch4 =document.getElementById("switch4")


switch4.onclick=function whole(){m();n()}

function m(){if(switch4.style.marginLeft=="0px"){switch4.style.marginLeft="15px";}
else{switch4.style.marginLeft="0px";}}

function n(){if(color4.style.marginLeft=="0px"){color4.style.backgroundColor="white"}
else{color4.style.backgroundColor="#521AB7"}}

//pop up
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction1() {
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show1");
}