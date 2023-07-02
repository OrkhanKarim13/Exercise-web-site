// Shop İcon
let shopIcon = document.querySelector(".shopIcon");
shopIcon.addEventListener("click", () => {
  document.querySelector(".shopBase").classList.toggle("active");
});
// start Cards section

const data = [
  {
    id: 1,
    title: "1-ci kobinet",
    info: "A zərbaycan Xalq Cümhuriyyəti hökuməti 1918-ci il mayın 30-da radioqram vasitəsilə Azərbaycanın öz istiqlaliyyətini elan etməsi barədə dünyanın əsas siyasi mərkəzlərinə -London, Paris, Vaşinqton, İstanbul, Berlin, Madrid, Tehran, Moskva,Roma, Vyana, Buxarest, Sofiya, Tokio, Haaqa, Kopenhagen, Kiyev, Kristianiya və Stokholma rəsmi bəyanatlar göndərdi. Həmin radioqramda yeni yaradılmış Hökumətin müvəqqəti olaraq Yelizavetpolda yerləşdiyi bildirilirdi.",
    date: "28 may 1918 – 17 iyun 1918",
    img: "./assets/images/book1.jpg",
  },
  {
    id: 2,
    title: "2-ci kobinet",
    info: "H ökumətimiz öylə bir zamanda təşkil edilmişdi ki, bir kənddən o biri kəndə getmək qorxulu idi. Gecə yatanda sabaha çıxmağa ümid yox idi. Heç kəsin irzi, namusu, canı, malı əmniyyətdə deyildi... Poçt-teleqraf yox idi. Bir kağız yollamaq belə mümkün deyildi. O vaxt idi ki, maliyyatdan Hökumət əlində heç bir şey yox idi. Hökumətə lazım olan idarələrin hamısı başdan-başa dağılmış, xidmətçilər qaçmışdılar. İdarələrin adı var idisə də, özü yox idi. Hərə başına beş-on adam yığıb bir Hökumət, bir qanun düzəltmişdi",
    date: "17 iyun 1918 – 7 dekabr 1918",
    img: "./assets/images/book2.jpg",
  },
  {
    id: 3,
    title: "3-cü kobinet",
    info: "Ö lkədə möhtəkirliyin və qiymətlərin artdığı, əhalinin bir qisminin sürətlə varlandığı, digər qisminin isə var-yoxdan çıxdığı bir şəraitdə Parlamentdə müxalifətdə olan İttihad, Əhrar, Sosialistlər fraksiyalarının üzvləri hökuməti bu işdə fəaliyyətsizlikdə təqsirləndirməyə başladı. 1919 ilin yanvar-fevral aylarında keçirilən parlament iclaslarında onlar tərəfindən Fətəli xan Xoyski hökuməti kəskin surətdə tənqid edilirdi.",
    date: "26 dekabr 1918 – 14 aprel 1919",
    img: "./assets/images/book3.jpg",
  },
];

// map data
let cardBox = document.querySelector(".blogCardBox");
data.map((item) => {
  cardBox.innerHTML += `
  <div class="blogCard" key="${item.id}" id="${item.id}">
  <div class="blogCardContent">
    <div class="blogCardImg">
      <img src=${item.img} alt="blog" />
    </div>
    <div class="blogCardInfo">
      <div class="blogCardBtn">
        <a class="crate" href="#">Müəllif</a>
        <button class="about" onclick="addBase(${item.id})">Səbətə əlavə et</button>
      </div>
      <a class="blogCardTitle" href="#">${item.title}</a>
      <p class="blogCardInfo">
       ${item.info}
      </p>
      <a class="blogCardDate" href="#">${item.date}</a>
    </div>
  </div>
</div>
  `;
});

let cardList = document.querySelector(".shopList");

const checkCount = () => {
  let shopItem = document.querySelectorAll(".shopItem");
  let iconCount = document.querySelector(".shopCount");
  iconCount.innerHTML = shopItem.length;
};
checkCount();

const addBase = (cardId) => {
  let allCard = document.querySelectorAll(".blogCard");
  let iconCount = document.querySelector(".shopCount");
  
  Array.from(allCard).filter((item) => {
    if (Number(item.id) === cardId) {
      cardList.innerHTML += `
      <li class="shopItem">
                    <div class="shopCardImg">
                      <img
                        src="${item.children[0].children[0].children[0].src}"
                        alt="shop card img"
                      />
                    </div>
                    <div class="shopCardInfo">
                      <h3 class="shopCardTitle">"${item.children[0].children[1].children[1].innerText}"</h3>
                      <p>AXC qusuluşu</p>
                      <p>Qiymət:15Azn</p>
                      
                    </div>
                    <span class="deleteBtn" onclick="deleteBook()"><i class="fa-solid fa-xmark"></i></span>
                  </li>
      `;
    }
  });
  checkCount();
  // let shopItem = document.querySelectorAll(".shopItem");
  // iconCount.innerHTML = shopItem.length;
};

const deleteBook = () => {
  let deleteBtn = document.querySelectorAll(".deleteBtn");

  Array.from(deleteBtn).filter((item) => {
    item.onclick = function () {
      this.parentElement.remove();
      checkCount();
    };
  });
};

// End Cards Section

// Start Slide Section
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// End Slide Section

// start Collopse
let collHeader = document.querySelectorAll(".tab");
let collInfo = document.querySelectorAll(".tabBody");
Array.from(document.querySelectorAll(".tab")).filter((item) => {
  item.onclick = () => {
    Array.from(document.querySelectorAll(".tabBody")).filter((data) => {
      if (item.id === data.id) {
        data.classList.add("active");
      } else {
        data.classList.remove("active");
      }
    });
  };
});

// End Collapse

// Start Accardion
let accInfo = document.querySelectorAll(".accInfo");
let accBtn = document.querySelectorAll(".accHeader");
accBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    accInfo.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        accBtn.forEach((btn) => btn.classList.remove("active"));
      }
    });
    let panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});
// End Accardion

// close click for accardion and collapse

window.onclick = (e) => {
  if (!e.target.matches(".accHeader") && !e.target.matches(".tab")) {
    accBtn.forEach((btn) => btn.classList.remove("active"));
    accInfo.forEach((acc) => acc.classList.remove("active"));
    collHeader.forEach((item) => item.classList.remove("active"));
    collInfo.forEach((data) => data.classList.remove("active"));
  }
};
// close click for accardion and collapse

// Start Number Animation

let valueDisplays = document.querySelectorAll(".num");
let interval = 9000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// End Number Animation

// Form

document.querySelector(".send").addEventListener("click", (e) => {
  e.preventDefault();
});

const submitForm = () => {
  let firstName = document.querySelector("#firstname");
  let email = document.querySelector("#email");
  let number = document.querySelector("#number");
  let tarea = document.querySelector("#textarea");

  if (firstName.value.length == "") {
    alert("Adınızı qeyd edin!");
  } else if (email.value.length == 0) {
    alert("Emaili qeyd edin!");
  } else if (number.value.length == 0 && typeof number.value !== number) {
    alert("nomre daxil edin");
  } else if (tarea.value.length == 0) {
    alert("Mətin daxil edin!");
  } else {
    alert("Uğurlu əməliyyat!");
  }
};
