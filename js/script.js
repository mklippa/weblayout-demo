const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false,
  activate: function (event, ui) {
    if (ui.newHeader[0]) {
      ui.newHeader[0].tabIndex = -1;
    }
  },
});

document.querySelector(".section-faq__title").tabIndex = -1;

document.querySelector(".header-burger").addEventListener("click", function () {
  document.querySelectorAll(".nav__btn, .nav__link").forEach(function (el) {
    el.tabIndex = 0;
  });
  document.querySelector(".nav").classList.add("nav_is-active");
  document.querySelector(".nav__btn").focus();
});

document.querySelector(".nav__btn").addEventListener("click", function () {
  document.querySelectorAll(".nav__btn, .nav__link").forEach(function (el) {
    el.tabIndex = -1;
  });
  document.querySelector(".nav").classList.remove("nav_is-active");
  document.querySelector(".header-burger").focus();
});

document.querySelector(".search-btn").addEventListener("click", function () {
  document.querySelector(".header-search").style.display = "flex";
  document.querySelector(".header-search__input").focus();
});

document
  .querySelector(".header-search__close-btn")
  .addEventListener("click", function () {
    document.querySelector(".search-btn").focus();
    document.querySelector(".header-search").style.display = "none";
  });

document.querySelector(".nav").style.display = "block";
if (getComputedStyle(document.querySelector(".nav")).position === "absolute") {
  document.querySelectorAll(".nav__btn, .nav__link").forEach(function (el) {
    el.tabIndex = -1;
  });
}

document.querySelectorAll(".section-faq__item").forEach(function (item) {
  item.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.querySelector(".section-faq__title").click();
    }
  });
});
