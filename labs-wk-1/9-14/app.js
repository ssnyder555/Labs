console.log('workin');


// const music = {
  // genre: 'rap',
  // volume: 'loud',
  // bass: 'blasted',
  // artiest: '2 chainz',
// }

// const me = {
  // name: 'Stephen',
  // age: '31',
  // email: 'ssnyder555@live.com',
// }
// me.age = '100';
// me['place of residence'] = 'cobb';
//
// const monster = {
//   name: "Slimer",
//   color: "greenish",
//   type: "plasm or ghost or something",
//   intrduce () {
//   console.log('HELLO');
// }
// };
// monster.type = 'creature';
// monster['age'] = '6';
// console.log(monster.intrduce());



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const adventurer = {
  name: 'Mario',
  hitpoints: 10,
  damage: 1,
  attack () {
    console.log('Mario just attacked Ogre');
  }
};

const ogre = {
  name: 'Shrek',
  hitpoints: 10,
  damage: getRandomInt(1, 3),
  attack () {
    console.log('Ogre just attacked Mario');
  }
}
const ogreFight = () => {

  for ( let i = ogre.hitpoints; i > 0; i-- ) {

    if (ogre.hitpoints < 1 && ogre.hitpoints > -2 ) {
      console.log(adventurer.name + ' wins! ');
      return;

    } else if (adventurer.hitpoints < 1 && adventurer.hitpoints > -2){
      console.log(ogre.name + ' wins! ');
      return;
}
      ogre.hitpoints = ogre.hitpoints - adventurer.damage;
      console.log(adventurer.name + ' just attacked ' + ogre.hitpoints);

      adventurer.hitpoints = adventurer.hitpoints - getRandomInt(1, 3);
      console.log(ogre.name + ' just attacked ' + adventurer.hitpoints);

}

}
