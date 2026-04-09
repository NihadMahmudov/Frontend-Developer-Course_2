/*
//modfy elements clasnemae & atribute
let exp=document.getElementById("x")
exp.classList.add("y")
exp.classList.remove("y")
console.log(exp)

let p = document.getElementById("x");

// mousedown - fare tuşuna basılınca
p.addEventListener("mousedown", function() {
    p.style.backgroundColor = "orange";
    console.log("Fare tuşuna basıldı");
});

// mouseup - fare tuşu bırakılınca
p.addEventListener("mouseup", function() {
    p.style.backgroundColor = "";
    console.log("Fare tuşu bırakıldı");
});

// mouseenter - fare elemente girince
p.addEventListener("mouseenter", function() {
    p.style.border = "2px solid blue";
    console.log("Fare elemente girdi");
});

// mouseleave - fare elementten çıkınca
p.addEventListener("mouseleave", function() {
    p.style.border = "";
    console.log("Fare elementten çıktı");
});
*/

let btn = document.getElementById("checkBtn");
let result = document.getElementById("result");

btn.addEventListener("click", function() {
    let age = Number(document.getElementById("ageInput").value);

    if (age < 18) {
        result.textContent = "Size prava düşmür";
        
    } else {
        result.textContent = "Size prava düşür";
        
    }
});
