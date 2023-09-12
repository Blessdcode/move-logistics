const menuBar = document.querySelector(".menuBar")
const menuItems = document.querySelector("#menu-Items")
const darkIcon = document.querySelector('.dark-theme-icon')
const wrapper = document.querySelector('body')
// const preLoader = document.querySelector('#preloder')
// const loader = document.querySelector('.loaderEL')

menuBar.addEventListener("click", () => {
    // menuItems.classList.toggle("visible")

    if (menuItems.classList.contains('visible')) {
        menuItems.classList.remove('visible')
    } else {
        menuItems.classList.add('visible')
    }
})

let isDarkMode = false


// darkMode enable
darkIcon.addEventListener("click", (e) => {
    // console.log("hello");

    isDarkMode = !isDarkMode
    if (isDarkMode) {
        wrapper.classList.add('dark-theme')
    } else {
        wrapper.classList.remove('dark-theme')
    }

    // change the icon when toggle on
    if (wrapper.classList.contains('dark-theme')) {
        darkIcon.src = './assets/sunCrop.png'
    } else {
        darkIcon.src = './assets/dark-theme.svg'
    }
    // set localStorage
    localStorage.setItem("isDarkMode", isDarkMode)
})



function storage() {

    // Get the dark stored on local storage
    let storedDarkMode = localStorage.getItem("isDarkMode")

    if (storedDarkMode !== null) {
        isDarkMode = (storedDarkMode === "true")

        if (isDarkMode) {
            wrapper.classList.add('dark-theme')
        } else {
            wrapper.classList.remove('dark-theme')
        }
    }

    if (wrapper.classList.contains('dark-theme')) {
        darkIcon.src = './assets/sunCrop.png'
    } else {
        darkIcon.src = './assets/dark-theme.svg'
    }
}

storage()


// Activate reveal on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("revealOnScroll")
        } else {
            reveals[i].classList.remove("revealOnScroll");
        }
    }
}

// Scale in
window.addEventListener("scroll", scaleIn);

function scaleIn() {
    const scales = document.querySelectorAll(".scale");
    for (let i = 0; i < scales.length; i++) {
        let windowHeight = window.innerHeight;
        let scaleTop = scales[i].getBoundingClientRect().top;
        let scalePoint = 100;

        if (scaleTop < windowHeight - scalePoint) {
            scales[i].classList.add("scaleOnScroll")
        } else {
            scales[i].classList.remove("scaleOnScroll");
        }
    }
}
// zoomLeft
window.addEventListener("scroll", zoomLeft);

function zoomLeft() {
    const zoomLefts = document.querySelectorAll(".zoomLeft");
    for (let i = 0; i < zoomLefts.length; i++) {
        let windowHeight = window.innerHeight;
        let zoom = zoomLefts[i].getBoundingClientRect().top;
        let zoomPoint = 100;

        if (zoom < windowHeight - zoomPoint) {
            zoomLefts[i].classList.add("zoomLeftOnScroll")
        } else {
            zoomLefts[i].classList.remove("zoomLeftOnScroll");
        }
    }
}
// zoomRight
window.addEventListener("scroll", zoomRight);

function zoomRight() {
    const zoomRights = document.querySelectorAll(".zoomRight");
    for (let i = 0; i < zoomRights.length; i++) {
        let windowHeight = window.innerHeight;
        let zoom = zoomRights[i].getBoundingClientRect().top;
        let zoomPoint = 100;

        if (zoom < windowHeight - zoomPoint) {
            zoomRights[i].classList.add("zoomRightOnScroll")
        } else {
            zoomRights[i].classList.remove("zoomRightOnScroll");
        }
    }
}

// accordions
const accordion = document.getElementsByClassName("wrapper");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}


window.addEventListener('load', () => {
    let pre = document.querySelector('#preloder').classList.add('hidden')
})