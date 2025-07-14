// ------------slider-----------

const hero=document.querySelector(".hero");
const backgrounds=["photo1", "photo2", "photo3"];
let index=0;

function changeBackground(){
    hero.classList.remove("photo1", "photo2", "photo3");
    hero.classList.add(backgrounds[index]);
    index=(index+1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 5000);

//---------arrows--------


function showBackground() {
  hero.classList.remove(...backgrounds);
  hero.classList.add(backgrounds[index]);
}

function nextSlide() {
  index = (index + 1) % backgrounds.length;
  showBackground();
}

function prevSlide() {
  index = (index - 1 + backgrounds.length) % backgrounds.length;
  showBackground();
}


let sliderInterval = setInterval(nextSlide, 5000);
document.querySelector(".arrow.right").addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

document.querySelector(".arrow.left").addEventListener("click", () => {
  prevSlide();
  resetInterval();
});


function resetInterval() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 5000);
}


showBackground();
