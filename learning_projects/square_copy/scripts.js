// debug field
// debug field end

navSwap();
setListeners();

function stickyBanner() {
  let sectionPosition = document.querySelector(".sticky-banner-trigger").getBoundingClientRect();
  console.log(window.innerWidth);
  if (sectionPosition.top <= 0 && sectionPosition.bottom >= 0) {
    //enter section
    if (window.innerWidth < 1024){
      //check width
      if (document.querySelector(".sticky-banner.medium-width.sticky-banner-active")) {
        //remove wide version if small width
        document.querySelector(".sticky-banner.medium-width").classList.remove("sticky-banner-active");
      }
      //apply small version
    document.querySelector(".sticky-banner.small-width").classList.add("sticky-banner-active");
    } else { //if wide
    //remove small version
    if (document.querySelector(".sticky-banner.small-width.sticky-banner-active")) {
      document.querySelector(".sticky-banner.small-width").classList.remove("sticky-banner-active");
    }
    //apply wide version
    console.log("apply wide");
    document.querySelector(".sticky-banner.medium-width").classList.add("sticky-banner-active");
    }
  } else if (document.querySelector(".sticky-banner-active")) {
    //remove if outside section
    document.querySelector(".sticky-banner-active").classList.remove("sticky-banner-active");
  }
}

function navSwap() {
  if (window.innerWidth < 1024 && document.querySelector(".navbar > .nav-middle")) {
    let navMiddle = document.querySelector(".nav-middle");
    document.querySelector(".menu-drawer").appendChild(navMiddle);
    let cartMenu = document.querySelector(".cart-dropdown > .dropdown");
    document.querySelector(".cart-drawer").appendChild(cartMenu);
    let navLinks = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLinks.length; i++) {
      document.querySelector(".nav-middle > ul").appendChild(navLinks.item(i));
    }
  }

  if (window.innerWidth >= 1024 && document.querySelector(".menu-drawer > .nav-middle")) {
    escapeDrawer();
    let navMiddle = document.querySelector(".nav-middle");
    let navRight = document.querySelector(".nav-right")
    document.querySelector(".navbar").insertBefore(navMiddle, navRight);
    let cartMenu = document.querySelector(".cart-drawer > .dropdown");
    document.querySelector(".cart-dropdown").appendChild(cartMenu);
    let navLinks = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLinks.length; i++) {
      document.querySelector(".nav-links").appendChild(navLinks.item(i));
    }
  }
}

function collapseToggle(evt) {
  if (window.innerWidth < 1024) {
    if (evt.target.closest(".clps-menu").classList.contains("collapsed")) {
      foldRecursively(evt.target.closest(".collapsed"));
      grayToggle(evt.target.closest(".clps-menu"));
    } else {
      let collapsedSiblings = evt.target.closest(".clps-menu").parentNode.querySelector(".collapsed");
      if (collapsedSiblings) {
        foldRecursively(collapsedSiblings);
      }
      grayToggle(evt.target.closest(".clps-menu"));
      collapseElement(evt.target)
    }
  }
}

function collapseElement(element) {
  if (window.innerWidth < 1024) {
    let section = element.closest(".clps-menu").querySelector("ul");
    let sectionHeight = section.scrollHeight;
    document.documentElement.style.setProperty(`--height-of-${element.closest(".clps-menu").classList[1]}`, sectionHeight + "px");
    element.closest(".clps-menu").classList.add("collapsed");
  }
}

function foldElement(element) {
  if (window.innerWidth < 1024 && document.querySelector(".collapsed")) {
    element.closest(".clps-menu").classList.remove("collapsed");
    document.documentElement.style.setProperty(`--height-of-${element.closest(".clps-menu").classList[1]}`, 0 + "px");
  }
}

function foldRecursively(element) {
  if (window.innerWidth < 1024) {
    foldElement(element);
    if (element.querySelector(".collapsed")) {
      foldRecursively(element.querySelector(".collapsed"));
    }
  }
}

