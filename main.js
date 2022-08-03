const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const txt1 = document.getElementById('txt1');
const dia = document.getElementById('dia');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();
  let day = dateToday.getDay();
  let month = dateToday.getMonth() + 1;
  let ano = dateToday.getFullYear();
  let img = window.document.getElementById('img-main');
  let mobile = window.document.getElementById('img-mobile');

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  horas.textContent = `${hr}:`;
  minutos.textContent = `${min}:`;
  segundos. textContent = s;

  if (hr >= 0 &&  hr < 12) {
    txt1.textContent = 'Bom dia! Agora são';
    img.src = "assets/manha.png";
    document.body.style.backgroundImage = "url('assets/bg-manha.png')";
    mobile.src = "assets/manha-mobile.png";
  } else if (hr >= 12 && hr <= 18) {
    txt1.textContent = 'Boa tarde! Agora são';
    img.src = "assets/tarde.png";
    document.body.style.backgroundImage = "url('assets/bg-tarde.png')";
    mobile.src = "assets/tarde-mobile.png";
  } else {
    txt1.textContent = 'Boa noite! Agora são';
    img.src = "assets/noite.png";
    document.body.style.backgroundImage = "url('assets/bg-noite.png')";
    mobile.src = "assets/noite-mobile.png";
  }

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  dia.textContent = `${day}/${month}/${ ano}`;
  
})


