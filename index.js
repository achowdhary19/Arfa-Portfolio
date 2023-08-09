var expandableTopItems = document.querySelectorAll(".topItem"); 

expandableTopItems.forEach(function(topItem) {
   /* buttons are generated on init, to support no JS and have the submenus displayed by default */
  topItem.innerHTML=`<button type=button aria-expanded="false">${topItem.textContent}</button>`; //insert a button in the spans
  topItem.nextElementSibling.hidden=true; //hide submenu by default
  var btn=topItem.firstElementChild;
  /* add listener on each button to implement the behavior on click */
  btn.addEventListener("click", function(e) {
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    let submenu = this.parentNode.nextElementSibling;
    submenu.hidden = !submenu.hidden;
    e.preventDefault();
    return false;
  });
});


var popupWindow = null;
function positionedPopup(url,winName,w,h,t,l,scroll){
    settings =
    'height='+h+',width='+w+',top='+t+',left='+l+',scrollbars='+scroll+',resizable'
    popupWindow = window.open(url,winName,settings)
}