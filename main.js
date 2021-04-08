const scorpion = {
  name: 'SCORPION',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'kunai',
    attack: function() {
    console.log(player2.name + ' ' + 'Fight...')
  }
}

const kitana = {
  name: 'KITANA',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: 'kunai',
    attack: function() {
    console.log(player2.name + ' ' + 'Fight...')
  }
}

const liukang = {
  name: 'LIUKANG',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: 'kunai',
    attack: function() {
    console.log(player2.name + ' ' + 'Fight...')
  }
}

const sonya = {
  name: 'SONYA',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'kunai',
    attack: function() {
    console.log(player2.name + ' ' + 'Fight...')
  }
}

const subzero = {
  name: 'SUB-ZERO',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: 'kunai',
    attack: function() {
    console.log(player2.name + ' ' + 'Fight...')
  }
}


createPlayer = function (player, char) {
  
  const $player = document.createElement('div');
  $player.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = (char.hp+'%');

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = char.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $img = document.createElement('img');
  $img.src = char.img;

  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
}

createPlayer('player1', scorpion);
createPlayer('player2', subzero);



// - http://reactmarathon-api.herokuapp.com/assets/scorpion.gif
// - http://reactmarathon-api.herokuapp.com/assets/kitana.gif
// - http://reactmarathon-api.herokuapp.com/assets/liukang.gif
// - http://reactmarathon-api.herokuapp.com/assets/sonya.gif
// - http://reactmarathon-api.herokuapp.com/assets/subzero.gif