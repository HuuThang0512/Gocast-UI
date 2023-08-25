const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggles = $$(".toggle")
const followBtns = $$(".follow-action .button")
const toTopBtn = $(".button-toTop")
const menuBtn = $(".nav-menu-icon")
const sidebar = $(".sidebar")
const feedTabs = $$(".feed-tab-item")
let feedTabActive = $(".feed-tab-item.active")
const feedTabLine = $(".feed-tab-line")
const sidebarClose = $(".sidebar-close")
const themeBtn = $(".button-dark-mode")

function changeLineTab() {
    let feedTabActive = $(".feed-tab-item.active")
    const feedTabLine = $(".feed-tab-line")
    if (feedTabActive && feedTabLine) {
        feedTabLine.style.left = feedTabActive.offsetLeft + "px"
        feedTabLine.style.width = feedTabActive.offsetWidth + "px"
    }
}


function loadTheme() {
    let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
    let isDarkMode = mediaQueryObj.matches;
    if (isDarkMode) {
        $("html").classList.add("dark")
    }
}

changeLineTab()
loadTheme()

// Click toggles
toggles.forEach((item) => {
    item.addEventListener("click", (e) => {
        const toggleParent = e.target.closest(".toggle")
        toggleParent.classList.toggle("active")
    })
})

// Click Follow Button
followBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
        const btn = e.target.closest(".button")
        const btnSpan = btn.querySelector("span")
        btn.classList.toggle("active")
        if (btn.classList.contains("active")) {
            btnSpan.innerHTML = "Followed"
        } else {
            btnSpan.innerHTML = "Follow"
        }
    })
})

// Click Top Top Button
toTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

// Click show/hide sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})
sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("active")
})

document.addEventListener("click", (e) => {
    const sidebarClick = e.target.closest(".sidebar")
    const menuClick = e.target.closest(".nav-menu-iconP")
    if (!sidebarClick && !menuClick && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
    }
})

// Click Tab Items
feedTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        feedTabActive.classList.remove("active")
        e.target.closest(".feed-tab-item").classList.add("active")
        feedTabActive = e.target.closest(".feed-tab-item")
        changeLineTab()
    })
})

// Click change theme
themeBtn.addEventListener("click", (e) => {
    $("html").classList.toggle("dark")
    // console.log(isDarkMode);
})
