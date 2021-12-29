var menuBtn = document.getElementById("menubtn")
var hiddenMenu = document.getElementById("hidden-menu")
var closeMenuBtn = document.getElementById("closemenu-btn")

menuBtn.addEventListener('click', () => {
  var closed = hiddenMenu.className.indexOf('closed') !== -1

  if (closed) {
    hiddenMenu.className = hiddenMenu.className.replace('closed', 'open')
  }
  else {
    hiddenMenu.className.replace('open', 'closed')
  }
})

closeMenuBtn.addEventListener('click', () => {
  var open = hiddenMenu.className.indexOf('open') !== -1

  if(open) {
    hiddenMenu.className = hiddenMenu.className.replace('open', 'closed')
  }

  else {
    hiddenMenu.className.replace('closed', 'open')
  }
})


let menubtn2 = document.getElementById('menubtn2')
let closebtn = document.getElementById('closemenu-btn2')
var menu = document.getElementById("menu2")

menubtn2.addEventListener('click', () => {

  if(menu.style.display == 'none') {
    menu.style.display = 'flex'
  } else {
    menu.style.display = 'none'
  }
})

closebtn.addEventListener('click', () => {

  if(menu.style.display == 'flex') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'flex'
  }
})


let leftArrow = document.getElementById("scroll-left")
let rightArrow = document.getElementById("scroll-right")
let container = document.getElementById("horizontal-scroll")



leftArrow.addEventListener('click', () => {
  container.scrollLeft -= 200
})

rightArrow.addEventListener('click', () => {
  container.scrollLeft += 200
})


let openBtn = document.getElementById("open-arrow")
let closeBtn = document.getElementById("close-arrow")
let navbar = document.getElementById("navbar")



openBtn.addEventListener('click',  () => {
  navbar.style.display ="flex"
  openBtn.style.display="none"
  closeBtn.style.display ="flex"
})

closeBtn.addEventListener('click', () => {
  navbar.style.display="none"
  openBtn.style.display="flex"
  closeBtn.style.display ="none"

})









