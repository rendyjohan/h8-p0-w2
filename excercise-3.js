//Input
var nama = false;
var nama1 = 'Rendy';
var nama2 = 'Johan';
var nama3 = 'Brian';
var nama4 = 'Hari';

var peran = false;
var peran1 = 'Ksatria';
var peran2 = 'Tabib';
var peran3 = 'Penyihir';

//Output untuk Input nama = ' ' dan peran = ' '
nama = true;
if (nama) {
    console.log('Nama harus diisi!');
}
console.log()

//Output untuk Input nama = 'Mikael' dan peran = ''
peran = true;
if (peran) {
    console.log('Halo ' +(nama1)+', Pilih peranmu untuk memulai game!');
}
console.log()

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
var namaKsatria = (nama2 + peran1)
    if (namaKsatria === 'Johan'+'Ksatria') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama2}`);
        console.log(`Halo ${peran1} ${nama2}, kamu dapat menyerang dengan senjatamu!`);
    } else if (namaKsatria === 'Brian'+'Ksatria') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama3}`);
        console.log(`Halo ${peran1} ${nama3}, kamu akan membantu temanmu yang terluka.`);
    } else {
        console.log(`Selamat datang di Dunia Proxytia, ${nama4}`);
        console.log(`Halo ${peran1} ${nama4}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
console.log();

var namaTabib = (nama3 + peran2);
    if (namaTabib === 'Johan'+'Tabib') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama2}`);
        console.log(`Halo ${peran2} ${nama2}, kamu dapat menyerang dengan senjatamu!`);
    } else if (namaTabib === 'Brian'+'Tabib') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama3}`);
        console.log(`Halo ${peran2} ${nama3}, kamu akan membantu temanmu yang terluka.`);
    } else {
        console.log(`Selamat datang di Dunia Proxytia, ${nama4}`);
        console.log(`Halo ${peran2} ${nama4}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
console.log();

var namaPenyihir = (nama4 + peran3);
    if (namaKsatria === 'Johan'+'Penyihir') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama2}`);
        console.log(`Halo ${peran3} ${nama2}, kamu dapat menyerang dengan senjatamu!`);
    } else if (namaTabib === 'Brian'+'Penyihir') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama3}`)
        console.log(`Halo ${peran3} ${nama3}, kamu akan membantu temanmu yang terluka.`);
    } else {
        console.log(`Selamat datang di Dunia Proxytia, ${nama4}`)
        console.log(`Halo ${peran3} ${nama4}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
console.log();
