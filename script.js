console.log(`🟥 🟦 🟩 🟨`);
const blockContainer = document.getElementById(`blocks`);
let redCounter = 1;
let blueCounter = 1;
let greenCounter = 1;
let yellowCounter = 1;

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
  const block = document.createElement('div');
  block.setAttribute('class', 'x'),
    block.setAttribute(
      'style',
      `animation: x ${calcSpeed()}s  linear infinite alternate;`
    );

  switch (event.target.id) {
    case `red-btn`:
      //Add color block without reseting current color block positions
      block.innerHTML = `<div class="block red-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
        `;
      blockContainer.appendChild(block);

      // Code below resets postion of color blocks upon functinon run
      //   blockContainer.innerHTML += `<div class="x" style="animation: x ${calcSpeed()}s  linear infinite alternate;">
      // <div class="block red-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
      // </div>`;

      //increment counter and display to DOM
      redCounter++;
      document.getElementById('red-count').innerHTML = redCounter;

      break;
    case `blue-btn`:
      block.innerHTML = `<div class="block blue-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
          `;
      blockContainer.appendChild(block);

      blueCounter++;
      document.getElementById('blue-count').innerHTML = blueCounter;

      break;
    case `green-btn`:
      block.innerHTML = `<div class="block green-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
    `;
      blockContainer.appendChild(block);

      greenCounter++;
      document.getElementById('green-count').innerHTML = greenCounter;

      break;
    case `yellow-btn`:
      block.innerHTML = `<div class="block yellow-fill y" style="animation: y ${calcSpeed()}s linear infinite alternate;" onclick="removeBlock(event)"></div>
      `;
      blockContainer.appendChild(block);

      yellowCounter++;
      document.getElementById('yellow-count').innerHTML = yellowCounter;

      break;
  }
}

function removeBlock(event) {
    event.target.remove();

  if (event.target.classList.contains('red-fill')) {
    redCounter--;
    document.getElementById('red-count').innerHTML = redCounter;
  } else if (event.target.classList.contains('blue-fill')) {
    blueCounter--;
    document.getElementById('blue-count').innerHTML = blueCounter;
  } else if (event.target.classList.contains('green-fill')) {
    greenCounter--;
    document.getElementById('green-count').innerHTML = greenCounter;
  } else if (event.target.classList.contains('yellow-fill')) {
    yellowCounter--;
    document.getElementById('yellow-count').innerHTML = yellowCounter;
  }
}

function calcSpeed() {
  let speed = Math.floor(Math.random() * 10);
  //   console.log(speed)
  if (speed === 0) {
    speed = calcSpeed();
    return speed;
  } else {
    return speed;
  }
}
