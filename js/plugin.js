let ScrollDown= document.getElementById('scroll-d');
let ScrollUp = document.getElementById('scroll-u');
let landing = document.querySelector(('.landing'));

ScrollDown.addEventListener('click',()=>{
   
   landing.scrollBy(0, 500);
   
});
ScrollUp.addEventListener('click',()=>{
    
   landing.scrollBy(0, -600);
   
})
function MouseEnter(){
    ScrollDown.style.animation='anim 1s infinite';
    ScrollUp.style.animation='animTwo 1s infinite';
}
function mouseLeave() {
    ScrollDown.style.animation='none';
    ScrollUp.style.animation='none';
}


////
setInterval(imgLand,5000)

function imgLand(){    
    let showDivT= document.querySelector('.t')
    showDivT.classList.add('imgland')
}
/////
// sec-two animation 
    let showSecONe = document.querySelector('.sec-one-row');
    let showSecONePose = showSecONe.getBoundingClientRect().top;
    
    const observer= new IntersectionObserver((enteries)=>{
        enteries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                entry.target.classList.add('fade-in');
            }
            else{
                entry.target.classList.remove('show');
                entry.target.classList.remove('fade-in');

            }
        })

    })
    const effectOne = document.querySelectorAll('.effect-one');
    const effectTwo = document.querySelectorAll('.effect-two')
    effectOne.forEach((e) => observer.observe(e))
    effectTwo.forEach((e) => observer.observe(e))
    ///
   

    const fadOut= document.querySelectorAll('.fade-out');
    fadOut.forEach((e)=> observer.observe(e))
////////////////