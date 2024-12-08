const productList = document.getElementById("product-list");

async function fetchProducts() {
  try {
    const response = await fetch("https://corebiz-test-server.onrender.com/api/v1/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    productList.innerHTML = "<p>Não foi possível carregar os produtos no momento.</p>";
  }
}


function displayProducts(products) {
  productList.innerHTML = products
    .map(product => `
      <div class="product-card">
        <img src="${product.imageUrl}" loading="lazy" alt="${product.productName}">
        <h2>${product.productName}</h2>
        <h3>de R$ ${product.listPrice / 100}</h3>
        <p><strong> por R$ ${product.price / 100}</strong></p>
        <button>COMPRAR</button>
      </div>
    `)
    .join("");
}

fetchProducts();

