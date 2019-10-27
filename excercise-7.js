// LOOPING - ASTERIK

// 1. Menyusun Barisan Bintang
console.log('SOAL1');
var rows1;
var counterRows1;

rows1 = 5;
counterRows1 = 0;

while (counterRows1<rows1) {
  console.log('*');
  counterRows1++;
}
console.log('---------------------------------------');

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('SOAL2');
var rows2 = 5;

var i=0;
while (i<rows2) {
  var bintang2 = '*';
  var j = 1;
  while (j<rows2) {
    bintang2 = bintang2 + '*';
    j++;
  }
  console.log(bintang2);
  i++;
}
console.log('---------------------------------------');


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('SOAL3');

var rows3 = 5;

var initial = 1;
var i = 0;

while (i<rows3) {
  var bintang3 = '*';
  var j=0;
  while (j<i) {
    bintang3 = bintang3 +'*';
    j++;
  }
  console.log(bintang3);
  i++;
}

