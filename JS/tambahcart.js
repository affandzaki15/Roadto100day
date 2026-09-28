const products = [
  { id: 1, name: "Laptop", price: 12000000 },
  { id: 2, name: "Mouse", price: 250000 },
  { id: 3, name: "Keyboard", price: 750000 },
];

const produk = document.querySelector("#products");
const carts = document.querySelector("#cart");
const totalAll = document.querySelector("#total");
const cek = document.querySelector("#checkout");
const pesan = document.querySelector("#message");

let cart = [];

function tambahCart(id) {
  const product = products.find((data) => data.id === id);
  const sudahAda = cart.find((data) => data.id === id);
  if (sudahAda) {
    console.log("produk sudah ada di cart");
    sudahAda.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    console.log("produk berhasil ditambahkan");
  }
  tampilkanCart(cart);
  hitungTotal(cart);
}

function tambahQuantity(id) {
  const item = cart.find((data) => data.id === id);
  item.quantity++;
  tampilkanCart(cart);
  hitungTotal(cart);
}

function kurangQuantity(id) {
  const item = cart.find((data) => data.id === id);
  if (item.quantity === 1) {
    hapusCart(id)
  } else {
    item.quantity--;
    tampilkanCart(cart);
    hitungTotal(cart);
  }
}

function hapusCart(id) {
  const hapusCart = cart.findIndex((data) => data.id === id);
  cart.splice(hapusCart, 1);
  tampilkanCart(cart);
  hitungTotal(cart);
}

function prosesList(data) {
  produk.innerHTML = "";
  data.forEach((datas) => {
    produk.innerHTML += `
            <div>
                <p>${datas.name}</p>
                <p>${datas.price}</p>
                <button onclick="tambahCart(${datas.id})">
                Tambah
                </button>
            </div>
    
        `;
  });
}
function tampilkanCart(data) {
  carts.innerHTML = "";  
  pesan.innerHTML = "";

  if (data.length === 0) {
    pesan.innerHTML = ` Data kosong`;
    return;
  }
  data.forEach((datas) => {
    carts.innerHTML += `
            <div>
                <p>${datas.name}</p>
                <p>${datas.price}</p>
                <p>Quantity: ${datas.quantity}</p>
                <button  onClick="kurangQuantity(${datas.id})">-</button>
                <button onClick="tambahQuantity(${datas.id})">+</button>
                <button onclick="hapusCart(${datas.id})">
                Hapus
                </button>
            </div>
    
        `;
  });
}

prosesList(products);

// REDUCE
function hitungTotal(data) {
  const totalItem = data.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  totalAll.textContent = totalItem;
}

cek.addEventListener("click", () => {
  const cartId = cart.length;
  if (cartId === 0) {
    tampilkanCart(cart);
  } else {
      cart = [];
      tampilkanCart(cart);
      hitungTotal(cart);
      pesan.innerHTML =` Checkout berhasil`
  }
});
