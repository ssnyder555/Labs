console.log('%c spacebattle', 'font-size: 40px');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
class Alien {
  constructor() {
    this.hull = getRandomInt(3, 6);
    this.firepower = getRandomInt(2, 4);
    this.accuracy = getRandomArbitrary(.6, .8);
  }
}
let playerShip = {hull: 20,
                  firepower: 5,
                  accuracy: 0.7,
                  missiles: {count: 2, firepower: 7}
                }

let alienArray = [];
for ( let i = 0; i < getRandomInt(4, 7); i++ ) {
  let alienX = new Alien();
  alienArray.push(alienX);
}

for ( let i = playerShip.hull; i > 0; i-- ) {
  alert('press ok to start');
  let chooseMissile = 0;
  if (playerShip.missiles.count > 0) {
    chooseMissile = window.prompt('Do you want to use a missile? Enter yes or no.');
  }
  if(confirm('Do you want to choose a ship? Press OK. If not, Cancel.')){
    let target = window.prompt('Choose your ship ' + alienArray.length + ' left');
    alienShip = alienArray.splice(Number(target - 1), 1);
    alienShip = alienShip[0];
  } else {
    alienShip = alienArray.pop();
  }
  //console.log(alienArray.length);
  for ( let k = alienShip.hull; k > 0; k-- ) {

    if (playerShip.accuracy > alienShip.accuracy) {
      if (chooseMissile === 'yes') {
        playerShip.missiles.count -= 1;
        alienShip.hull -= playerShip.missiles.firepower;
      } else {
        alienShip.hull -= playerShip.firepower;
      }
    } else {
      playerShip.hull -= alienShip.firepower;
      playerShip.hull += getRandomInt(1, 4);
    }
    if (alienShip.hull < 0) {
      break;
    }
  }

  if (playerShip.hull < 0) {
    console.log('you lost');
    break;
  }
  if (alienArray.length === 0) {
    console.log('you won');
    break;
  }
  console.log(playerShip.hull + ' player health');
  console.log(alienShip.hull + ' alien health');

  if (confirm('Do you want to retreat? Press OK. If not press Cancel.')) {
    console.log('you lose');
    break;
  }
}
