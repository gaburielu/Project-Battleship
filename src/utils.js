function getRandomIndex(){
    let random = Math.floor(Math.random()*100);
    return random < 10 ? "0" + random : random.toString();
}
/////////////////AUDIO/////////////////

const cannon1 = document.getElementById('cannonAudio1');
const cannon2 = document.getElementById('cannonAudio2');
const cannon3 = document.getElementById('cannonAudio3');
const splash1 = document.getElementById('waterSplashAudio1');
const splash2 = document.getElementById('waterSplashAudio2');
const splahs3 = document.getElementById('waterSplashAudio3');
const splash4 = document.getElementById('waterSplashAudio4');
const splash5 = document.getElementById('waterSplashAudio5');

function playCannon() {
  cannon1.play();
  // let random = Math.floor(Math.random() * 3);
  // if(random == 1){
  //   cannon1.play();
  // } else if (random == 2){
  //   cannon2.play();
  // } else {
  //   cannon3.play();
  // }
}

function playSplash() {
  let random = Math.floor(Math.random() * 5);
}

/////////////////FOOTER/////////////////

const toggleFooterButton = document.getElementById("footer-toggle");
const footer = document.getElementById("hiddenFooter");

function toggleFooter() {
  footer.classList.toggle("hidden");
  footer.classList.toggle("show");
}

toggleFooterButton.addEventListener("click", toggleFooter);

/////////////////FOOTER/////////////////

module.exports = {
    getRandomIndex,
    playCannon,
    playSplash,
  };