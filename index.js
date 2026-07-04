/* =============================================================
   Shared across every page via <script src="index.js">.
   Sections below are used by different pages — see comments.
   ============================================================= */

/* Expandable accordion menu (no-JS friendly: buttons are generated here
   so the submenu is visible by default if this script fails to load).
   Not used by any page in this cleanup batch — kept for whatido.html
   and similar pages that use a ".topItem" accordion. */
var expandableTopItems = document.querySelectorAll(".topItem");

expandableTopItems.forEach(function (topItem) {
  topItem.innerHTML = `<button type="button" aria-expanded="false">${topItem.textContent}</button>`;
  topItem.nextElementSibling.hidden = true;
  var btn = topItem.firstElementChild;
  btn.addEventListener("click", function (e) {
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    let submenu = this.parentNode.nextElementSibling;
    submenu.hidden = !submenu.hidden;
    e.preventDefault();
    return false;
  });
});

/* Not used by any page in this cleanup batch — kept in case another
   page opens a project link in a sized popup window. */
var popupWindow = null;
function positionedPopup(url, winName, w, h, t, l, scroll) {
  const settings =
    "height=" + h + ",width=" + w + ",top=" + t + ",left=" + l + ",scrollbars=" + scroll + ",resizable";
  popupWindow = window.open(url, winName, settings);
}

/* Slideshow controls — used by every case-study page's #slideshow. */
let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

/* Click-to-enlarge/float toggle for a single image (uses the ".sketch"
   and ".center" classes). Not used by any page in this cleanup batch —
   kept in case a p5.js/sketch page relies on it. */
let enlarged = 0;
function toggleEnlargeImg(img) {
  if (enlarged === 0) {
    img.style.transform = "scale(1.8)";
    img.classList.add("center");
    img.classList.remove("sketch");
    img.style.transition = "transform 0.2s ease";
    enlarged = 1;
  } else {
    img.style.transform = "scale(1)";
    img.classList.remove("center");
    img.classList.add("sketch");
    img.style.transition = "transform 0.2s ease";
    enlarged = 0;
  }
  return enlarged;
}

/* Lightbox: click any ".lightbox-img" to view it enlarged.
   Guarded because not every page has a #lightbox element
   (e.g. providence.html doesn't use the lightbox). */
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!lightbox || !lightboxImage) return;

  document.querySelectorAll(".lightbox-img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
});
