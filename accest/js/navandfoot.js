function navbarc(p1,p2,p3,p4){
    document.getElementById("navbarcid").innerHTML = `<nav>
    <div class="container mx-auto flex justify-between items-center p-8">
      <h1 class="text-lg hover:text-yellow-800 font-semibold">
        <a href="./">Alma Remodeling</a>
      </h1>
      <ul class="hidden md:flex gap-8 xl:gap-16">
        <a href="./" class=" `+ p1 +`text-yellow-800"><li>Home</li></a>
        <li class="flex flex-col">
        <div onclick="navtoggle2()"  class="flex items-center `+ p2 +`text-yellow-800 gap-3 cursor-pointer">
            <a class=" ">Prodacts</a>
            <button class=" hover:text-yellow-900 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
            </svg></button>
        </div>
            <ul id="prodact-dropdown2" class="prodact-dropdown hidden absolute z-20 "></ul>
        </li>
        <a href="./contact.html" class=" `+ p3 +`text-yellow-800"><li>Contact</li></a>
        <a href="./about.html" class=" `+ p4 +`text-yellow-800"><li>About</li></a>
      </ul>
      <div onclick="navtoggle()" class="md:hidden cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>
    </div>
    <div id="towNav" class="md:hidden hidden absolute bg-white h-fit w-full z-50">
      <ul class="flex flex-col ">
          <a href="./" class=" `+ p1 +`text-yellow-800 border-t p-8"><li >Home</li></a>
          <li class=" border-t">
          <div onclick="navtoggle1()" class="cursor-pointer  p-8 flex justify-between">
            <a class=" `+ p2 +`text-yellow-800">Prodacts</a>
            <div class=" `+ p2 +`text-yellow-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
            </svg>
            </div>
          </div>
          <div id="prodact-dropdown1" class="hidden">
            <ul class="prodact-dropdown flex flex-col px-8 pl-9 pb-8"></ul>
          </div>
            </li>
          <a href="./contact.html" class=" `+ p3 +`text-yellow-800 border-t p-8"><li>Contact</li></a>
          <a href="./about.html" class=" `+ p4 +`text-yellow-800 border-y p-8"><li>About</li></a>
      </ul>
    </div>
  </nav>`;
  document.getElementById("footercid").innerHTML = `
  <div class="border-t mt-8 px-8">
    <footer class="container mx-auto py-8 md:px-0 ">
        <div class="flex justify-between items-center ">
        <h1 class="">Alma Remodeling LLc</h1>
        <ul class="flex md:gap-5 gap-4">
            <li>
            <a  href="https://www.instagram.com/">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-instagram hover:text-yellow-700" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            </a>
            </li>
            <li>
            <a href="https://www.facebook.com/mohamad.ashor.90">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-facebook hover:text-yellow-700" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
            </a>
            </li>
            <li>
            <a href="https://m.me/mohamad.ashor.90?text=Hello%2C+I+would+like+more+information+about+your+products.">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-messenger hover:text-yellow-700" viewBox="0 0 16 16">
                <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                </svg>          
            </a>
            </li>
        </ul>
        </div>
    </footer>
  </div>`;
  fetch("./accest/json/products.json")
  .then(res => res.json())
  .then(data => {
    const types = [...new Set(data.map(p => p.type))]; // استخراج الأنواع الفريدة
    const dropdown = document.createElement("ul");
    const li = document.createElement("li");
      li.innerHTML = `<a href="./prodacts.html">all prodact</a>`;
      dropdown.appendChild(li);
    types.forEach(type => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="./catalogs.html?type=${type}">${type}</a>`;
      dropdown.appendChild(li);
    });

    // إدراج القائمة في كل من القائمة العلوية والقائمة الجانبية
    const prodactMenus = document.querySelectorAll(".prodact-dropdown");
    prodactMenus.forEach(menu => {
      menu.appendChild(dropdown.cloneNode(true));
    });
  });
}


function navtoggle(){
    document.getElementById("towNav").classList.toggle("hidden");
    document.getElementById("prodact-dropdown1").classList = "hidden";
};

function navtoggle1(){
    document.getElementById("prodact-dropdown1").classList.toggle("hidden");
};
function navtoggle2(){
    document.getElementById("prodact-dropdown2").classList.toggle("hidden");
};


// توليد عناصر قائمة الأنواع داخل "Prodacts"
