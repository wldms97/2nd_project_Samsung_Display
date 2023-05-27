gsap.registerPlugin(ScrollTrigger);

let toggle = document.querySelector("#openmenubtn");

let overlay = document.querySelector(".overlay-menu");
let openMobileMenu = document.querySelector(".overlay-m");
let closeBtn = document.querySelector(".close-btn");

var event2 = new Event("resize");

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    toggle.addEventListener("click", () => {
      overlay.classList.remove("active");
      if (toggle.checked) {
        openMobileMenu.style.opacity = "1";
        openMobileMenu.style.visibility = "visible";
        console.log("0");
      } else {
        openMobileMenu.style.opacity = "0";
        openMobileMenu.style.visibility = "hidden";
      }
    });
  } else {
    toggle.addEventListener("click", () => {
      if (toggle.checked) {
        overlay.classList.add("active");
        console.log("1");
      } else {
        overlay.classList.remove("active");
      }
    });
  }
});

window.dispatchEvent(event2);


window.addEventListener("load", () => {
  let headerBg = document.querySelector("header");
  let headerBgA = document.querySelector(".h-bg-title a");
  if (headerBg.classList.contains("h-bg")) {
    headerBg.style.background = "rgba(0,0,0,0.5)";
    headerBg.style.color = "#fff";
    headerBgA.style.color = "#fff";
  }
});
window.addEventListener("load", () => {
  let moveTitle = document.querySelectorAll(".number-one p");
  goal = document.querySelector(".l-sub-title");

  for (let i = 0; i < moveTitle.length; i++) {
    let item = moveTitle[i];
    item.classList.add("active");
  }
  goal.classList.add("active");
});
function HorizontalScroll() {
  let targetEl = document.querySelector("#container");
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: targetEl,
      start: function start() {
        return "top top";
      },
      end: function end() {
        return "+=".concat(targetEl.offsetWidth, "px");
      },
      scrub: 1,
      pin: true,
      ease: "none",
    },
  });
  timeline
    .addLabel("horizon")
    .fromTo(
      ".section",
      {
        xPercent: 0,
        x: "0",
      },
      {
        xPercent: -100,
        x: "100vw",
        ease: "none",
        delay: 0.15,
      }
    )
    .fromTo(
      "#container",
      {
        delay: 0,
      },
      {
        delay: 0.09,
      },
      "horizon+=0.15"
    );
}

/* 배경 변경 및 애니메이션 */
function pcAnimation() {
  let samsungDisplay = document.querySelectorAll(".move-title span"),
    header = document.querySelector("header"),
    Logo = document.querySelector(".logo a"),
    Menu = document.querySelectorAll(".menu-color");
  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 810) {
      for (let i = 0; i < samsungDisplay.length; i++) {
        let item = samsungDisplay[i];
        item.classList.add("active");
      }
      document.querySelector("section").style.background = "#050505";
      document.querySelector(".change-txt").style.background = "#050505";
    } else {
      document.querySelector("section").style.background = "#fff";
      document.querySelector(".change-txt").style.background = "#fff";
    }

    if (window.pageYOffset >= 1600) {
      document.querySelector(".section02 h2").classList.add("active");
    }
    if (window.pageYOffset >= 2200) {
      let collect = document.querySelector(".collection-title"),
        design = document.querySelector(".design"),
        designDesc = document.querySelector(".grid-desc");
      gridImg = document.querySelector(".grid-img");

      collect.classList.add("active");
      design.classList.add("active");
      designDesc.classList.add("active");
      gridImg.classList.add("active");
    }
    if (window.pageYOffset >= 2520) {
      let foldableTxt = document.querySelector(".foldable-txt-box"),
        foldableTitle = document.querySelector(".foldable h2");
      let foldableImg = document.querySelector(".foldable-img");

      foldableTitle.classList.add("active");
      foldableTxt.classList.add("active");
      foldableImg.style.width = "52.0833vw";
    }
    if (window.pageYOffset >= 2700) {
      let wearalbeTxt = document.querySelector(".wearable-txt-box"),
        wearableTitle = document.querySelector(".wearable h2");
      let wearableImg = document.querySelector(".wearable-img");
      wearableTitle.classList.add("active");
      wearalbeTxt.classList.add("active");
      wearableImg.style.width = "26.25vw";
    }
    if (window.pageYOffset >= 3800) {
      let productTitle = document.querySelector(".product-title");

      productTitle.classList.add("active");
    }
    if (window.pageYOffset >= 4200) {
      let producyList1 = document.querySelector(".product-list-1");
      let producyList2 = document.querySelector(".product-list-2");
      producyList1.style.transform = "translateY(18.2291vw)";
      producyList2.style.transform = "translateY(8.0729vw)";
    }
  });
}
window.addEventListener("resize", function () {
  if (window.innerWidth <= 768) {
    clearInterval(pcAnimationInterval);
  } else if (window.innerWidth > 768) {
    pcAnimationInterval = setInterval(pcAnimation, 1000);
  }
});

