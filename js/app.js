const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggles = $$(".toggle")
toggles.forEach((item) => {
    item.addEventListener("click", (e) => {
        const toggleParent = e.target.closest(".toggle")
        toggleParent.classList.toggle("active")
    })
})