//Reference tip – Nümunə 1
let insan = {
    ad: "Nihad",
    yas: 21,
    seher: "Baki"
};

console.log(insan.ad);
console.log(insan.yas);
console.log(insan.seher);

insan.yas = 22;

console.log("Yeni yas:", insan.yas);

insan.universitet = "AzTU";
console.log(insan);


//Reference tip – Nümunə 2
let reqemler = [5, 10, 15, 20];

console.log(reqemler[0]);
console.log(reqemler[1]);
console.log(reqemler[2]);
console.log(reqemler[3]);

reqemler.push(25);

console.log("Yeni massiv:", reqemler);

reqemler[0] = 100;

console.log("Deyisen massiv:", reqemler);