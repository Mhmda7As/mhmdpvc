const backToTopBtn = document.getElementById("backToTopBtn");
let hideTimeout;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");

    // إعادة ضبط المؤقت إذا تحرك مرة ثانية
    clearTimeout(hideTimeout);

    // إخفاء الزر بعد 5 ثوانٍ من التوقف عن التمرير
    hideTimeout = setTimeout(() => {
      backToTopBtn.classList.remove("show");
    }, 1000);
  } else {
    backToTopBtn.classList.remove("show");
    clearTimeout(hideTimeout);
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  clearTimeout(hideTimeout);
  backToTopBtn.classList.remove("show");
});
