let bg = document.querySelector(".h1-text");
const tl = new TimelineMax();
document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(() => {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".intro").remove();
    document.body.style.overflow = "auto";
    tl.fromTo(bg, 1, { height: "0px" }, { height: "70px" });
  }, 3000);
});

let tog = document.querySelector(".menu-icon");
function closeNav() {
  document.querySelector(".menu-icon img").src = "/assest/Group 2.svg";
  tog.id = "off";
  tog.classList.remove("tog");
  //restore the scroll bar
  document.body.style.overflow = "auto";
  //it's show the text in hero
  document.querySelector(".text").style.display = "block";
  document.querySelector(".logo").style.position = "static";
  document.querySelectorAll(".boxs>div").forEach((e) => {
    e.style.height = "100%";
    e.style.animationName = "menu-up";
  });
  document.querySelector(".logo img").src = "/assest/rlogo 3.png";
  setTimeout(() => {
    if (tog.id === "off") {
      document.querySelector(".boxs").style.display = "none";
    }
  }, 3000);
  if (tog.id === "off") {
    document.querySelector(".real-nav").style.display = "none";
  }
}
tog.addEventListener("click", () => {
  tog.classList.add("tog");
  setTimeout(() => {
    if (tog.id === "off") {
      document.body.style.overflow = "hidden";
      document.querySelector(".menu-icon img").src = "/assest/after-tog.svg";
      tog.id = "on";
      document.querySelector(".text").style.display = "none";
      document.querySelector(".boxs").style.display = "grid";
      document.querySelectorAll(".boxs >div").forEach((e) => {
        e.style.height = "0%";
        e.style.animationName = "menu-down";
      });
      document.querySelector(".logo img").src = "/assest/rlogo 1.png";
      document.querySelector(".logo").style.position = "fixed";
      setTimeout(() => {
        if (tog.id === "on") {
          document.querySelector(".real-nav").style.display = "flex";
        }
      }, 2000);
    } else {
      closeNav();
    }
  }, 200);
});
document.querySelectorAll(".nav-links li a").forEach((il) => {
  il.addEventListener("click", () => {
    closeNav();
  });
});
