fetch('./accest/json/bgvr.json')
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById('gallery');

    data.forEach(item => {
      const a = document.createElement('a');
      a.href = `./vrdemo.html?id=${encodeURIComponent(item.images)}`;
      a.className = "";

      const img = document.createElement('img');
      img.src = item.images;
      img.alt = item.name;
      img.className = "aspect-auto mb-5 cursor-pointer rounded-xl hover-effect transition duration-200 shadow-xl" ;

      a.appendChild(img);
      gallery.appendChild(a);
    });
  })
  .catch(err => console.error("خطأ في قراءة ملف bgvr.json:", err));