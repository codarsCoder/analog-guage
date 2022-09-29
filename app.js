let line = document.querySelectorAll(".line");
let stick = document.querySelector(".stick");
let monitor = document.querySelector("#monitor");
function inputReset() {
  document.getElementById("deg").value = "";
  document.getElementById("deg").focus();
} inputReset()
function enableInput() {
  document.getElementById("deg").removeAttribute("disabled");
}

line.forEach((item, i) => {
  item.style.transform = `rotate(${i * 10}deg)`;
});

document.getElementById("deg").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    document.getElementById("deg").setAttribute("disabled", "");
    aci(e.target.value);
  }
});

function aci(deg) {
  if (deg > 180) {
    deg = 185;
  } else if (deg < 0) {
    deg = -5;
  }
  renkSifirla();
  stick.style.transform = `rotate(0deg)`;
  stick.style.transform = `rotate(${deg}deg)`;
  line.forEach((item, i) => {
    if (i * 10 <= deg) {
      if (i * 10 < 30) {
        item.classList.add("renk1");
      }
      if (i * 10 >= 30 && i * 10 < 70) {
        item.classList.add("renk2");
      }
      if (i * 10 >= 70 && i * 10 < 89) {
        item.classList.add("renk3");
      }
      if (i * 10 < 135 && i * 10 > 89) {
        item.classList.add("renk3");
      }
      if (i * 10 > 135) {
        item.classList.add("renk5");
      }
    }
    // item.classList.add("renk1");
  });
  count(deg);
  inputReset();
}

function renkSifirla() {
  line.forEach((item) => {
    item.classList.remove("renk1");
    item.classList.remove("renk2");
    item.classList.remove("renk3");
    item.classList.remove("renk4");
    item.classList.remove("renk5");
  });
}
monitor.value = "0 °";
let proviusDeg = 0; // tekrar sıfır yazılırsa counter sıfıra kadar saymayacağı için bir önceki bulunduğu dereceden geriye saydırdık
  function count(deg) {
    if(isNaN(deg)){deg=0 ;  inputReset()} // girilen sayı değilse dereceyi sıfıra eşitle
  let step = Math.round(1500 / deg); // not-1
  if (deg > 180) {
    monitor.value = "max";
   setTimeout(function(){
    enableInput(); inputReset()
   },1500) ;
  
  } else if (deg < 0) {
    monitor.value = "0 °";
    setTimeout(function(){
      enableInput(); inputReset()
    },1500) 
  
  } else if (deg == 0) {
    step = Math.round(1500 / proviusDeg);
    timeleft = proviusDeg;
    let downloadTimerN = setInterval(function () {
      console.log(step, timeleft);
      if (timeleft == 0) {
        clearInterval(downloadTimerN);
      enableInput()
      }
      monitor.value = timeleft + " °";
      timeleft--;
      inputReset();
    }, step);
  } else {
    let downloadTimer = setInterval(function () {
      if (timeleft == deg) {
        clearInterval(downloadTimer);
      enableInput()
        inputReset();
      }
      monitor.value = timeleft + " °";
      timeleft++;
    }, step);
  }

  proviusDeg = deg;
  timeleft = 0;
}

// not-1 :ibre transition ile 1.5 sn de gerçekleşiyor ne olursa olsun ibre hareketi 1.5 sn sürüyor bu yüzden js ile sayımında onun süresine eşit olması gerekiyor yani kaç derece olursa olsun sayım 1.5 snde biröeli bu yüzden  sayım adımı 1500/deg yapıldı böylece ne olursa olsun js de 1.5 sn desayımı bitirecek
