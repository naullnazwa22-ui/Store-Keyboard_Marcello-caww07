let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedPaymentMethod = "";

if (cart.length === 0) { window.location.href = "cart.html"; }

const summary = document.getElementById("summary");
const totalText = document.getElementById("total");
let total = 0;

cart.forEach(item => {
    let subtotal = item.price * item.qty;
    total += subtotal;
    summary.innerHTML += `<div class="summary-item"><span>${item.name} (${item.qty}x)</span><span>Rp ${subtotal.toLocaleString("id-ID")}</span></div>`;
});
totalText.innerText = total.toLocaleString("id-ID");

function chooseCheckoutPayment(method, element) {
    selectedPaymentMethod = method;
    document.querySelectorAll(".pay-card").forEach(card => card.classList.remove("active"));
    element.classList.add("active");
    const infoBox = document.getElementById("checkoutPaymentInfo");
    infoBox.style.display = "block";

    if (method === "DANA" || method === "GoPay") {
        infoBox.innerHTML = `<h4 style="margin-bottom:5px;">Transfer ke ${method}</h4><p style="font-size: 18px; font-weight: bold; color: #e17055;">0896-5644-1135</p><p style="font-size: 13px; color: #636e72;">a.n Marcello Store</p>`;
    } else if (method === "QRIS") {
        infoBox.innerHTML = `
            <h4 style="margin-bottom:10px;">Scan QRIS di bawah ini</h4>
            <img src="img/payment/barcode.jpg" style="width: 150px; border-radius: 10px; margin-bottom: 10px;">
            <p style="font-size: 13px; color: #657880;">a.n Marcello Store</p>
        `;
    }
}

function processCheckout() {
    const nama = document.getElementById("nama").value;
    const hp = document.getElementById("hp").value;
    const alamat = document.getElementById("alamat").value;

    if (!nama || !hp || !alamat) { alert("Harap lengkapi semua data pembeli!"); return; }
    if (!selectedPaymentMethod) { alert("Harap pilih metode pembayaran!"); return; }

    const newOrder = {
        id: "INV-" + Date.now().toString().slice(-8),
        date: new Date().toLocaleDateString("id-ID"),
        buyer: { name: nama, phone: hp, address: alamat },
        items: cart,
        total: total,
        payment: selectedPaymentMethod,
        status: "Menunggu Pembayaran"
    };

    let allOrders = JSON.parse(localStorage.getItem("marcello_orders")) || [];
    allOrders.push(newOrder);
    localStorage.setItem("marcello_orders", JSON.stringify(allOrders));
    localStorage.setItem("buyer", JSON.stringify(newOrder.buyer));
    localStorage.removeItem("cart");

    window.location.href = "invoice.html";
}