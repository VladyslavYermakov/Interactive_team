'use strict'

const result = document.getElementById('resultScience');

const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
const buttons = document.querySelectorAll('.sciences-btn');
//19 ст
buttons[0].onclick = () => {
  const arr = scientists.filter(s => s.born >= 1800 && s.born < 1900);
  resultScience.textContent = arr.map(s => s.name + ' ' + s.surname);
};
//Einstein
buttons[1].onclick = () => {
  const einstein = scientists.find(s => s.name === 'Albert');
  resultScience.textContent = 'Einstein народився в:' + einstein.born;
};
//alphabet
buttons[2].onclick = () => {
  const arr = [...scientists].sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );
  resultScience.textContent = arr.map(
    s => s.name + ' ' + s.surname
  );
};
//life
buttons[3].onclick = () => {
  const arr = [...scientists].sort(
    (a, b) => a.dead - a.born - (b.dead - b.born)
  );
  resultScience.textContent = arr.map(
    s => s.name + ' ' + s.surname + ' (' + (s.dead - s.born) + ')'
  );
};
