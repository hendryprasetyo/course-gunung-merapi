const product1 = document.getElementById("product1")
const wrapper = document.getElementById("wrapper")
const newBox = document.getElementById("newBox")
const productBox1 = document.getElementById("productBox1")
const productBox2 = document.getElementById("productBox2")
const cta = document.getElementById('cta')

const nav = document.querySelector('nav ul')
const toggle = document.querySelector('toggle-menu')

function back(){
  window.location.reload()
}

function toggleMenu (){
  nav.classList.toggle('slide')
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
  }

}

