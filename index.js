let button = document.querySelectorAll(".div-block-7");
let header = document.querySelector("header");
let body = header.nextElementSibling;
let footer = document.querySelector("footer");
let customLocation = document.location;
let about = document.querySelector(".about");
let activity = document.querySelector(".activity");
let menu1 = document.querySelector(".second-menu");
let menu2 = document.querySelector(".menu-block");
let counter = localStorage.getItem("filterCounter")
  ? localStorage.getItem("filterCounter")
  : 0;
let uaLang = document.querySelectorAll(".lang-ua");
let enLang = document.querySelectorAll(".lang-en");
let languages = document.querySelectorAll(".div-block-8");
//console.log(customLocation.pathname.slice(0, 3));

if (customLocation.pathname.slice(0, 3) !== "/en") {
  let additionalList = document.querySelector(".additional-list");
  additionalList.classList.add("initialListTransition");
  let mobileActivities = document.querySelector(".modal-menu-list-last");
  mobileActivities.addEventListener("click", (e) => {
    let classCss = additionalList.classList[1];
    let classReplace = additionalList.classList.contains("listTransition")
      ? "backListTransition"
      : "listTransition";
    additionalList.classList.replace(classCss, classReplace);
  });
  for (let item of uaLang) {
    item.classList.add("active");
  }
  for (let item of enLang) {
    item.classList.remove("active");
  }
} else {
  for (let item of uaLang) {
    item.classList.remove("active");
  }
  for (let item of enLang) {
    item.classList.add("active");
  }
}

for (let item of languages) {
  item.addEventListener("click", (e) => {
    let target = e.target;

    if (target === uaLang[0] || target === uaLang[1]) {
      let url = `${customLocation.origin}/alt-main`;
      customLocation.assign(url);
    } else {
      let url = `${customLocation.origin}/en/alt-main`;
      customLocation.assign(url);
    }
  });
}
if (
  localStorage.getItem("filtered") === "1" &&
  localStorage.getItem("filterCounter") % 2
) {
  header.classList.add("filter");
  body.classList.add("filter");
  footer.classList.add("filter");
}
for (let item of button) {
  item.addEventListener("click", () => {
    counter++;
    if (counter % 2) {
      header.classList.add("filter");
      body.classList.add("filter");
      footer.classList.add("filter");
      localStorage.setItem("filtered", "1");
      localStorage.setItem("filterCounter", counter);
    } else {
      header.classList.remove("filter");
      body.classList.remove("filter");
      footer.classList.remove("filter");
      localStorage.setItem("filtered", "0");
      localStorage.setItem("filterCounter", counter);
    }
  });
}
about.addEventListener("click", (e) => {
  console.log(e.target);
  menu2.style.height = "0px";
  if (!menu1.style.height || menu1.style.height === "0px") {
    menu1.style.height = "64px";
  } else {
    menu1.style.height = "0px";
  }
});
activity.addEventListener("click", (e) => {
  console.log(e.target);
  menu1.style.height = "0px";
  if (!menu2.style.height || menu2.style.height === "0px") {
    menu2.style.height = "128px";
  } else {
    menu2.style.height = "0px";
  }
});
console.log("what the fuck!!!");
