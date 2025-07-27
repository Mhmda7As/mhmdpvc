let allProducts = [];

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const prodactsList = document.getElementById("prodacts-list");
const typeofprodact = document.getElementById("typeofprodact");

// استخراج قيمة type من الرابط
const urlParams = new URLSearchParams(window.location.search);
const selectedType = urlParams.get("type"); // ممكن تكون null
document.title = `catalogs - ` + selectedType;
typeofprodact.innerText = selectedType;
// دالة عرض المنتجات
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

// دالة التصفية والبحث
function filterAndSearch() {
  let value = searchInput.value.toLowerCase();

  // الخطوة 1: تصفية حسب type إن وجد
  let result = allProducts.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(value)
    const matchesType = !selectedType || p.type === selectedType;
    return matchesSearch && matchesType;
  });

  // الخطوة 2: الترتيب
  let sort = filterSelect.value;
  if (sort === "name-asc") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "name-desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }

  renderProducts(result);
}

// جلب المنتجات
fetch("./accest/json/products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    filterAndSearch(); // أول مرة، يعرض حسب type فقط إن وجد
  });

// أحداث البحث والفلترة
searchInput.addEventListener("input", filterAndSearch);
filterSelect.addEventListener("change", filterAndSearch);
