function hitungVolume() {
    // Menggunakan id "inputVariable" sesuai dengan input yang ada di HTML
    const inputSisiElement = document.getElementById("inputVolume"); 
    const hasilPerhitunganElement = document.getElementById("hasilPerhitunganVolume");

    const sisi = parseFloat(inputSisiElement.value);

    if (isNaN(sisi) || sisi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan panjang sisi yang valid (bilangan positif).";
    } else {
        const volume = sisi * sisi * sisi;
        hasilPerhitunganElement.innerText = `Volume kubus dengan sisi ${sisi} adalah ${volume} cm`;
    }
     // Menambahkan penanganan angka negatif
    if (sisi < 0) {
        alert("Tidak dapat melakukan perhitungan dengan angka negatif.");
    }
    
setTimeout(function() {
            hasilPerhitunganElement.innerText = "";
        }, 50000); 
    }
    
