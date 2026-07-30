let currentPrice = 0;
let currentProduct = "";
let currentImage = ""; 
let paymentMethod = "";

// 1. Fungsi Membuka Popup
function openPopup(nama, harga, image) { 
    currentProduct = nama;
    currentPrice = harga;
    currentImage = image; 
    
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupTitle").innerText = nama;
    document.getElementById("qty").value = 1;
    
    updateTotal();
    document.getElementById("paymentInfo").innerHTML = "";
    document.getElementById("paymentInfo").style.display = "none"; // Sembunyikan info pembayaran saat baru dibuka
}

// 2. Fungsi Menutup Popup
function closePopup() { 
    document.getElementById("popup").style.display = "none"; 
}

// 3. Fungsi Tambah Jumlah
function plusQty() {
    let qty = document.getElementById("qty");
    qty.value = parseInt(qty.value) + 1;
    updateTotal();
}

// 4. Fungsi Kurangi Jumlah
function minusQty() {
    let qty = document.getElementById("qty");
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
        updateTotal();
    }
}

// 5. Fungsi Update Total Harga
function updateTotal() {
    let qty = parseInt(document.getElementById("qty").value);
    let total = currentPrice * qty;
    document.getElementById("totalPrice").innerText = "Total : Rp " + total.toLocaleString("id-ID");
}

// 6. Fungsi Memilih Pembayaran (INI YANG TADI HILANG!)
function choosePayment(method, element) {
    paymentMethod = method;
    
    // Hapus kelas active dari semua kartu
    document.querySelectorAll(".pay-card").forEach(card => card.classList.remove("active"));
    // Tambah kelas active ke kartu yang diklik
    element.classList.add("active");
    
    let info = document.getElementById("paymentInfo");
    info.style.display = "block"; // Munculkan kotak info
    
    if (method === "DANA" || method === "GoPay") {
        info.innerHTML = `
            <h4 style="margin-bottom: 5px;">Transfer ke ${method}</h4>
            <p style="font-weight:bold; font-size:18px; color:#e17055;">0896-5644-1135</p>
            <p style="font-size:13px; color:#636e72;">a.n Marcello Store</p>
        `;
    } else if (method === "QRIS") {
        info.innerHTML = `
            <h4 style="margin-bottom:10px;">Scan QRIS di bawah ini</h4>
            <img src="img/payment/barcode.jpg" style="width: 150px; border-radius: 10px; margin-bottom: 10px;" onerror="this.src='https://placehold.co/150x150?text=QRIS+Code'">
            <p style="font-size:13px; color:#636e72;">a.n Marcello Store</p>
        `;
    }
}

// 7. Fungsi Konfirmasi Pesanan Langsung
function confirmDirectOrder() {
    let nama = document.getElementById("customerName").value;
    let hp = document.getElementById("customerPhone").value;
    let alamat = document.getElementById("customerAddress").value;
    let qty = parseInt(document.getElementById("qty").value);
    let total = currentPrice * qty;

    if (!nama || !hp || !alamat || !paymentMethod) {
        alert("Harap lengkapi semua data dan pilih metode pembayaran!");
        return;
    }

    let buyerData = { name: nama, phone: hp, address: alamat, payment: paymentMethod };
    localStorage.setItem("buyer", JSON.stringify(buyerData));
    
    // Gunakan currentImage yang sudah dinamis
    let tempCart = [{ name: currentProduct, price: currentPrice, qty: qty, image: currentImage }];
    localStorage.setItem("cart", JSON.stringify(tempCart));

    alert("Pesanan Berhasil!\n\nProduk: " + currentProduct + "\nJumlah: " + qty + "\nTotal: Rp " + total.toLocaleString("id-ID"));
    
    closePopup();
    window.location.href = "invoice.html";
}

// 8. Fungsi Pencarian Produk
function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");
    
    products.forEach(product => {
        let name = product.querySelector("h3").innerText.toLowerCase();
        if (name.includes(input)) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
}