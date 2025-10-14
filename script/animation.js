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

function getVisitorData() {
      let data = localStorage.getItem("visitorData");
      return data ? JSON.parse(data) : { count: 0 };
    }

    function saveVisitorData(data) {
      localStorage.setItem("visitorData", JSON.stringify(data));
    }

    let visitorData = getVisitorData();

    visitorData.count += 1;

    saveVisitorData(visitorData);

    document.getElementById("counter").textContent = visitorData.count;

    
function updateClock() {
      const now = new Date();

      // Format waktu 
      const jam = now.getHours().toString().padStart(2, "0");
      const menit = now.getMinutes().toString().padStart(2, "0");
      const detik = now.getSeconds().toString().padStart(2, "0");

      // Format tanggal
      const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
      const tanggal = now.toLocaleDateString('en-US', options);

      // Tampilkan ke elemen HTML
      document.getElementById("clock").textContent = `${jam}:${menit}:${detik}`;
      document.getElementById("date").textContent = tanggal;
    }

    // Jalankan setiap detik
    setInterval(updateClock, 1000);
    updateClock(); // panggil pertama kali

