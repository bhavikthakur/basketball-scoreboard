let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let leader = document.getElementById("leader");
let reset = document.getElementById("reset-btn");

let homeTotal = 0;
let guestTotal = 0;

function compareLeader() {
  if (homeTotal > guestTotal) {
    leader.innerText = `Home is leading the game. 🔥`;
  } else if (homeTotal < guestTotal) {
    leader.innerText = `Guest is leading the game. 🔥`;
  } else {
    leader.innerText = `${homeTotal} : ${guestTotal} Equal scores ⚖️`;
  }
}

function updateTeamScore(team, points) {
  if (team === "home") {
    homeTotal += points;
    homeScore.innerText = homeTotal;
  } else {
    guestTotal += points;
    guestScore.innerText = guestTotal;
  }
  compareLeader();
}

function resetScore() {
  homeTotal = 0;
  guestTotal = 0;
  homeScore.innerText = homeTotal;
  guestScore.innerText = guestTotal;
  leader.innerText = `Let the Scoreboard Do the Talking`;
}
