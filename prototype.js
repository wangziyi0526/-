let LoopImages = function (imgArr, container) {
  this.imagesArray = imgArr
  this.container = container
}

LoopImages.prototype = {
  createImage: function () {
    console.log(this.imagesArray)
  },
  changeImage: function () {
    console.log(this.container)
  },
}
let img = [1, 2, 3, 4]
let conta = 'container'
// let loop = new LoopImages(img, conta)
// console.log(loop.__proto__)
// console.log(loop.createImage())
// console.log(loop.changeImage())

let SlideLoopImg = function (imgArr, container) {
  LoopImages.call(this, imgArr, container)
}
SlideLoopImg.prototype = new LoopImages()
let s = new SlideLoopImg(img, conta)
console.log(s.changeImage())
SlideLoopImg.prototype.changeImage = function () {
  console.log('我被改变了啊')
}
let s1 = new SlideLoopImg(img, conta)
console.log(s1.changeImage())
