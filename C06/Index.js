const fs = require('fs');

const inventors = JSON.parse(fs.readFileSync("./inventors.json","utf-8"));

console.table(inventors.inventors.filter(value => value.year > 1600));

inventors.inventors.push(
    {
        first: 'Pablo',
        last: "Fernandez",
        year: 1976
    }
);

fs.writeFileSync("./inventors.json",JSON.stringify(inventors,'','\t'),'utf8');