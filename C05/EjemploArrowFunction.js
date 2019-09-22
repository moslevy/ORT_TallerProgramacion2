// let nombres = ['Juan','Jose','Maria'];

// nombres = nombres.map(nombre => nombre + ' Hinojosa')

// const race = "100m planos";
// const winners = ['Hunter', 'Singa', 'Imda'];

// const win = winners.map((winner, i) => 
//     ({name: winner, race, pace: i + 1})
// );
// console.table(win);
//console.log(nombres);

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  console.table(
      inventors
      .map((inventor,index) =>
        ({id:index+1, FullName:inventor.first + ' ' + inventor.last, year:inventor.year}))
      .filter(inventor => inventor.year > 1600)
    );