function menuDrawer(){
  if (document.querySelector(".menu-drawer").classList.contains("drawer-on")) {
    escapeDrawer();
  }
  else {
    escapeDrawer();
    document.querySelector(".menu-drawer").classList.add("drawer-on");
    menuBarRot();
  }
  drawerAmbience();
}

function cartDrawer() {
  if (window.innerWidth < 1024) { 
     if (document.querySelector(".cart-drawer").classList.contains("drawer-on")) {
      escapeDrawer();
    }
    else {
      escapeDrawer();
      document.querySelector(".cart-drawer").classList.add("drawer-on");
    }
    drawerAmbience();
  }
}

function escapeDrawer() {
  if (document.querySelector(".cart-drawer").classList.contains("drawer-on")) {
    document.querySelector(".cart-drawer").classList.remove("drawer-on");
  }
  if (document.querySelector(".menu-drawer").classList.contains("drawer-on")) {
    document.querySelector(".menu-drawer").classList.remove("drawer-on");
    if (document.querySelector(".menu-drawer .collapsed")) {
      foldRecursively(document.querySelector(".menu-drawer .collapsed"));
    }
  }
  if (document.querySelector(".gray-bg")) {
    grayToggle(document.querySelector(".gray-bg"));
  }
  drawerAmbience();
  resetMenuBar();
}

function drawerAmbience() {
  if (document.querySelector(".drawer-on")) {
    window.scrollTo(0,0);
    document.querySelector("body").classList.add("scroll-stopper");
    document.querySelector(".dark-overlay").classList.add("dark-overlay-on");
  } else {
    document.querySelector("body").classList.remove("scroll-stopper");
    document.querySelector(".dark-overlay").classList.remove("dark-overlay-on");
  }
}

function grayToggle(element) {
  if (element.classList.contains("clps-lv-1") && !element.classList.contains("gray-bg")) {
    if (document.querySelector(".gray-bg")) {
      document.querySelector(".gray-bg").classList.remove("gray-bg");
    }
    element.classList.add("gray-bg");
  } else {
    element.classList.remove("gray-bg");
  }

}

function preventScrolling(){
  if (document.querySelector(".scroll-stopper")){
    document.querySelector("body").classList.remove("scroll-stopper");
    } else {
      document.querySelector("body").classList.add("scroll-stopper");
    }
  }

function scrollTop() {
  window.scrollTo(0,0);
}

function resetMenuBar() {
  if (document.querySelector(".menu-bar-clockwise").classList.contains("clkwise-bar-rot")) {
    menuBarRot();
  }
}

function menuBarRot() {
  let clkwise = document.querySelector(".menu-bar-clockwise").classList;
  let ctrwise = document.querySelector(".menu-bar-counterwise").classList;
  let top = document.querySelector(".menu-bar-top").classList;
  let bot = document.querySelector(".menu-bar-bottom").classList;
  if (clkwise.contains("clkwise-bar-rot") && ctrwise.contains("ctrwise-bar-rot")){
    clkwise.remove("clkwise-bar-rot");
    ctrwise.remove("ctrwise-bar-rot");
    top.remove("top-bar-exit");
    bot.remove("bot-bar-exit");
  } else {
    clkwise.add("clkwise-bar-rot");
    ctrwise.add("ctrwise-bar-rot");
    top.add("top-bar-exit");
    bot.add("bot-bar-exit");
  }
}



