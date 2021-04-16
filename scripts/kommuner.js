console.log('kommuner.js running...');

const region = document.getElementById('region');
const kommuner = document.getElementById('kommuner');

function visKommuner(e) {
    const valgtRegion = region.value;

    // Resetter tilgængelige kommuner
    kommuner.innerHTML = '';

    if (valgtRegion === 'fyn') {
        const kommuneArr = ['Assens', 'Kerteminde', 'Langeland', 'Nordfyn', 'Nyborg', 'Odense', 'Svendborg', 'Ærø'];

        for (let i = 0; i < kommuneArr.length; i++) {
            let k = document.createElement('a');
            k.setAttribute('href', '#');
            k.innerText = kommuneArr[i];
            kommuner.appendChild(k);
        }
    } else if (valgtRegion === 'hovedstaden') {
        const kommuneArr = ['Frederiksberg', 'Helsingør', 'København'];

        for (let i = 0; i < kommuneArr.length; i++) {
            let k = document.createElement('a');
            k.setAttribute('href', '#');
            k.innerText = kommuneArr[i];
            kommuner.appendChild(k);
        }
    } else if (valgtRegion === 'midtjylland') {
        const kommuneArr = ['Aarhus', 'Favrskov', 'Hedensted', 'Herning', 'Holstebro-Struer', 'Horsens', 'Norddjurs', 'Odder', 'Randers', 'Silkeborg', 'Skanderborg', 'Syddjurs', 'Vejle', 'Viborg-Skive'];

        for (let i = 0; i < kommuneArr.length; i++) {
            let k = document.createElement('a');
            k.setAttribute('href', '#');
            k.innerText = kommuneArr[i];
            kommuner.appendChild(k);
        }
    } else if (valgtRegion === 'nordjylland') {
        const kommuneArr = ['Aalborg', 'Brønderslev', 'Frederikshavn', 'Hjørring', 'Jammerbugt', 'Vesthimmerland'];

        for (let i = 0; i < kommuneArr.length; i++) {
            let k = document.createElement('a');
            k.setAttribute('href', '#');
            k.innerText = kommuneArr[i];
            kommuner.appendChild(k);
        }
    } else if (valgtRegion === 'sjælland') {
        const kommuneArr = ['Egedal', 'Faxe', 'Frederikssund', 'Greve', 'Holbæk', 'Kalundborg', 'Køge', 'Lejre', 'Lolland-Falster', 'Næstved', 'Ringsted', 'Roskilde', 'Slagelse', 'Solrød', 'Sorø', 'Stevns', 'Taastrup'];

        for (let i = 0; i < kommuneArr.length; i++) {
            let k = document.createElement('a');
            k.setAttribute('href', '#');
            k.innerText = kommuneArr[i];
            kommuner.appendChild(k);
        }
    } else if (valgtRegion === 'sydvestjylland') {
        const kommuneArr = ['Aabenraa', 'Billund', 'Esbjerg', 'Fredericia-Middelfart', 'Haderslev', 'Kolding', 'Ringkøbing', 'Sønderborg', 'Tarm-Skjern', 'Tønder', 'Varde', 'Vejen'];

        for (let i = 0; i < kommuneArr.length; i++) {
            let k = document.createElement('a');
            k.setAttribute('href', '#');
            k.innerText = kommuneArr[i];
            kommuner.appendChild(k);
        }
    }
}

region.addEventListener('change', visKommuner);