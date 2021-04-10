const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const scorpion = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'kunai',
  attack: function () { 
    console.log(scorpion.name + ' ' + 'Fight...')
  }
};

const kitana = {
  player: 1,
  name: 'KITANA',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: 'kunai',
  attack: function () {
    console.log(kitana.name + ' ' + 'Fight...')
  }
};

const liukang = {
  player: 2,
  name: 'LIUKANG',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: 'kunai',
  attack: function () {
    console.log(liukang.name + ' ' + 'Fight...')
  }
};

const sonya = {
  player: 2,
  name: 'SONYA',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'kunai',
  attack: function () {
    console.log(sonya.name + ' ' + 'Fight...')
  }
};

const subzero = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: 'kunai',
  attack: function () {
    console.log(subzero.name + ' ' + 'Fight...')
  }
};


createElement = function (tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  
  return $tag;
}

createPlayer = function (char) {
  
  const $player = createElement('div', 'player' + char.player);
  const $progressbar = createElement('div', 'progressbar');

  const $life = createElement('div', 'life');
  $life.style.width = (char.hp+'%');

  const $name = createElement('div', 'name'); 
  $name.innerText = char.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = createElement('div', 'character');
  
  const $img = createElement('img');
  $img.src = char.img;

  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);

 return $player;
}

changeHP = function (player) {
  const $playerLife = document.querySelector('.player'+ player.player +' .life');
  player.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = player.hp + '%';

  if (player.hp <= 0) {
    $playerLife.style.width = 0 + '%';
    $randomButton.disabled = true;
    if (scorpion.hp > sonya.hp) {
    $arenas.appendChild(playerLose(scorpion.name));
      } else {
      $arenas.appendChild(playerLose(sonya.name));
    }
  }
}

playerLose = function (name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' wins';
  return $loseTitle;
}

$randomButton.addEventListener('click', function () {
  changeHP(scorpion);
  changeHP(sonya);
})

$arenas.appendChild(createPlayer(scorpion));
$arenas.appendChild(createPlayer(sonya));


