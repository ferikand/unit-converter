const button = document.querySelector("#convert-btn");
const input = document.querySelector("#digits");
const lengtH = document.querySelector("#length");
const vol = document.querySelector("#volume");
const mass = document.querySelector("#mass");

button.addEventListener("click", function () {
  // console.log(input.value);
  render();
});

function getFeets() {
  return (input.value * 3.28084).toFixed(3);
}

function getMeters() {
  return (input.value / 3.28084).toFixed(3);
}

function getGallons() {
  return (input.value / 0.264172).toFixed(3);
}

function getLiters() {
  return (input.value * 0.264172).toFixed(3);
}

function getPounds() {
  return (input.value * 2.20462262185).toFixed(3);
}

function getKg() {
  return (input.value / 2.20462262185).toFixed(3);
}

function renderLength() {
  lengtH.textContent = `${input.value} meters = ${getFeets()} feet | ${
    input.value
  } feet = ${getMeters()} meters`;
}

function renderVolume() {
  vol.textContent = `${input.value} liters = ${getGallons()} gallons | ${
    input.value
  } gallons = ${getLiters()} liters`;
}

function renderMass() {
  mass.textContent = `${input.value} kilos = ${getPounds()} pounds | ${
    input.value
  } pounds = ${getKg()} kilos`;
}

function render() {
  renderLength();
  renderVolume();
  renderMass();
}
