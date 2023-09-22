// Fungsi untuk mengubah warna latar belakang
function ubahWarna(warna) {
    const body = document.body;

    switch (warna) {
        case 'biru':
            body.style.backgroundColor = 'blue';
            break;
        case 'darktheme':
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            break;
        case 'hijau':
            body.style.backgroundColor = 'green';
            break;
        case 'abuabu':
            body.style.backgroundColor = 'gray';
            break;
        default:
            body.style.backgroundColor = 'white';
    }
}


