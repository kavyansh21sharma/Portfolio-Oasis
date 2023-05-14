const navMenu = document.getElementById("nav-menu"),
    navToggle=document.getElementById("nav-toggle"),
    navClose=document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
/* Validate if constant exist*/
if(navToggle)
{
    navToggle.addEventListener('click',()=>
    {
        navMenu.classList.add("show-menu")
    })
}

/*============== MENU HIDDEN ===============*/
/* Validate if constant exist*/
if(navClose)
{
    navClose.addEventListener('click',()=>
    {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks=document.querySelectorAll(".nav-link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    // When We click on each nav line, we remove the show menu class 
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n=> n.addEventListener('click',linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById("header")
    //  when the scroll is greater than 80 viewport height , add the class scroll header to the tag header 
    if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll",scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
//  get all sections that have an id defines 
const sections = document.querySelectorAll("section[id]");
// add an event listening for scroll 
window.addEventListener("scroll", navHighlighter);
function navHighlighter()
{
    // get current scrll position 
    let scrollY = window.pageYOffset;
    // now we loop through section ti get height , top and ID value for each 
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight; 
        const sectionTop = current.offsetTop -58;
        sectionId = current.getAttribute("id");
        if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav-menu a[href*=' + sectionId + ' ]').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav-menu a[href*=' + sectionId + ' ]').classList.remove("active-link")
        }
})
}

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme=document.querySelector("#theme-button");
const themeModal=document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// Open modal
const OpenThemeModal=()=> {
    themeModal.style.display='grid';
}
// close modal 
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click",OpenThemeModal);
themeModal.addEventListener("click",closeThemeModal);


/*===== FONTS =====*/

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size=> {
    size.addEventListener('click',() => {
        
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize='12px';
        }
        else if(size.classList.contains('font-size-2'))
        {
            fontSize='14px';
        }
        else if(size.classList.contains('font-size-3'))
        {
            fontSize='16px';
        }
        else if(size.classList.contains('font-size-4'))
        {
            fontSize='18px';
        }
        // Change font size of the root html element 
        document.querySelector('html').style.fontSize=fontSize;
    })
})

/*===== PRIMARY COLORS =====*/

// remove active class from colors
const ChangeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click',() => {
        let primaryHue;
        ChangeActiveColorClass();
        if(color.classList.contains('color-1'))
        {
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2'))
        {
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3'))
        {
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4'))
        {
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5'))
        {
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change background color 
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', ()=> {
  //  ADD Active class 
Bg1.classList.add('active');
//remove Active Class from the other 
Bg2.classList.remove('active');
Bg3.classList.remove('active');  
// remove customized changes from local storage 
window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness= '95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

//  ADD Active class 
Bg2.classList.add('active');
//remove Active Class from the other 
Bg1.classList.remove('active');
Bg3.classList.remove('active');
changeBG();
})

// Change background color 
Bg3.addEventListener('click', () => {
    darkColorLightness= '95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

//  ADD Active class 
Bg3.classList.add('active');
//remove Active Class from the other 
Bg2.classList.remove('active');
Bg1.classList.remove('active');
changeBG();
})
