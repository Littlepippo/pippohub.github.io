var serif =document.getElementById("pressy");

var serif1 =document.getElementById("serif1");
var serif2 =document.getElementById("serif2");

var serif3 =document.getElementById("serif3");

serif.onclick= function(){S101(),S102(),S103();S00();S01(),S02(),S03()}

function S00(){if(serif1.style.fontFamily=="serif"){serif.style.background="#521AB7"}
else{serif.style.background=""}}

function S01(){monospace.style.background=""}

function S02(){font1.style.background=""}

function S03(){font2.style.background=""}




function S101(){if(serif1.style.fontFamily!="serif"){serif1.style.fontFamily="serif"}
else{serif1.style.fontFamily=""}
}

function S102(){if(serif2.style.fontFamily!="serif"){serif2.style.fontFamily="serif"}
else{serif2.style.fontFamily=""}
}

function S103(){if(serif3.style.fontFamily!="serif"){serif3.style.fontFamily="serif"}
else{serif3.style.fontFamily=""}
}

//MONOSPACE
var monospace =document.getElementById("pressy2");

monospace.onclick= function(){M101(),M102(),M103(),M00(),M01(),M02(),M03()}

function M00(){if(serif1.style.fontFamily=="monospace"){monospace.style.background="#521AB7"}
else{monospace.style.background=""}}

function M01(){serif.style.background=""}

function M02(){font1.style.background=""}

function M03(){font2.style.background=""}



function M101(){if(serif1.style.fontFamily!="monospace"){serif1.style.fontFamily="monospace"}
else{serif1.style.fontFamily=""}
}

function M102(){if(serif2.style.fontFamily!="monospace"){serif2.style.fontFamily="monospace"}
else{serif2.style.fontFamily=""}
}

function M103(){if(serif3.style.fontFamily!="monospace"){serif3.style.fontFamily="monospace"}
else{serif3.style.fontFamily=""}
}



//NEW FONt

var font1 =document.getElementById("pressy3");

font1.onclick= function(){N101(),N102(),N103(),N00(),N01(),N02(),N03()}

function N01(){serif.style.background=""}

function N02(){monospace.style.background=""}

function N03(){font2.style.background=""}

function N00(){if(serif1.style.fontFamily=="test"){font1.style.background="#521AB7"}
else{font1.style.background=""}}

function N101(){if(serif1.style.fontFamily!="test"){serif1.style.fontFamily="test"}
else{serif1.style.fontFamily=""}
}

function N102(){if(serif2.style.fontFamily!="test"){serif2.style.fontFamily="test"}
else{serif2.style.fontFamily=""}
}

function N103(){if(serif3.style.fontFamily!="test"){serif3.style.fontFamily="test"}
else{serif3.style.fontFamily=""}
}

//NEW FONT2

var font2 =document.getElementById("pressy4");

font2.onclick= function(){O101(),O102(),O103(),O00(),O01(),O02(),O03()}

function O01(){serif.style.background=""}

function O02(){monospace.style.background=""}

function O03(){font1.style.background=""}


function O00(){if(serif1.style.fontFamily=="test2"){font2.style.background="#521AB7"}
else{font2.style.background=""}}

function O101(){if(serif1.style.fontFamily!="test2"){serif1.style.fontFamily="test2"}
else{serif1.style.fontFamily=""}
}

function O102(){if(serif2.style.fontFamily!="test2"){serif2.style.fontFamily="test2"}
else{serif2.style.fontFamily=""}
}

function O103(){if(serif3.style.fontFamily!="test2"){serif3.style.fontFamily="test2"}
else{serif3.style.fontFamily=""}
}
