let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
    var newWindow = window.open("", "Pencerinin adi", "width=250,height=200")
    newWindow.document.write(fname.value + lname.value)

})