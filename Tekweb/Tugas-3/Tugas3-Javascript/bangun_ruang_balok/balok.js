function hitungVolumeBalok() {
    // Menggunakan id untuk mengakses input
    const panjang = parseFloat(document.getElementById("panjangBalok").value);
    const lebar = parseFloat(document.getElementById("lebarBalok").value);
    const tinggi = parseFloat(document.getElementById("tinggiBalok").value);

    const hasilPerhitunganElement = document.getElementById("hasilPerhitunganVolumeBalok");

    if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan panjang, lebar, dan tinggi yang valid (bilangan positif).";
    } else {
        const volume = panjang * lebar * tinggi;
        hasilPerhitunganElement.innerText = `Volume balok dengan panjang ${panjang}, lebar ${lebar}, dan tinggi ${tinggi} adalah ${volume} cm`;
    }

    // Menambahkan penanganan angka negatif
    if (panjang < 0 || lebar < 0 || tinggi < 0) {
        alert("Tidak dapat melakukan perhitungan dengan angka negatif.");
    }

    setTimeout(function () {
        hasilPerhitunganElement.innerText = "";
    }, 30000);
}
