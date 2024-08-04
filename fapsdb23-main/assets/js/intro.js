let intro  = document.querySelector(".intro");
let logo_bits = document.querySelectorAll(".logo_bits");
let header  = document.querySelector(".header")
header.style.display = "none";
let flag =0;
if (flag==0) {
    window.addEventListener("DOMContentLoaded",()=>{
        setTimeout(()=>{
            logo_bits.forEach((span,index) => {
                setTimeout(()=>{
                    span.classList.add('active');
                },(index)*500)
            });
            setTimeout(() => {
                logo_bits.forEach((span,index) => {
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add("fade")
                    },index*400)
                }); 
            },3000);
            setTimeout(() => {
                intro.style.top = "-100vh";
            },4900);
            setTimeout(() => {
                header.style.display = "block";
            },5300);
        },)
        flag=1;
    })
}