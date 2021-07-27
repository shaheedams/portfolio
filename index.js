const name = document.getElementsByClassName("name")
const btn = document.querySelector(".btn")
btn.addEventListener("click",clicks)
function clicks() {
    name[0].innerText = "bye"
    name[0].style.display = "none"    
    }
