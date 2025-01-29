let total = 0;

function addItem() {
    let item = document.getElementById("item").value;
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    if (item && price > 0 && quantity > 0) {
        let totalHarga = price * quantity;
        total += totalHarga;

        let table = document.getElementById("nota-body");
        let row = table.insertRow();
        
        row.innerHTML = `
            <td>${item}</td>
            <td>Rp ${price.toLocaleString()}</td>
            <td>${quantity}</td>
            <td>Rp ${totalHarga.toLocaleString()}</td>
            <td><button onclick="removeItem(this, ${totalHarga})">Hapus</button></td>
        `;

        document.getElementById("grand-total").textContent = total.toLocaleString();

        // Kosongkan input setelah menambahkan barang
        document.getElementById("item").value = "";
        document.getElementById("price").value = "";
        document.getElementById("quantity").value = "";
    } else {
        alert("Harap isi semua kolom dengan benar!");
    }
}

function removeItem(button, harga) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    total -= harga;
    document.getElementById("grand-total").textContent = total.toLocaleString();
}

function printNota() {
    window.print();
}
