let reveal = document.querySelectorAll(".reveal");
let height = window.innerHeight;
const revealElements = () => {
    for(var i = 0; i < reveal.length; i++) {        
        let revealUp = reveal[i].getBoundingClientRect().top;  
        if (revealUp < height - 100){
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealElements);