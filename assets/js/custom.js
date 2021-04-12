
// search
var e = document.querySelectorAll('[data-bs-toggle="search"]'),
    t = document.querySelector(".navbar-search");
if (null !== t)
    for (var a = t.querySelector(".navbar-search-field"), r = 0; r < e.length; r++)
        e[r].addEventListener("click", function (e) {
            t.classList.toggle("show"), a.focus(), e.preventDefault();
        });

// header fixed
var header = new Headroom(document.querySelector("#tags"), {
tolerance: 5,
offset : 205,
classes: {
  initial: "animated",
  pinned: "slideDown",
  unpinned: "slideUp"
}
});
header.init();

//navigarion bar tags
var SETTINGS = { navBarTravelling: !1, navBarTravelDirection: "", navBarTravelDistance: 150 };
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
var pnAdvancerLeft = document.getElementById("pnAdvancerLeft"),
    pnAdvancerRight = document.getElementById("pnAdvancerRight"),
    pnProductNav = document.getElementById("pnProductNav"),
    pnProductNavContents = document.getElementById("pnProductNavContents");
pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
var last_known_scroll_position = 0,
    ticking = !1;
function doSomething(a) {
    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
}
pnProductNav.addEventListener("scroll", function () {
    last_known_scroll_position = window.scrollY;
    ticking ||
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = !1;
        });
    ticking = !0;
});
pnAdvancerLeft.addEventListener("click", function () {
    if (!0 !== SETTINGS.navBarTravelling) {
        if ("left" === determineOverflow(pnProductNavContents, pnProductNav) || "both" === determineOverflow(pnProductNavContents, pnProductNav)) {
            var a = pnProductNav.scrollLeft;
            pnProductNavContents.style.transform = a < 2 * SETTINGS.navBarTravelDistance ? "translateX(" + a + "px)" : "translateX(" + SETTINGS.navBarTravelDistance + "px)";
            pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
            SETTINGS.navBarTravelDirection = "left";
            SETTINGS.navBarTravelling = !0;
        }
        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
    }
});
pnAdvancerRight.addEventListener("click", function () {
    if (!0 !== SETTINGS.navBarTravelling) {
        if ("right" === determineOverflow(pnProductNavContents, pnProductNav) || "both" === determineOverflow(pnProductNavContents, pnProductNav)) {
            var a = pnProductNavContents.getBoundingClientRect().right,
                b = pnProductNav.getBoundingClientRect().right;
            a = Math.floor(a - b);
            pnProductNavContents.style.transform = a < 2 * SETTINGS.navBarTravelDistance ? "translateX(-" + a + "px)" : "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
            pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
            SETTINGS.navBarTravelDirection = "right";
            SETTINGS.navBarTravelling = !0;
        }
        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
    }
});
pnProductNavContents.addEventListener(
    "transitionend",
    function () {
        var a = window.getComputedStyle(pnProductNavContents, null);
        a = a.getPropertyValue("-webkit-transform") || a.getPropertyValue("transform");
        a = Math.abs(parseInt(a.split(",")[4]) || 0);
        pnProductNavContents.style.transform = "none";
        pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition");
        pnProductNav.scrollLeft = "left" === SETTINGS.navBarTravelDirection ? pnProductNav.scrollLeft - a : pnProductNav.scrollLeft + a;
        SETTINGS.navBarTravelling = !1;
    },
    !1
);
pnProductNavContents.addEventListener("click", function (a) {
    [].slice.call(document.querySelectorAll(".pn-ProductNav_Link")).forEach(function (a) {
        a.setAttribute("aria-selected", "false");
    });
    a.target.setAttribute("aria-selected", "true");
});
function determineOverflow(a, b) {
    var c = b.getBoundingClientRect(),
        d = Math.floor(c.right);
    c = Math.floor(c.left);
    var e = a.getBoundingClientRect(),
        f = Math.floor(e.right);
    e = Math.floor(e.left);
    return c > e && d < f ? "both" : e < c ? "left" : f > d ? "right" : "none";
}

//slider hero
var swiper = new Swiper('.swiper-container-hero', {
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 576px
    0: {
      slidesPerView: '1',
      spaceBetween: 0
    },
    // when window width is >= 768px
    567: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },
});

//slider simple
var swiper = new Swiper('.swiper-container', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 576px
    0: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },
    // when window width is >= 768px
    567: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },

  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },
});


//swiper entradas
var swiper = new Swiper('.swiper-container-entradas', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 576px
    0: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },
    // when window width is >= 768px
    567: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
   // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },

});

// before - after
 new BeerSlider( document.getElementById( "slider" ), { start: 25 } );


// Tagged (taggin imagenes)
var image = document.getElementById('example-basic');

var options = {};
var data = [
  Taggd.Tag.createFromObject({
    position: { x: 0.19, y: 0.4 },
    text: '<span>REF 903261511</span><br>CONCOLOR® Max Gris Claro',
  }),
  Taggd.Tag.createFromObject({
    position: { x: 0.5, y: 0.3 },
    text: '<span>REF 903261511</span><br>Pintura Lavable Blanco',
  }),
  Taggd.Tag.createFromObject({
    position: { x: 0.775, y: 0.5 },
    text: '<span>REF 903261511</span><br>PEGACOR® Cerámico Gris',
  }),
];

var taggd = new Taggd(image, options, data);



