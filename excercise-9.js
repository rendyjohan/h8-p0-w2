
//Mengenal Penggunaan Function
//Tugas 1
//BUATLAH KODE FUNCTION DISINI


console.log('Tugas 1')

function shoutOut() {
    console.log('Halo Function!'); // Menampilkan "Halo Function!" di console
}
shoutOut();

console.log('----------------------------');
console.log();

//Tugas 2
//BUATLAH KODE FUNCTION DISINI
console.log('Tugas 2')

function calculateMultiply(num1, num2){
    return num1 * num2
}
console.log(calculateMultiply(5,6));

console.log('----------------------------');
console.log();


//Tugas 3
// BUATLAH KODE FUNCTION DISINI
console.log('Tugas 3')

// var name = "Agus";
// var age = 30;
// var address = "Jln. Malioboro, Yogjakarta";
// var hobby = "gaming";

// var fullSentence = processSentence(name,age,address,hobby);
// console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

function processSentence(name,age,address,hobby){
    return name + age + address + hobby
}
console.log(processSentence('Nama saya Agus, ', 'umur saya 30 tahun, ' , 'alamat saya di Jln. Malioboro, Yogjakarta, ' , 'dan saya punya hobby yaitu gaming!'));