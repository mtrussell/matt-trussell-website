const pickedId = document.getElementById('picked-colors');
pickedId.style.display = "none";



// Add colors to picked colors div

document.addEventListener('click', function (event) {
  if (!event.target.matches('h3') && !event.target.matches('.color')) return;

  event.preventDefault();

  pickedId.style.display = "flex";

  const currentColor = event.target;
  const currentColorName = currentColor.textContent;
  const colorClass = currentColorName.toLowerCase();

  if (currentColor.matches('h3')) {
    currentColor.parentNode.style.backgroundColor = colorClass;
    if (currentColor.parentNode.matches('.black')) {
      currentColor.style.color = "white";
    }
  } else if (currentColor.matches('.color')) {
    currentColor.style.backgroundColor = colorClass;
    if (currentColor.matches('.black')) {
      currentColor.style.color = "white";
    }
  } 

  document.getElementById('picked-colors').innerHTML += (
    `<div class="picked-color color ${colorClass}" style="background-color:${colorClass};">` +
    `<h4>${currentColorName}</h4></div>`
    );

}, false);


// Remove picked colors when clicked

document.addEventListener('click', function (event) {
  if (!event.target.matches('h4') && !event.target.matches('.picked-color')) return;

  if (event.target.matches('h4')) {
    event.target.parentNode.remove();
  } else if (event.target.matches('.picked-color')) {
    event.target.remove();
  }

}, false);