// exercise no 2
const number = 11;
const result = number % 2 

console.log( result == 0 ? 'even number' : 'odd number' );

// exercise no 3 membuat bilangan ini prima atau bukan
// cth 2, 3,5,7,11,13,..,
let pembagi = 0;
let numb = 7;

for(let i = 1; i <= numb; i++)//1.2.3.4.5.6.7
{
    if( numb % i === 0){
        pembagi++
    }
}
console.log(pembagi == 2 ?'Prime Number':'not prime number' );

// menemukan jumlah hasil dari angka yg di cari
// cth 5 == 1+2+3+4+5
let n = 20
let resultt = 0

for(let i = 1; i<= n ; i++)// 1,2,3,4,5
{ resultt += i

}
console.log(resultt);

// mencari bilangan perkalian menurun
// cth 6 = 6*5*4*3*2*

let nilai = 12;
let hasilAkhir = 1;

for (let i = nilai; i > 0; i--)//6,5,4,3,2,1
 {
    hasilAkhir *= i
    
}
console.log(hasilAkhir);

// Mencari bilangan fibonaci
// 0 1 1 2 3 5 8 13 21 24 ..,

let nn = 15;
let a = 0;
let b = 1;
let nextNumbr = 0 
for (let i = 1; i < nn; i++) {
    nextNumbr = a + b;
    a = b 
    b = nextNumbr;    
}  
console.log(b);
