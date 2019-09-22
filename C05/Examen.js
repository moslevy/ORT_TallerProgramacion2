const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

function getSegundosTotalesFlexboxVideo(str){
    str = str.split('<ul>').join('[');
    str = str.split('<li data-time=').join('{"dataTime":');
    str = str.split('Flexbox Video</li>').join('"tipo":"Flexbox Video"},');
    str = str.split('Redux Video</li>').join('"tipo":"Redux Video"},');
    str = str.split('>').join(',');
    str = str.split(',</ul,').join(']');
    
    return JSON.parse(str)
    .filter(item => item.tipo == 'Flexbox Video')
    .map(timecode => {
        const parts = timecode.dataTime.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    .reduce((Total, Totalsegundos) => Total + Totalsegundos );
};

//console.table(getSegundosTotalesFlexboxVideo(str));


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
                duracion: parseFloat(video.duracion[1]) + parseFloat(video.duracion[0])*60,
                tipo: video.tipo
        }))
        .filter(video => video.tipo == 'Redux Video')
        .reduce((anterior, actual) => ({duracion: anterior.duracion + actual.duracion }) );
}
console.log(getObjetos(str.data));

