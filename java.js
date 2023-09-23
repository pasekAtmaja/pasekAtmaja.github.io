function perhitungan() {
    var jenisPerhitungan = document.getElementById("jenisPerhitungan").value;
    var fibonacciSection = document.querySelector(".fibonacci-section");
    var volumeSection = document.querySelector(".volume-section");

    if (jenisPerhitungan === "fibonacci") {
        fibonacciSection.style.display = "block";
        volumeSection.style.display = "none";
    } else if (jenisPerhitungan === "volume") {
        fibonacciSection.style.display = "none";
        volumeSection.style.display = "block";
    }
}

function hitungFibonacci() {
    var n = parseInt(document.getElementById("n").value);
    var fibonacci = [1, 1];

    for (var i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    document.getElementById("hasilFibonacci").innerHTML = "Deret Fibonacci: " + fibonacci.join(", ");
}

function hitungVolume() {
    var jenisBangunRuang = document.getElementById("jenisBangunRuang").value;
    var panjang = parseFloat(document.getElementById("panjang").value);
    var lebar = parseFloat(document.getElementById("lebar").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var hasil = 0;

    if (jenisBangunRuang === "kubus") {
        hasil = panjang * panjang * panjang;
    } else if (jenisBangunRuang === "balok") {
        hasil = panjang * lebar * tinggi;
    }

    document.getElementById("hasilVolume").innerHTML = "Volume " + jenisBangunRuang + ": " + hasil;
}

perhitungan();  // Untuk menginisialisasi tampilan awal
