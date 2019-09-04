const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])

// ---------------------- Images --------------------------
const imgLogo = document.getElementById("logo-img");
const imgCta = document.getElementById("cta-img");
const imgMiddle = document.getElementById("middle-img");

imgLogo.src = siteContent ["nav"]["img-src"]
imgCta.src = siteContent ["cta"]["img-src"]
imgMiddle.src = siteContent["main-content"]["middle-img-src"];

// ---------------------- Navigation --------------------------
const navLinks = document.querySelectorAll(".container header nav a");
navLinks.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

// ---------------------- CTA --------------------------

let h1 = document.querySelector('.cta-text h1');
h1.innerHTML = 'Dom <br>Is<br> Awesome';

let getStartedButton = document.querySelector('.cta-text button');
getStartedButton.textContent = siteContent["cta"]["button"];


// ---------------------- Content --------------------------
//top
let topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].childNodes[1].textContent = siteContent["main-content"]['features-h4'];
topContent[0].childNodes[3].textContent = siteContent["main-content"]['features-content'];
topContent[1].childNodes[1].textContent = siteContent["main-content"]['about-h4'];
topContent[1].childNodes[3].textContent = siteContent["main-content"]['about-content'];

//bottom
let bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].childNodes[1].textContent = siteContent["main-content"]['services-h4'];
bottomContent[0].childNodes[3].textContent = siteContent["main-content"]['services-content'];
bottomContent[1].childNodes[1].textContent = siteContent["main-content"]['product-h4'];
bottomContent[1].childNodes[3].textContent = siteContent["main-content"]['product-content'];
bottomContent[2].childNodes[1].textContent = siteContent["main-content"]['vision-h4'];
bottomContent[2].childNodes[3].textContent = siteContent["main-content"]['vision-content'];

// ---------------------- Contact --------------------------
const contact_h4 = document.querySelector('.contact h4');
const contact_p = document.querySelectorAll('.contact p');
contact_h4.textContent = siteContent.contact['contact-h4']
contact_p[0].textContent = siteContent.contact.address
contact_p[1].textContent = siteContent.contact.phone
contact_p[2].textContent = siteContent.contact.email

// ---------------------- Footer --------------------------
const footer = document.querySelector("footer");
footer.children[0].textContent = siteContent.footer.copyright; 

// ---------------------- Create Element / Style --------------------------
let firstAnchor = document.createElement("a");
let lastAnchor = document.createElement("a");
firstAnchor.href = "#";
lastAnchor.href = "#";
firstAnchor.innerText = "First";
lastAnchor.innerText = "Last";
document.querySelector("header nav").prepend(firstAnchor);
document.querySelector("header nav").append(lastAnchor);

document.querySelectorAll("header nav a").forEach(element => {
  element.style.color = "green";
});