const menuBar = document.querySelector(".menuBar")
const menuItems = document.querySelector("#menu-Items")
const darkIcon = document.querySelector('.dark-theme-icon')
const wrapper = document.querySelector('body')

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
        darkIcon.src = '/public/assets/sunCrop.png'
    } else {
        darkIcon.src = '/public/assets/dark-theme.svg'
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
        darkIcon.src = '/public/assets/sunCrop.png'
    } else {
        darkIcon.src = '/public/assets/dark-theme.svg'
    }
}

storage()