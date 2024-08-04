let counter = 0;
let logo = document.querySelector(".nav__logo");
logo.addEventListener("click",function(){
    setTimeout(function(){
        counter = 0;
    },10000)
    if(counter<8){
        counter=counter+1
    }
    else{
        window.location.href="competion.html";
        counter = 0;
    }
})

