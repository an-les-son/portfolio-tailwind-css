// animasi homepage
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

// hitung visitor

const hitungUrl = 'https://api.countapi.xyz/hit/youtube.com/visitor';
const tampilUrl = 'https://api.countapi.xyz/get/youtube.com/visitor';

fetch(hitungUrl)
      .then(res => res.json())
      .then(data => {
        document.getElementById('counter').innerText = data.value;
      })
      .catch(err => {
        console.error(err);
        document.getElementById('counter').innerText = '72';
      });
