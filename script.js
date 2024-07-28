
let scrollcontainer=document.querySelector(".gallery")
let backBtn=document.querySelector(".back")
let nextBtn=document.querySelector(".next")

scrollcontainer.addEventListener("wheel",(ev)=>
{
    ev.preventDefault();
    scrollcontainer.style.scrollBehavior="auto"
    scrollcontainer.scrollLeft += ev.deltaY;             
    // The deltaY property returns a positive value when scrolling down, 
    // and a negative value when scrolling up, otherwise 0.
    
})

nextBtn.addEventListener("click",()=>
{
    scrollcontainer.style.scrollBehavior="smooth"
    scrollcontainer.scrollLeft+=300;
})

backBtn.addEventListener("click",()=>
{
    scrollcontainer.style.scrollBehavior="smooth"
    scrollcontainer.scrollLeft-=300;
})

