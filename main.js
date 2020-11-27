// NAVBAR
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const button = document.getElementById('button')


toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  button.className = 'visiblebtn'
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
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const fDate = document.getElementById("fdate");
const lDate = document.getElementById("ldate");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  
const nameValue = name.value.trim();
const emailValue = email.value.trim();
const phoneValue = phone.value.trim();
const fDateValue = fDate.value;
const lDateValue = lDate.value;

var msec = Date.parse(fDateValue);
var currentDate = new Date();
var msecCurrentDate = Date.parse(currentDate)


if(nameValue === ""){
  setErrorFor(name,'Adınızı ve Soyadınızı Giriniz');
}else{
  setSuccessFor(name)
}

if(emailValue === ""){
  setErrorFor(email,'Emailinizi Giriniz');
} else if(!isEmail(emailValue)){
setErrorFor(email,'Geçerli Email Giriniz')
} else{
  setSuccessFor(email);
}

if(phoneValue === ""){
  setErrorFor(phone,'Telefon Numaranızı Giriniz');
}else{
  setSuccessFor(phone)
}

if(msec - msecCurrentDate <= 0){
  setErrorFor(fdate, 'Lütfen İleri Tarih Seçiniz');
}else if(fDateValue === ""){
  setErrorFor(fdate, 'Lütfen Tarih Seçiniz');
}else{
  setSuccessFor(fdate);
}

if(lDateValue === ""){
  setErrorFor(ldate, 'Lütfen Tarih Seçiniz');
}else{
  setSuccessFor(ldate);
}

};

function setErrorFor(input, message){
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = 'form-group error col-sm-12 col-md-6 col-lg-4';
   small.innerText = message;
}
function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-group success col-sm-12 col-md-6 col-lg-4';
}
function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

