// Scroll Indicator Bar
window.addEventListener("scroll", () => {
  const IndicatorBar = document.querySelector(".scroll-indicator-bar");
  const pageScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = (pageScroll / height) * 100;

  IndicatorBar.style.width = scrollValue + "%";
});

// ------ Menu -------
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

//Animate.js
const home = document.querySelector(".home");
for (var i = 0; i <= 100; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  home.appendChild(blocks);
}
function animateBlocks() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    scale: function () {
      return anime.random(1, 5);
    },
  });
}

animateBlocks();

// Menu Portfolio
const menu = [
  {
    id: 1,
    title: "project AAAA",
    category: "shop",
    img: "./img/f1.jpg",
    desc: "lorem1lorem1loremloremloremlorem",
  },
  {
    id: 2,
    title: "project BBBB",
    category: "portfolio",
    img: "./img/f2.jpg",
    desc: "lorem2lorem2loremloremloremlorem",
  },
  {
    id: 3,
    title: "project CCCC",
    category: "orders",
    img: "./img/f4.jpg",
    desc: "lorem3lorem3loremloremloremlorem",
  },
  {
    id: 4,
    title: "project DDDD",
    category: "shop",
    img: "./img/f5.jpg",
    desc: "lorem4lorem4loremloremloremlorem",
  },
  {
    id: 5,
    title: "project EEEE",
    category: "orders",
    img: "./img/f6.jpg",
    desc: "lorem5lorem5loremloremloremlorem",
  },
  {
    id: 6,
    title: "project FFFF",
    category: "shop",
    img: "./img/f7.jpg",
    desc: "lorem6lorem6loremloremloremlorem",
  },
];
const gallary = document.querySelector(".gallary-grid");
const containerBtn = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    // return item;
    return `<div class="grid__item item-grid">
        <a href="https://www.google.ru">
          <div class="item-grid__inner">
            <img class="item-grid__img" src="${item.img}" alt="" />
            <div class="item-grid__title"><span>${item.title}</span></div>
          </div>
        </a>
      </div>`;
  });
  displayMenu = displayMenu.join("");

  gallary.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
            ${category}
          </button>`;
    })
    .join("");
  containerBtn.innerHTML = categoryBtns;
  const filterBtns = containerBtn.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category;

        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// AOS

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});