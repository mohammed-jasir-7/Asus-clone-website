function sideBar() {
    var btn = document.getElementById('sidebar').style.display = "flex";

}
function closeSidebar1() {


    document.getElementById('sidebar').style.display = 'none';


}
function sideBarExpand(idOfChild) {


    if (document.getElementById(idOfChild).style.display == 'none') {
        document.getElementById(idOfChild).style.display = 'flex'


    }

    else {
        document.getElementById(idOfChild).style.display = 'none'

    }
}
function search() {

    document.getElementById('searchBar').style.display = 'flex'
    console.log('hello1')
}

document.body.addEventListener('click', function () {

})

//section carousel
let slidePosition = 0;
const slide = document.getElementsByClassName('carousel-item-sp')
console.log(slide)
const totalSlide = slide.length
console.log(totalSlide)
const indicatorLine = document.getElementsByClassName('colorline')
console.log(indicatorLine.length)

//buttton
setInterval(nextSlide, 5000)
document.getElementById('carousel-button--next').addEventListener("click", function () {

    nextSlide()


})
document.getElementById('carousel-button--prev').addEventListener("click", function () {

    prevSlide()

})


//nextSlide 
function nextSlide() {
    if (slidePosition == totalSlide - 1) {
        slidePosition = 0;

    } else {
        slidePosition++;
    }
    console.log(slidePosition)
    upDatePostion()



}

// prev
function prevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlide - 1;
    } else {
        slidePosition--;
    }
    upDatePostion();
}
//updatepostion
function upDatePostion() {
    for (let eachSlide of slide) {
        console.log(eachSlide)
        eachSlide.classList.remove('carousel-item--visible')
        eachSlide.classList.add('carousel-item--hidden')






    }

    slide[slidePosition].classList.add('carousel-item--visible')
    for (var i = 0; i < totalSlide; i++) {
        document.getElementsByClassName('colorline')[i].style.backgroundColor = "gray";
        if (i == slidePosition) {
           var j= indicatorLine[i]
        document.getElementsByClassName('colorline')[i].style.backgroundColor = "red";

        }

    }

}


//experiment
window.innerWidth(500)








