let theScroll= document.querySelector(".scroll");
let height= document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll" , ()=> {
    let scrollT=document.documentElement.scrollTop;
    theScroll.style.width =`${(scrollT / height) *100 }%`;
});