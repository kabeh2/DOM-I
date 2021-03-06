const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Change Color",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//////////////////////////////////////////
///////////// === NAV ===

// Example: Update the img src for the logo
const logo = document.querySelector("header img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navAnchors = document.querySelectorAll("header nav a");
navAnchors.forEach((el, i) => {
  navAnchors[i].textContent =
    siteContent["nav"][`${Object.keys(siteContent["nav"])[i]}`];
});

const navMain = document.querySelector("nav");

const firstNav = document.createElement("a");
firstNav.href = "#";
firstNav.textContent = "Home";

navMain.prepend(firstNav);

const lastNav = document.createElement("a");
lastNav.setAttribute("href", "#");
lastNav.textContent = "Blog";

navMain.appendChild(lastNav);

navAnchors.forEach(el => (el.style.color = "limegreen"));

//////////////////////////////////////////
///////////// === CTA ===

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaH1 = document.querySelector(".cta .cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"];

const ctaBtn = document.querySelector(".cta .cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];

ctaBtn.addEventListener("click", e => {
  if (ctaH1.style.color === "initial") {
    ctaH1.style.color = "limegreen";
    // e.target.style.color = "limegreen";
  } else {
    ctaH1.style.color = "initial";
    // e.target.style.color = "initial";
  }
});

//////////////////////////////////////////
///////////// === MAIN-CONTENT ===

const topContentH4 = document.querySelectorAll("h4");
const mainH4Keys = Object.keys(siteContent["main-content"]).filter(keys => {
  return keys.includes("h4");
});

topContentH4.forEach((el, i) => {
  topContentH4[i].textContent = siteContent["main-content"][mainH4Keys[i]];
});

const mainContentP = document.querySelectorAll("p");
const mainPKeys = Object.keys(siteContent["main-content"]).filter(key =>
  key.includes("content")
);

mainContentP.forEach((el, i) => {
  mainContentP[i].textContent = siteContent["main-content"][mainPKeys[i]];
});

const mainImg = document.querySelector(".main-content img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//////////////////////////////////////////
///////////// === CONTACT ===

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo.forEach((el, i) => {
  contactInfo[i].textContent =
    siteContent["contact"][`${Object.keys(siteContent["contact"])[i + 1]}`];
});

//////////////////////////////////////////
///////////// === FOOTER ===

const pageFooter = document.querySelector("footer p");
pageFooter.textContent = siteContent["footer"]["copyright"];
