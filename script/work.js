// click info description
// UI/UX

const uiux01 = document.querySelector(".uiux01");
const info_desc = document.querySelector(".info-desc");

uiux01.addEventListener("click", function() {
    info_desc.classList.remove("hidden");
});


// close button info description

const btn_cls = document.querySelector(".btn-cls");

btn_cls.addEventListener("click", function() {
    info_desc.classList.add("hidden");
  });