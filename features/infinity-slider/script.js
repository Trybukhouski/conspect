let slides = document.querySelectorAll('.slide');
let container = document.querySelector('.container');
let buttons = document.querySelectorAll('.button');
let slidersSrcList = [];
let step = 0;

for(let i = 0; i < slides.length; i++) {
  slidersSrcList[i] = slides[i].src;
  slides[i].remove();
}

buttons.forEach(el => el.addEventListener("click", nextStep));

function nextStep(el) {
  let nextStep = el.target.innerText;
  if (nextStep === "+") {
    step + 1 === slidersSrcList.length ? step = 0 : step++;
  }
  if (nextStep === "-") {
    step === 0 ? step = slidersSrcList.length - 1 : step--;
  }
  draw();
}

function draw() {
  container.innerHTML = ''; 
  let actualImg = document.createElement('img');
  actualImg.src = slidersSrcList[step];
  actualImg.classList.add('slide');
  container.appendChild(actualImg);
}

