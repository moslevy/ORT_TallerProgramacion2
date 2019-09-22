let str = require('./data.js').data;

function getObjetos(str){
    return str
        .replace('<ul>','')
        .replace('</ul>','')
        .split('</li>')
        .slice(0,-1)
        .map(video => (
            {
                duracion:video
                        .split('>')[0]
                        .split('=')[1]
                        .split('"')
                        .join('')
                        .split(':'),
                tipo: video
                        .split('>')[1]
            }    
        ))
        .map(video => (
            {
                duracion: parseInt(video.duracion[1]) + parseInt(video.duracion[0])*60,
                tipo: video.tipo
        }))
        .filter(video => video.tipo == 'Redux Video')
        .reduce((anterior, actual) => ({duracion: anterior.duracion + actual.duracion }) )
        .duracion;
}

console.log(getObjetos(str));