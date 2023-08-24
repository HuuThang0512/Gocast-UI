const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggles = $$(".toggle")
const followBtns = $$(".follow-action .button")

toggles.forEach((item) => {
    item.addEventListener("click", (e) => {
        const toggleParent = e.target.closest(".toggle")
        toggleParent.classList.toggle("active")
    })
})

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