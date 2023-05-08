const titulo1 = document.getElementById("titulo1");
const titulo2 = document.getElementById("titulo2");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");

titulo1.addEventListener("click", trocarTab1);
titulo2.addEventListener("click", trocarTab2);

function trocarTab1() {
  tab2.classList.remove("active");
  tab1.classList.add("active");

  titulo2.classList.remove("active");
  titulo1.classList.add("active");
}

function trocarTab2() {
  tab1.classList.remove("active");
  tab2.classList.add("active");

  titulo1.classList.remove("active");
  titulo2.classList.add("active");
}

console.log(trocarTab1);