let pcAnimationInterval;
if (window.innerWidth > 768) {
  pcAnimationInterval = setInterval(pcAnimation, 1000);
}

/* 모바일 버전 스크롤 트리거 삭제 */
ScrollTrigger.matchMedia({
  "(min-width:769px)": function minWidth769px() {
    HorizontalScroll();
  },
});

/* 탭 메뉴 */
const tabItem = document.querySelectorAll(".tab-btn");
const tabInner = document.querySelectorAll(".main-media");

tabItem.forEach((tab, idx) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabInner.forEach((inner) => {
      inner.classList.remove("tab-on");
    });
    tabItem.forEach((item) => {
      item.classList.remove("active");
    });
    tabItem[idx].classList.add("active");
    tabInner[idx].classList.add("tab-on");
  });
});

/* 오버레이 메뉴 */

/* pc 버전 */
// let menuBtn = document.querySelector(".menu-btn"),
//   closeBtn = document.querySelector(".close-btn"),
//   overlayMenu = document.querySelector(".overlay-menu"),
//   bodyScrollNone = document.querySelector("body");

// menuBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   overlayMenu.classList.add("active");
//   bodyScrollNone.classList.add("scroll-none");
// });

// closeBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   overlayMenu.classList.remove("active");
//   bodyScrollNone.classList.remove("scroll-none");
// });

let lastScrollTop = 0;
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  if (Math.abs(lastScrollTop - scrollTop) <= 10) return;
  if (scrollTop > lastScrollTop && lastScrollTop > 0) {
    $("header").css({ top: "-110px" });
  } else {
    $("header").css({ top: "0px" });
  }
  lastScrollTop = scrollTop;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#go-top").addClass("on");
  } else {
    $("#go-top").removeClass("on");
  }
});

$("#go-top").click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
/* cirlce */

// const cirlce = document.querySelector(".circle");

// document.addEventListener("mousemove",(e)=>{
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   cirlce.style.left = mouseX + "px";
//   cirlce.style.top = mouseY + "px";
// });

/* 아코디언 */
const buttons = document.querySelectorAll(".overlay-m-menu-list > li");

buttons.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    
    // e.preventDefault();
    //let buttonsNum = buttons[i];

    this.childNodes[3].classList.toggle("on");
    this.childNodes[1].classList.toggle("rotate");
    buttons.forEach(function (button2, index2) {
      if (index !== index2) {
        button2.childNodes[3].classList.remove("on");
      }
    });
  });
});

// //팝업 생성
// let popupDialog = document.querySelector("dialog"),
//   dayCheck = document.querySelector("#oneday_close"),
//   popupClose = popupDialog.querySelector("button");

// function setCookie(name, value, day) {
//   let date = new Date();
//   date.setDate(date.getDate() + day);
//   document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
// }

// //쿠키확인
// function checkCookie(name) {
//   let cookieArr = document.cookie.split(";");
//   let visited = false;

//   for (let cookie of cookieArr) {
//     if (cookie.search(name) > -1) {
//       visited = true;
//       break;
//     }
//   }

//   //dialog 표시여부
//   if (!visited) {
//     popupDialog.setAttribute("open", "");
//   }
// }
// checkCookie("ABC");

// //닫기버튼
// popupClose.addEventListener("click", () => {
//   popupDialog.removeAttribute("open");
//   if (dayCheck.checked) {
//     setCookie("ABC", "home", 1);
//   } else {
//     setCookie("ABC", "home", -1);
//   }
// });
