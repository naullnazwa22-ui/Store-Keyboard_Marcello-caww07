let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
    const item = cart.find(product => product.name === name);
    if (item) { item.qty++; } 
    else { cart.push({ name: name, price: price, image: image, qty: 1 }); }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " berhasil ditambahkan ke keranjang!");
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.qty, 0);
    const badge = document.getElementById("cart-count");
    if (badge) { badge.innerText = count; }
}
updateCartCount();

function displayCart() {
    const container = document.getElementById("cartContainer");
    if (!container) return;
    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:40px; color:#636e72;'>Keranjang belanja Anda masih kosong.</p>";
        document.getElementById("grandTotal").innerText = "Total : Rp0";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        container.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}" onerror="this.src='https://placehold.co/100x100?text=Keyboard'">
            <div class="info">
                <h3>${item.name}</h3>
                <p style="color:#e17055; font-weight:bold;">Rp ${item.price.toLocaleString("id-ID")}</p>
                <div class="qty-control">
                    <button onclick="decreaseQty(${index})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="increaseQty(${index})">+</button>
                </div>
            </div>
            <button class="delete-btn" onclick="removeItem(${index})">🗑️ Hapus</button>
        </div>`;
    });
    document.getElementById("grandTotal").innerText = "Total : Rp " + total.toLocaleString("id-ID");
}

function increaseQty(index) {
    cart[index].qty++;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function decreaseQty(index) {
    if (cart[index].qty > 1) { cart[index].qty--; } 
    else { removeItem(index); return; }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function removeItem(index) {
    if(confirm("Hapus produk ini?")) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}

function checkout() {
    if (cart.length === 0) { alert("Keranjang Anda kosong!"); return; }
    window.location.href = "checkout.html";
}

if (document.getElementById("cartContainer")) { displayCart(); }