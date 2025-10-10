const name = document.getElementById("cname");
const phone = document.getElementById("phone");
const require = document.getElementById("require");
const job_desc = document.getElementById("jobdesc");
const send = document.querySelector(".send-email");

send.addEventListener("click", function() {
    const to = "anjar.les.son@gmail.com";
    const subject = encodeURIComponent("Hiring for "+(require.value));
    const body = encodeURIComponent("Halo, Anjar\n\nName : "+(name.value)+"\nPhone : "+(phone.value)+"\n\nI am currently looking for a professional to help me with my project "+(require.value)+"\nJob description of the project :\n"+(job_desc.value)+"\n\nBest regards,\n"+(name.value));

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  });