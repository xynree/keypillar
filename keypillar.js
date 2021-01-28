const mrleg = document.querySelectorAll('.leg');


// mrleg.forEach(leg => {
//   addEventListener("click", function () {
//     leg.classList.add("legAnimate")
//   })

//   addEventListener("transitionend", function(e) {
//     if (e.propertyName !== 'transform') return;
//     leg.classList.remove("legAnimate")
//   })
  
// });


for (let i = 0; i < mrleg.length; i++) {
  mrleg[i].addEventListener("click", function () {
    mrleg[i].classList.add("legAnimate")
    const audioArr = document.querySelectorAll('audio');
    if (!audioArr[i]) return;
    audioArr[i].currentTime=0;
    audioArr[i].play();

  });
  mrleg[i].addEventListener("transitionend", function(e) {
    if (e.propertyName !== 'transform') return;
    mrleg[i].classList.remove("legAnimate")

  })
  
  window.addEventListener('keydown', function(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime=0;
    audio.play();

    const leg = document.querySelector(`img[data-key="${e.keyCode}"]`)
  
    leg.classList.add("legAnimate");})
  
  
  }

// mrleg.forEach(leg => {

//   mrleg[i]document.addEventListener(`leg[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime=0;
//   audio.play();
  
// });

// window.addEventListener('keydown', function(e) {

//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime=0;
//   audio.play();

// });