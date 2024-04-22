const arrowsList = document.querySelectorAll(".arrow");
arrowsList.forEach(arrow=>{
    arrow.addEventListener("click",e=>{
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu")
    })
})

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click",()=>{
    sidebar.classList.toggle("close")
    document.querySelectorAll(".nav-links li").forEach(listItem=>{
        if(listItem.classList.contains("showMenu")){
            listItem.classList.remove("showMenu");
        }
    })
});