const fonts = [
  "'Roboto', sans-serif",
  "'Big Shoulders Display', cursive",
  "'Mansalva', cursive",
  "'Raleway', sans-serif",
  "'Poppins', sans-serif",
  "'Turret Road', cursive",
  "'Open Sans Condensed', sans-serif",
  "'Vibes', cursive",
  "'Grenze', serif",
  "'Indie Flower', cursive",
  "'Lobster', cursive",
  "'Dancing Script', cursive",
  "'Shadows Into Light', cursive",
  "'Amatic SC', cursive",
  "'Ranga', cursive",
  "'Cinzel', serif",
  "'Cute Font', cursive",
  "'Permanent Marker', cursive",
  "'Satisfy', cursive",
  "'Caveat', cursive",
  "'Orbitron', sans-serif",
  "'Kaushan Script', cursive",
  "'Great Vibes', cursive"
];

function ranNum() {
  return Math.floor( Math.random() * fonts.length );
}

document.getElementById('first-header').style.fontFamily = fonts[ranNum()];
document.getElementById('second-header').style.fontFamily = fonts[ranNum()];
document.getElementById('nav').style.fontFamily = fonts[ranNum()];


if (window.location.href.indexOf('allthecolors') > -1) {
  document.getElementById('picked-colors').style.fontFamily = fonts[ranNum()];

  const colorsList = document.getElementsByClassName('color');
  
  for (let item of colorsList) {
    item.style.fontFamily = fonts[ranNum()];
  }
}




