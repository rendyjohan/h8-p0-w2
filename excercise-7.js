// LOOPING - ASTERIK

// 1. Menyusun Barisan Bintang
console.log('SOAL1');
for (var rows1 = 1; rows1 <= 5; rows1 ++) {
    console.log('*');
}
console.log('---------------------------------------');

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('SOAL2');
var rows2 = 5
for (var i = 0; i < rows2; i++) {
	var bintang2 = '';
	for (var j = 0; j < rows2; j++) {
		if (i % 2 === 0) {
			bintang2 += '*';
		} else {
			bintang2 += '*';
		}
	}
	console.log(bintang2);
}
console.log('---------------------------------------');


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('SOAL3');

var rows3 = 4;
for (var i = 1; i <= 5; i++) {
	var bintang3 = '*';
	for (var j = i ; j <= rows3; j++) {
		bintang3 += '*';
	}
	console.log(bintang3);
}

console.log()

