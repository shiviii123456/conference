var header=document.querySelector("header");
console.log(header)

window.addEventListener("scroll",function(){
    
    if(window.scrollY>0){
       header.style.padding="1rem"
    }
    else{
        header.style.padding="2rem"
        header.style.background="white"
    }
})