function setListeners() {
    window.addEventListener('resize', stickyBanner)
    document.addEventListener('scroll', stickyBanner);
    window.addEventListener('resize', navSwap);
    document.querySelector(".btn-menu").addEventListener("click", menuDrawer);
    document.querySelector(".btn-cart").addEventListener("click", cartDrawer);
    document.querySelector(".dark-overlay").addEventListener("click", escapeDrawer);
    
    let menus = document.querySelectorAll(".clps-button");
    for (let i = 0; i < menus.length; i++) {
      menus.item(i).addEventListener("click", collapseToggle);
    }

    let footerToggles = document.querySelectorAll(".category-toggle");
    for(let i=0; i < footerToggles.length; i++) {
      footerToggles.item(i).addEventListener("click", categoryCollapse);
    }
    let drawerRollout = document.querySelectorAll(".roll-out");
    for(let i=0; i < drawerRollout.length; i++) {
      drawerRollout.item(i).addEventListener("click", drawerSubRollOut);
    }
    let rollout = document.querySelectorAll(".roll-out");
    for(let i=0; i < rollout.length; i++) {
      rollout.item(i).addEventListener("mouseenter", rollOut);
    }
    let dropdown = document.querySelectorAll(".dropdown");
    for(let i=0; i < dropdown.length; i++) {
      dropdown.item(i).addEventListener("mouseleave", rollIn);
    }
    let rollers = document.querySelectorAll(".roll-in");
    for(let i=0; i < rollers.length; i++) {
      rollers.item(i).addEventListener("mouseenter", nonRollOut);
    }
  }  

function drawerSubRollOut() {
  if (window.innerWidth < 1024) {
    if (this.nextElementSibling.classList.contains("drawer-roller-on")) {
    this.nextElementSibling.classList.remove("drawer-roller-on");
    this.closest(".dropdown").classList.remove("extra-dropdown");
    } else {
      if (document.querySelector(".drawer-roller-on")) {
        document.querySelector(".drawer-roller-on").classList.remove("drawer-roller-on");
        document.querySelector(".dropdown").classList.remove("extra-dropdown");
      }
      let numberOfChildren = this.nextElementSibling.childElementCount;
      document.documentElement.style.setProperty('--num-of-child2', numberOfChildren);
      this.nextElementSibling.classList.add("drawer-roller-on");
      this.closest(".dropdown").classList.add("extra-dropdown");
    }
  }
}

function categoryCollapse(evt) {
  if (evt.target.classList.contains("category-toggle")) {
    let numberOfChildren = evt.target.querySelector(".hidden-column").childElementCount;
    document.documentElement.style.setProperty('--num-of-child', numberOfChildren);
    if (evt.target.querySelector(".hidden-column").classList.contains("hidden")) {
      if (document.querySelector(".visible")) {
        let alreadyVisible = document.querySelector(".visible");
        alreadyVisible.classList.remove("visible");
        alreadyVisible.classList.add("hidden");
      }
      evt.target.querySelector(".hidden-column").classList.remove("hidden");
      evt.target.querySelector(".hidden-column").classList.add("visible");

  } else {
      evt.target.querySelector(".hidden-column").classList.add("hidden");
      evt.target.querySelector(".hidden-column").classList.remove("visible");
    }
  }
}

function rollOut(evt) {
if (window.innerWidth >= 1024) {
    if (document.querySelector(".roller-on")) {
      document.querySelector(".roller-on").classList.remove("roller-on");
    }
    if (evt.target.classList.contains("roll-out")) {
      evt.target.closest(".dropdown").classList.add("roll-out-on");
    evt.target.nextSibling.nextSibling.classList.add("roller-on");
    console.log();
    }
  }
}

//when mouseenter an element that's not a supposed to rollout, placed next to the ones that do:
function nonRollOut(evt) {
  if (window.innerWidth >= 1024) {
    if (evt.target.classList.contains("roll-in")) {
      if (document.querySelector(".roll-out-on")) {
      document.querySelector(".roll-out-on").classList.remove("roll-out-on");
      }
      if (document.querySelector(".roller-on")) {
      document.querySelector(".roller-on").classList.remove("roller-on");
      }
    }
  }
}

function rollIn(evt) {
  if (window.innerWidth >= 1024) {
    if (document.querySelector(".roll-out-on")) {
      if (evt.target.classList.contains("roll-out-on")) {
        evt.target.classList.remove("roll-out-on");
      }
    if (document.querySelector(".roller-on")) {
        evt.target.querySelector(".roller-on").classList.remove("roller-on");
      } 
    }
  }
}