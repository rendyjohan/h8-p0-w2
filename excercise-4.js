var hari = 1;
var bulan = 5;
var tahun = 1945;

switch (bulan){
    case 1:
        bulan = 'Januari';
        break;

    case 2:
        bulan = 'Februari';
        break;

    case 3:
        bulan = 'Maret';
        break;
        
    case 4:
        bulan = 'April';
        break;
                
    case 5:
        bulan = 'Mei';
        break;

    default:
        bulan = 'Desember';
        break;
                                        
}

console.log(hari + ' ' + bulan + ' ' + tahun);