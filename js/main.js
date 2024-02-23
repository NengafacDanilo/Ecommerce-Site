/*===== MENU SHOW =====*/ 

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
if(toggle && nav){
    toggle.addEventListener('click',()=>{
        nav.classList.toggle('show')
    })
}
}
showMenu('nav_toggle','nav-menu')
/*===== REMOVE MENU MOBILE =====*/
const navlink = document.querySelectorAll('.nav_link')
function linkAction(){
    // Active link
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
 const navmenu = document.getElementById('nav-menu')
 navmenu.classList.remove('show')
}
navlink.forEach(n =>n.addEventListener('click', linkAction))