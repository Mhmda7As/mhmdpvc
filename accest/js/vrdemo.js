// مسار ملف JSON نسبة لصفحة HTML الحالية (تأكد أنه صحيح)
  const jsonPatha = './accest/json/prodactlist.json';

  fetch(jsonPatha)
    .then(res => {
      if (!res.ok) throw new Error('Failed to load prodactlist.json');
      return res.json();
    })
    .then(data => {
      const probtnlist = document.getElementById('probtnlist');

      data.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.id = `bt(${index + 1})`;
        btn.className = "min-w-[100px] object-cover cursor-pointer flex justify-between w-full border hover:bg-gray-200 p-3 rounded items-center";
        btn.setAttribute('onclick', `addbg(${index + 1},"${item.size}")`);

        // عنوان المنتج: prodact 1, prodact 2, ...
        const prodTitle = `prodact ${index + 1}`;

        btn.innerHTML = `
          <div class="flex gap-3 items-center">
            <h1 class="order-2 font-bold text-md">${prodTitle}</h1>
            <img src="${item.images}" alt="${prodTitle}" class="order-1 cursor-pointer w-20 h-20 object-cover rounded border hover:scale-105 transition">
          </div>
          <p class="px-5">select</p>
        `;

        probtnlist.appendChild(btn);
      });
    })
    .catch(err => {
      console.error('Error loading prodactlist.json:', err);
    });

function addbg(id,size) {
  // إزالة التحديد من كل الأزرار
  document.querySelectorAll('button[id^="bt"]').forEach(btn => {
    btn.classList.remove("active");
    btn.querySelector("p").textContent = "select"; // إعادة النص الافتراضي
    btn.querySelector("p").classList.remove("text-yellow-600");
  });

  // تحديد الزر الذي تم الضغط عليه
  const selectedBtn = document.getElementById(`bt(${id})`);
  selectedBtn.classList.add("active");
  selectedBtn.querySelector("p").textContent = "selecttde";
  selectedBtn.querySelector("p").classList.add("text-yellow-600");

  // جلب رابط الصورة من الزر ووضعها في الخلفية للـ main-img
  const imgSrc = selectedBtn.querySelector("img").getAttribute("src");
  const mainImg = document.getElementById("main-img");
  mainImg.style.backgroundImage = `url('${imgSrc}')`;
  mainImg.style.backgroundPosition = "bottum";
  mainImg.style.backgroundSize = size; 
  // إذا كان الزر خارج الشاشة، ننزل عليه
}
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id"); // مثلاً h(7)

  // مسار ملف JSON (نسبة لصفحة vrdemo.html)
  const jsonPath = './accest/json/bgvr.json';

  fetch(jsonPath)
    .then(res => {
      if (!res.ok) throw new Error('فشل تحميل ملف JSON');
      return res.json();
    })
    .then(data => {
      // ابحث عن العنصر المناسب بناءً على idParam في اسم الصورة
      let foundItem = data.find(item => {
        // يمكن idParam يكون h(7) أو h(7).png أو جزء من المسار
        return item.images.includes(idParam);
      });

      if (!foundItem) {
        // إذا لم نجد الصورة، نختار العنصر الأول كافتراضي
        foundItem = data[1];
      }

      // تحديث الصورة
      const mainImg = document.getElementById('main-img');
      mainImg.src = foundItem.images;
      mainImg.alt = foundItem.name;

      // تحديث رابط واسم breadcrumb
      const breadcrumbLink = document.getElementById('breadcrumb-img');
      breadcrumbLink.href = `./vrdemo.html?id=${encodeURIComponent(foundItem.name)}`;
      breadcrumbLink.textContent = foundItem.name + ' /';
      breadcrumbLink.title = 'vr-demo ' + foundItem.name;

      // تحديث عنوان الصفحة
      document.title = 'vr-demo ' + foundItem.name;
    })
    .catch(err => {
      console.error('خطأ في تحميل بيانات الصور:', err);
      // عرض رسالة أو تعيين صورة افتراضية
    });

