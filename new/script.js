let totalTerhitung = 0;

function cekHarga() {
    const paket = document.getElementById('pilih-paket');
    const harga = parseInt(paket.value);
    const qty = parseInt(document.getElementById('jumlah-porsi').value);

    if (harga === 0 || isNaN(qty) || qty <= 0) {
        alert("Silakan pilih paket dan jumlah porsi terlebih dahulu!");
        return;
    }

    totalTerhitung = harga * qty;
    document.getElementById('display-cek-harga').innerText = "Total: Rp " + totalTerhitung.toLocaleString();
    document.getElementById('container-total-bayar').style.display = "block";
    document.getElementById('btn-cek-harga').style.display = "none";
}

function prosesBayar() {
    const btnBayar = document.getElementById('btn-aksi-bayar');

    if (btnBayar.innerText === "PESAN LAGI?") {
        resetForm();
        return;
    }

    const bayar = parseInt(document.getElementById('uang-bayar').value);
    const paket = document.getElementById('pilih-paket');
    const namaPaketFull = paket.options[paket.selectedIndex].text;
    const qty = document.getElementById('jumlah-porsi').value;

    if (isNaN(bayar) || bayar < totalTerhitung) {
        const kurang = totalTerhitung - (bayar || 0);
        alert("Uang Anda kurang Rp " + kurang.toLocaleString());
        return;
    }

    const kembali = bayar - totalTerhitung;

    // --- PENTING: Mengisi Data Ke Struk Sebelum Muncul ---
    document.getElementById('tgl-struk').innerText = new Date().toLocaleString('id-ID');
    document.getElementById('res-nama-paket').innerText = namaPaketFull.split(' (')[0];
    document.getElementById('res-harga-satuan').innerText = "@" + parseInt(paket.value).toLocaleString();
    document.getElementById('res-qty').innerText = "Qty: " + qty;
    document.getElementById('res-subtotal').innerText = "Rp " + totalTerhitung.toLocaleString();
    document.getElementById('res-total').innerText = "Rp " + totalTerhitung.toLocaleString();
    document.getElementById('res-bayar').innerText = "Rp " + bayar.toLocaleString();
    document.getElementById('res-kembali').innerText = "Rp " + kembali.toLocaleString();

    // Munculkan container struk di layar website
    document.getElementById('container-struk').style.display = "block";
    
    // Ubah status tombol
    btnBayar.innerText = "PESAN LAGI?";
    btnBayar.style.background = "#3498db";

    // Scroll otomatis ke bawah agar user melihat struknya muncul
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
function resetForm() {
    // 1. Reset nilai input
    document.getElementById('pilih-paket').value = "0";
    document.getElementById('jumlah-porsi').value = "";
    document.getElementById('uang-bayar').value = "";
    
    // 2. Sembunyikan container struk dan pembayaran
    document.getElementById('container-struk').style.display = "none";
    document.getElementById('container-total-bayar').style.display = "none";
    
    // 3. Munculkan kembali tombol cek harga
    document.getElementById('btn-cek-harga').style.display = "block";
    
    // 4. Kembalikan tombol bayar ke teks semula
    const btnBayar = document.getElementById('btn-aksi-bayar');
    btnBayar.innerText = "PROSES BAYAR";
    btnBayar.style.background = "#27ae60";

    // 5. Scroll kembali ke atas agar user nyaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}