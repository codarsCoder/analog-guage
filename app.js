let line = document.querySelectorAll(".line");
let dene = document.querySelector(".dene");

line.forEach((item, i) => {
  item.style.transform = `rotate(${i * 10}deg)`;
});

document.getElementById("deg").addEventListener("change", (e) => {
  aci(e.target.value);
  console.log(e.target.value);
});

function aci(deg) {
  if(deg > 180){
    deg= 185;
  }
  renkSifirla();
  dene.style.transform = `rotate(0deg)`;
  dene.style.transform = `rotate(${deg}deg)`;
  line.forEach((item, i) => {
    if (i * 10 <= deg) {
      console.log(item);
      item.classList.add("renk");
    }
  });
}

function renkSifirla() {
  line.forEach((item) => {
    item.classList.remove("renk");
  });
}

// setTimeout(aci(),4000)
