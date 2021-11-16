let textDiv = document.querySelector(".text");
let textDiv2 = document.querySelector(".text2");
let text = "WELCOME TO THE NEW WORLD";
let text2 = "OUR WORLD";
let i = 0;
let j = 0;
var t;

function type(){
    if (i < text.length){
        textDiv.innerHTML += text.charAt(i);
        i++;
        t=setTimeout(type, 120);
    } else if (j < text2.length){
        textDiv2.innerHTML += text2.charAt(j);
        j++;
        t=setTimeout(type, 120);
    }
    if (j===text2.length){
        t=setTimeout(clear,3000);
        
    }
    
}

function clear(){
    i=0;
    j=0;
    clearTimeout(t);
    textDiv.innerHTML = "";
    textDiv2.innerHTML = "";
    type();
}

window.addEventListener("load",type)
