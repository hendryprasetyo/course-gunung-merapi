/* --------------------- for image slider manual navigation start ------------------------*/
var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active')

    btns.forEach((btn) => {
      btn.classList.remove('active')
    })
  })
  slides[manual].classList.add('active')
  btns[manual].classList.add('active')
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i)
    currentSlide = i
  })
})
/* --------------------- for image slider manual navigation end ------------------------*/


/* ----------------------- image slider autoplay naviation start ----------------------*/
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active')
  let i = 1

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active')
      })

      slides[i].classList.add('active')
      btns[i].classList.add('active')
      i++

      if(slides.length == i){
        i = 0
      }
      if(i >= slides,length){
        return
      }
      repeater()
    }, 10000)
  }
  repeater()
}
repeat()
/* ----------------------- image slider autoplay naviation end ----------------------*/



/* ------------------ menu slide button start ------------------*/
const nav = document.querySelector('nav ul')
const toggle = document.querySelector('toggle-menu')
function toggleMenu() {
  nav.classList.toggle('slide')
}
/* ------------------ menu slide button end ------------------*/



/* -------------- Product function start --------------- */
  function onProduct(){
  slideContainer.style.display = "none"
  navBar.style.display = "flex"
  newBox.style.display = "none"
  wrapper.style.display = "flex"
  cta.style.display = "flex"
  slider.style.display = "none"
  }
/* -------------- Product function end --------------- */



/* -------------- Reload function start --------------- */
  function onReload(){
    window.location.reload()
  }
/* -------------- Reload function end --------------- */



/* --------------- back page start ------------------ */
const slideContainer = document.querySelector('.slide-container')
function onBack() {
  slideContainer.style.display = "block"
  navBar.style.display = "flex"
  newBox.style.display = "none"
  wrapper.style.display = "flex"
  cta.style.display = "flex"
  slider.style.display = "flex"
}
/* --------------- back page end ------------------ */



/* ----------------- DETAIL PRODUK START ------------------- */
const navBar = document.querySelector('nav')
const product1 = document.getElementById("product1")
const newBox = document.getElementById("newBox")
const wrapper = document.getElementById("wrapper")
const cta = document.getElementById('cta')
const slider = document.querySelector('.slide-container')

const productBox1 = document.getElementById("productBox1")
const productBox2 = document.getElementById("productBox2")
const productBox3 = document.getElementById("productBox3")
const productBox4 = document.getElementById("productBox4")
const productBox5 = document.getElementById("productBox5")
const productBox6 = document.getElementById("productBox6")

function getDetail(nomor) {
  newBox.style.display = "flex"
  navBar.style.display = "none"
  wrapper.style.display = "none"
  cta.style.display = "none"
  slider.style.display = "none"

  if (nomor === 1) {
    productBox1.style.display = "flex"
    productBox2.style.display = "none"
    productBox3.style.display = "none"
    productBox4.style.display = "none"
    productBox5.style.display = "none"
    productBox6.style.display = "none"
  } else if (nomor === 2) {
    productBox1.style.display = "none"
    productBox2.style.display = "flex"
    productBox3.style.display = "none"
    productBox4.style.display = "none"
    productBox5.style.display = "none"
    productBox6.style.display = "none"
  } else if (nomor === 3) {
    productBox1.style.display = "none"
    productBox2.style.display = "none"
    productBox3.style.display = "flex"
    productBox4.style.display = "none"
    productBox5.style.display = "none"
    productBox6.style.display = "none"
  } else if (nomor === 4) {
    productBox1.style.display = "none"
    productBox2.style.display = "none"
    productBox3.style.display = "none"
    productBox4.style.display = "flex"
    productBox5.style.display = "none"
    productBox6.style.display = "none"
  } else if (nomor === 5) {
    productBox1.style.display = "none"
    productBox2.style.display = "none"
    productBox3.style.display = "none"
    productBox4.style.display = "none"
    productBox5.style.display = "flex"
    productBox6.style.display = "none"
  } else if (nomor === 6) {
    productBox1.style.display = "none"
    productBox2.style.display = "none"
    productBox3.style.display = "none"
    productBox4.style.display = "none"
    productBox5.style.display = "none"
    productBox6.style.display = "flex"
  }
}
/* ----------------- DETAIL PRODUK END ------------------- */