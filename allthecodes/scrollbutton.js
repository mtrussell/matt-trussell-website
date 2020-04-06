const topButton = document.getElementById("top-button");
const bottomButton = document.getElementById("bottom-button");
const myPicks = document.getElementById('mypicks-button');

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    bottomButton.style.display = "block";
    myPicks.style.display = "block";
  } else {
    topButton.style.display = "none";
    bottomButton.style.display = "none";
    myPicks.style.display = "none";
  }
};


function topButtonClick() {
  window.scrollTo(0, 0);
}

function myPicksButtonClick() {
  document.getElementById('picked-colors').scrollIntoView();
}

function bottomButtonClick() {
  window.scrollTo(0, document.body.scrollHeight);
}





