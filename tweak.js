const product1 = document.getElementById("product1")
const wrapper = document.getElementById("wrapper")
const newBox = document.getElementById("newBox")

const productBox1 = document.getElementById("productBox1")
const productBox2 = document.getElementById("productBox2")
const productBox3 = document.getElementById("productBox3")
const productBox4 = document.getElementById("productBox4")
const productBox5 = document.getElementById("productBox5")
const productBox6 = document.getElementById("productBox6")

const cta = document.getElementById('cta')

const nav = document.querySelector('nav ul')
const toggle = document.querySelector('toggle-menu')

var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1

// for image slider manual navigation
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

// for image slider autoplay naviation
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

function toggleMenu(menu) {
  console.log(menu)
  nav.classList.toggle('slide')
}

function back(mm) {
  console.log(mm)
  window.location.reload()
}

function getDetail(nomor) {
  console.log('produk: ', nomor)
  newBox.style.display = "block"
  wrapper.style.display = "none"
  cta.style.display = "none"

  if (nomor === 1) {
    productBox1.style.display = "flex"
  } else if (nomor === 2) {
    productBox2.style.display = "flex"
  } else if (nomor === 3) {
    productBox3.style.display = "flex"
  } else if (nomor === 4) {
    productBox4.style.display = "flex"
  } else if (nomor === 5) {
    productBox5.style.display = "flex"
  } else if (nomor === 6) {
    productBox6.style.display = "flex"
  }
}