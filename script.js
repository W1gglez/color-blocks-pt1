console.log(`🟥 🟦 🟩 🟨`);
const blockContainer = document.getElementById(`blocks`);
xCord = Math.floor(Math.random() * 25);
onReady();
function onReady() {
  console.log(`DOM is ready`);
  //build 4 color blocks
  blockContainer.innerHTML += `
    <div class="x" style="animation: x ${calcSpeed()}s linear infinite alternate;">
    <div class="block red-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
    </div>
    <div class="x" style="animation: x ${calcSpeed()}s  linear infinite alternate;">
    <div class="block blue-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
    </div>
    <div class="x" style="animation: x ${calcSpeed()}s linear infinite alternate;">
    <div class="block green-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
    </div>
    <div class="x" style="animation: x ${calcSpeed()}s linear infinite alternate;">
    <div class="block yellow-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
    </div>`;
}

function addBlock(event) {
  event.preventDefault();

  switch (event.target.id) {
    case `red-btn`:
      blockContainer.innerHTML += `<div class="x" style="animation: x ${calcSpeed()}s  linear infinite alternate;">
        <div class="block red-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
        </div>`;
      break;
    case `blue-btn`:
      blockContainer.innerHTML += `<div class="x" style="animation: x ${calcSpeed()}s  linear infinite alternate;">
      <div class="block blue-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
      </div>`;
      break;
    case `green-btn`:
      blockContainer.innerHTML += `<div class="x" style="animation: x ${calcSpeed()}s  linear infinite alternate;">
      <div class="block green-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)">
      </div>
      </div>`;
      break;
    case `yellow-btn`:
      blockContainer.innerHTML += `<div class="x" style="animation: x ${calcSpeed()}s  linear infinite alternate;">
      <div class="block yellow-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
      </div>`;
      break;
  }
}

function removeBlock(event) {
  event.target.remove();
}

function calcSpeed() {
  let speed = Math.round(Math.floor(Math.random() * 10));
  console.log(speed);
  if (speed === 0) {
    speed = calcSpeed();
    return speed;
  } else {
    return speed;
  }
}
