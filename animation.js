const text = document.querySelector(".animation-text").children;
textLen = text.length;
let index = 0;

function animationText() {
    for (let i = 0; i < textLen; i++) {
       text[i].classList.add("hidden");
    }
    text[index].classList.remove("hidden");
    if(index == textLen-1){
        index=0;
    }
    else {
        index++;
    }

    setTimeout(animationText, 2000);
}

window.onload=animationText();