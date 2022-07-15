/*awalan */
function welcome() {
  document.getElementById("trioption").style.width = "100%";
}
  
function silang() {
  document.getElementById("trioption").style.width = "0%";
}

/*fungsi random hex */
function acakwarna() {
    var simbol, warna;
    simbol = "0123456789ABCDEF";
    warna = "#";
    for(var i =0;i<6;i++){
      warna = warna + simbol[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = warna;
    document.getElementById("code").innerHTML = warna;
}

/*fungsi counter program*/
var result = 0;

function check() {
  if (result >= 0 && result <= 5 ) {
    document.getElementById("hasil").innerHTML = result
    document.querySelector(".tengah").style.backgroundColor = "gray"
  }
  else if (result > 5) {
    document.getElementById("hasil").innerHTML = result
    document.querySelector(".tengah").style.backgroundColor = "greenyellow"
  }
  else if (result < 0 && result >= -5) {
    document.getElementById("hasil").innerHTML = result
    document.querySelector(".tengah").style.backgroundColor = "yellow"
  }
  else if (result < -5 && result > -10) {
    document.getElementById("hasil").innerHTML = result
    document.querySelector(".tengah").style.backgroundColor = "purple"
  }
  else if (result <= -10) {
    document.getElementById("hasil").innerHTML = result
    alert("back to home again!");
    document.getElementById(" ").innerHTML = window.location.href = "home.html";
  }
}
function countertambah() {
  result+=1
  check()
}
function counterkurang() {
  result-=1
  check()
}
//fungsi balik ke home.html
function balik() {
  alert("back to home again!");
  document.getElementById(" ").innerHTML = window.location.href = "home.html";
}