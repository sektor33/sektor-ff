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


const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[index].classList.add("active");
    dot.classList.add("active");
  });
});



 const categoryItems = document.querySelectorAll('.project-categories li');
  const projectCards = document.querySelectorAll('.project-card');

  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.project-categories li.active').classList.remove('active');
      item.classList.add('active');

      const filter = item.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });



 
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('successModal');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      website: formData.get('website'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('https://borjomi.loremipsum.ge/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.status === 1) {
        modal.style.display = 'flex';
        setTimeout(() => {
          modal.style.display = 'none';
          form.reset();
        }, 3000);
      } else {
        alert('Error sending message');
      }
    } catch (err) {
      alert('Failed to send message');
    }
  });


  window.addEventListener('scroll', function() {
  const skills = document.querySelectorAll('.progress');
  const aboutSection = document.querySelector('.about-section');
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight) {
    skills.forEach(skill => {
      const percent = skill.getAttribute('data-percent');
      skill.style.width = percent + '%';
    });
  }
});


