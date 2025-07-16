
// استخراج معرف المنتج من معلمات الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const productId =urlParams.get('id');
    const titlepro = "product" + productId;
    document.title = titlepro ;
    
    // جلب بيانات المنتج من ملف JSON
    fetch('./accest/json/products.json')
      .then(response => response.json())
      .then(data => {
        // إيجاد المنتج ذو الـ id المطلوب
        const product = data.find(p => p.id === productId);
        const container = document.getElementById("product-details");
        if (product) {
          container.innerHTML = `
            <section>
  <nav class="w-full border-y ">
    <div class="container mx-auto p-8 flex justify-between">
      <div class="flex justify-start gap-3">
        <div><a class="hover:text-yellow-700" href="./Prodacts.html">Prodacts /</a></div>
        <div><a class="hover:text-yellow-700" href="./product.html?id=p4">${product.type} /</a></div>
        <div><a class="hover:text-yellow-700" href="./product.html?id=p4">${product.name}</a></div>
      </div>
      <div>

      </div>
    </div>
  </nav>
</section>
<section>
  <div class="container mx-auto">
    <div class="p-8">
      <div class="flex md:flex-row flex-col items-center gap-4">
        <div class="md:w-1/2  flex-row "> 
          <img  class="rounded-md md:h-96 mx-auto" src="${product.image}" alt="${product.name}">
        </div>
        <div class="md:w-1/2 flex flex-col gap-3">
          <h1 class="text-4xl text-left font-semibold leading-[3.25rem]">${product.name}</h1><h1 class="text-xl text-left font-semibold leading-[3.25rem]">${product.type}</h1>
          <p>${product.des}</p>
          <h1 class="text-2xl text-left font-semibold leading-[3.25rem]vs">one ft : $${product.price}</h1>
          <ul class="flex gap-3">
            <p class=" rounded-full w-9 h-9 hover:border bg-${product.color}-900 "></p>
          </ul>
          <div class="flex flex-col gap-3">
            <h1>contact opchins :</h1>
            <div class="flex gap-3">
            <a href="https://www.messenger.com/t/100007636482286/?text=Hello%2C+is+this+product+%28${product.name}%29+available+in+stock%3F" class="border rounded-md p-2  hover:bg-blue-700 text-center bg-blue-300 w-1/3 text-white">massenge</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
          `;
        } else {
          container.innerHTML = `<p class="text-red-500">لم يتم العثور على المنتج</p>`;
        }
      })
      .catch(error => console.error('Error fetching product details:', error));
