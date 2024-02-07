function getRandomIndex(){
    let random = Math.floor(Math.random()*100);
    return random < 10 ? "0" + random : random.toString();
}

/////////////////FOOTER/////////////////

const toggleFooterButton = document.getElementById("footer-toggle");
const footer = document.getElementById("hiddenFooter");

function toggleFooter() {
  console.log("display footer")
  footer.classList.toggle("hidden");
  footer.classList.toggle("show");
}

toggleFooterButton.addEventListener("click", toggleFooter);

/////////////////FOOTER/////////////////

module.exports = {
    getRandomIndex,
  };