let line = document.querySelectorAll(".line");
let dene = document.querySelector(".dene");
let monitor = document.querySelector("#monitor");
monitor.value = 0;
line.forEach((item, i) => {
  item.style.transform = `rotate(${i * 10}deg)`;
});

document.getElementById("deg").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
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
  dene.style.transform = `rotate(0deg)`;
  dene.style.transform = `rotate(${deg}deg)`;
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
  count(deg)
  document.getElementById("deg").value = "";
  document.getElementById("deg").focus();
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

// setTimeout(aci(),4000)
let proviusStep =0;
function count(deg){
  let step=0;
  if((proviusStep-deg) > 100){
    step = 100 // not-1   aşağıda 
  }else{
    deg < 100 ? step = 10 : step = 6  // not-2
  }
 
  if (deg > 180) {
    monitor.value = "max";
  } else if (deg < 0){
    monitor.value ="0 °";
  }else{
   
  let downloadTimer = setInterval(function(){
    if(timeleft == deg){
      clearInterval(downloadTimer);
     
    }
    monitor.value  =  timeleft+" °";
    timeleft ++ ;
  }, step);
   timeleft = 0;
   proviusStep=deg; // bir önceki derece çok yüksekse düşük dereceye dönerken çok vakit alıyor bunu kontrol içn önceki adımdaki dereceyi aldık
} 
}

 // not-1 : sayım js ile ibrenin geri ileri hareketi css transition ile -- şimdiki ve önceki derecelerin fark 100 den büyükse ibre yüz küsür kadar geriye giderken sayım sıfırdan başlayıp küçük bir mikTARDA SAYIM YAPACAK DEMEKETİR BU YÜZEN  sıfırdan sayım ile ibrenin geriye gidişini eşitlemek için sayım adımını geciktiriyoruz 

 // not-2 sayılacak değer 100den küçükse daha hızlı sayılacağı için ibreyle eşitlemek için sayım adımını büyüttük