var expandableTopItems = document.querySelectorAll(".topItem");

expandableTopItems.forEach(function (topItem) {
  /* buttons are generated on init, to support no JS and have the submenus displayed by default */
  topItem.innerHTML = `<button type=button aria-expanded="false">${topItem.textContent}</button>`; //insert a button in the spans
  topItem.nextElementSibling.hidden = true; //hide submenu by default
  var btn = topItem.firstElementChild;
  /* add listener on each button to implement the behavior on click */
  btn.addEventListener("click", function (e) {
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    let submenu = this.parentNode.nextElementSibling;
    submenu.hidden = !submenu.hidden;
    e.preventDefault();
    return false;
  });
});


var popupWindow = null;
function positionedPopup(url, winName, w, h, t, l, scroll) {
  settings =
    'height=' + h + ',width=' + w + ',top=' + t + ',left=' + l + ',scrollbars=' + scroll + ',resizable'
  popupWindow = window.open(url, winName, settings)
}

let index;
let slideIndex = 1;

//W3 
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

let enlarged = 0;
function toggleEnlargeImg(img) {
  if (enlarged === 0) {
    img.style.transform = "scale(1.8)";
    //remove the next two lines if you dont want it to be centered and just want enlarge 

    img.classList.add("center");
    img.classList.remove("sketch");

    img.style.transition =
      "transform 0.2s ease";
    enlarged = 1;
  }
  else {
    img.style.transform = "scale(1)";    //remove the next two lines if you dont want it to be centered and just want enlarge 

    img.classList.remove("center");
    img.classList.add("sketch");
    img.style.transition =
      "transform 0.2s ease";
    enlarged = 0;
  }
  return enlarged;
}

//jquery
