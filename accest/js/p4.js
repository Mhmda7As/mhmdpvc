 const prodactsList = document.getElementById("prodacts-list-4");

let allProducts = [];

function renderProducts(list) {
    prodactsList.innerHTML = "";
    list.forEach(product => {
      const card = document.createElement("a");
      card.href = `product.html?id=${product.id}`;
      card.className = "group block cursor-pointer";
      card.innerHTML = `
        <div>
          <img src="${product.images[0]}" alt="${product.name}" class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75" />
          <div class="flex justify-between">
            <h3 class="mt-4 text-sm text-gray-700">
              <span class="text-lg">${product.name}</span> | ${product.type}
            </h3>
          </div>
          <div class="flex justify-between">
            <p class="mt-1 text-lg font-medium text-gray-900">$${product.price}</p>
          </div>
        </div>
      `;
      prodactsList.appendChild(card);
    });
  }
// جلب المنتجات من ملف JSON
fetch("./accest/json/products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;

    // خلط المنتجات عشوائيًا
    const shuffled = allProducts.sort(() => 0.5 - Math.random());

    // أخذ أول 4 منتجات فقط بعد الخلط
    const randomFour = shuffled.slice(0, 4);

    renderProducts(randomFour);
  });
