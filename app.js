let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeTotal = 0;
let guestTotal = 0;
function addOneHome() {
  homeTotal++;
  homeScore.innerText = homeTotal;
}
function addTwoHome() {
  homeTotal += 2;
  homeScore.innerText = homeTotal;
}
function addThreeHome() {
  homeTotal += 3;
  homeScore.innerText = homeTotal;
}
function addOneGuest() {
  guestTotal++;
  guestScore.innerText = guestTotal;
}
function addTwoGuest() {
  guestTotal += 2;
  guestScore.innerText = guestTotal;
}
function addThreeGuest() {
  guestTotal += 3;
  guestScore.innerText = guestTotal;
}
