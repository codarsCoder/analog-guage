let line = document.querySelectorAll(".line");
let dene = document.querySelector(".dene");
let monitor = document.querySelector("#monitor");

line.forEach((item, i) => {
  item.style.transform = `rotate(${i * 10}deg)`;
});

document.getElementById("deg").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    aci(e.target.value);
    console.log(e.target.value);
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
      console.log(item);
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
  let k = -5000;
  while (k <= deg) {
    if (k > 180) {
      monitor.value = "max";
    } else if (k < 0){
      monitor.value ="0";
    }else{
      monitor.value = ++k;
    } 
    k ++;
  }
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
