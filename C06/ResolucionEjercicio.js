let data = require('./data').data;

function getObjects(data){
    return data
        .replace('<ul>','')
        .replace('</ul>','')
        .split('</li>')
        .slice(0, -1)
        .map(video => (
            {
               duracion:video
                        .split('>')[0]
                        .split('=')[1]
                        .split('"')
                        .join('')
                        .split(':'),
               tipo:video
                        .split('>')[1]     
            }
        ))
        .map(video => (
            {
                duracion: parseInt(video.duracion[1]) + parseInt(video.duracion[0])*60,
                tipo: video.tipo
            }
        ))
        .filter(video => video.tipo == 'Redux Video')
        .reduce((anterior, actual) => ({duracion: anterior.duracion + actual.duracion}))
        .duracion;
}

console.table(getObjects(data));

//let array = [1,2,3,4];

//array.reduce((anterior, actual) => anterior + actual)
