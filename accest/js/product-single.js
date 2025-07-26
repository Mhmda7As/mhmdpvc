// استخراج معرف المنتج من معلمات الرابط
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// جلب بيانات المنتج من ملف JSON
fetch('./accest/json/products.json')
  .then(response => response.json())
  .then(data => {
    // إيجاد المنتج ذو الـ id المطلوب
    const product = data.find(p => p.id === productId);
    const container = document.getElementById("product-details");
      const imagesSlides = product.images.map(img => `
        <img class="rounded-md swiper-slide" src="${img}" alt="${product.name}">
    `).join('');
    
    if (product) {
      document.title = `${product.name}`;
      container.innerHTML = `
        <section">
          <nav class="w-full border-y ">
            <div class="container mx-auto p-8 flex justify-between">
              <div class="flex justify-start gap-3">
                <div><a class="hover:text-yellow-700" href="./prodacts.html">Prodacts /</a></div>
                <div><a class="hover:text-yellow-700" href="./catalogs.html?type=${product.type}">${product.type} /</a></div>
                <div><a class="hover:text-yellow-700" href="./product.html?id=${product.id}">${product.name}</a></div>
              </div>
            </div>
          </nav>
        </section>
        <section id="imgliast" >
          <div class="container mx-auto">
            <div class="p-8">
              <div class="flex md:flex-row flex-col md:items-center gap-4 md:max-w-7xl mx-auto lg:px-8 ">
                <div class="md:w-1/2 w-full flex-row md:px-4" style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff">
                <div class="bg-gray-200 swiper mySwiper"> 
                      <div class="swiper-wrapper ">
                        ${imagesSlides}
                      </div>
                      <div class="swiper-button-next"></div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-pagination "></div>
                    </div>
                </div>
                <div class="md:w-1/2 flex flex-col gap-3">
                  <h1 class="text-4xl text-left font-semibold leading-[3.25rem]">${product.name}</h1>
                  <h1 class="text-xl text-left font-semibold leading-[3.25rem]">${product.type}</h1>
                  <p>${product.des}</p>
                  <h1 class="text-2xl text-left font-semibold leading-[3.25rem]">one ft : $${product.price}</h1>
                  <ul id="color-options" class="flex gap-3">
                  </ul>
                  <div class="flex flex-col gap-3">
                    <h1>contact options :</h1>
                    <div class="flex gap-3">
                      <a href="https://www.messenger.com/t/100007636482286/?text=Hello%2C+is+this+product+%28${product.name}%29+available+in+stock%3F" 
                         class="border rounded-md p-2 hover:bg-blue-700 text-center bg-blue-400 w-1/3 text-white">
                        Messenger
                      </a>
                      <a href="https://wa.me/16824007512/?text=Hello%2C+is+this+product+%28${product.name}%29+available+in+stock%3F" 
                         class="border rounded-md p-2 hover:bg-green-700 text-center bg-green-400 w-1/3 text-white">
                        whatsapp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      `;
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      // إنشاء عناصر الألوان بعد التأكد من وجود swiper
const colorsContainer = document.getElementById("color-options");
product.colors.forEach((color, i) => {
  const colorCircle = document.createElement("button");
  colorCircle.className = "rounded-full w-9 h-9 border cursor-pointer hover:scale-110 transition";
  colorCircle.style.backgroundColor = color.hex;

  colorCircle.addEventListener("click", () => {
    // انتقل إلى الصورة داخل السلايدر
    swiper.slideTo(color.index);

    // مرر إلى القسم الذي يحتوي الصور
    const section = document.getElementById('imgliast');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });

  colorsContainer.appendChild(colorCircle);
});

    } else {
      container.innerHTML = `<p class="text-red-500">لم يتم العثور على المنتج</p>`;
    }
  })
  .catch(error => console.error('Error fetching product details:', error));