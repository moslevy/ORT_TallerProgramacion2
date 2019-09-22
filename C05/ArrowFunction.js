let nombres = ['Juan', 'Jose', 'Pedro'];

nombres = nombres.map(item => `${item} Fernandez`);

console.table(nombres);


const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));

console.table(win);

const ages = [23,62,45,234,2,62,234,62,34];

const old = ages.filter(age => age >= 60);
console.log(old);

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

console.table(inventors.map((inventors,index) => ({id:index+1, first:inventors.first, last:inventors.last, year:inventors.year}))
  .filter(inventor => inventor.year > 1600));
