'use strict'

{

    var i=0;
    var printString;
    var moji="Good for living";
    
    function typetext() {
        document.getElementById("typ").innerText=moji.substring(0,i++);
        if(i<=moji.length) {
            setTimeout("typetext()",100);
        }
    }
}
