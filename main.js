// NAVBAR
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});


const nav = document.querySelector(".nav-fixed");
window.onscroll = function(){
  var top = window.scrollY;
  if(top > 100){
    nav.classList.add('active')
  }else{
    nav.classList.remove('active')
  }
}

// FORM

const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pickedFDate = document.getElementById("fdate");
var currentDate = new Date()

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  if(name.value == ""){
    alert("Lütfen Hiçbir Alanı Boş Bırakmayınız");
    phone.focus();
    return false;
  }

  if (email.value == "") {
    alert("Lütfen Hiçbir Alanı Boş Bırakmayınız");
    email.focus();
    return false;
  }
  if (phone.value === "") {
    alert("Lütfen Hiçbir Alanı Boş Bırakmayınız");
    phone.focus();
    return false;      
  }
  if (pickedFDate.value < currentDate.value) {
    alert("İleri tarihli bir gün seçiniz");
    return false;
  }

  return true;
};
