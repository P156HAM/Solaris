// BASE URL: https://fathomless-shelf-54969.herokuapp.com/

async function getKey() {
    const response = await fetch('https://fathomless-shelf-54969.herokuapp.com/keys', {method: 'POST'});
    const data = await response.json();
    
    return data.key;
}

async function getAllPlanets() {
    const key = await getKey();
    const response = await fetch('https://fathomless-shelf-54969.herokuapp.com/bodies', {
        headers: {
            'x-zocom': key
        }
    })
    const data = await response.json(); 
    console.log(data);
    createPlanetsElement(data)
}
getAllPlanets()

function createPlanetsElement(data) {
    const allPlanetsArray = Object.values(data);
    console.log(allPlanetsArray);
    const planetsDisplayArea = document.querySelector('.planets-area');
    for (let i=0; i<allPlanetsArray.length; i++) {
        console.log(i);
        planets = allPlanetsArray[i];
        const planetId = planets.map(planet => {
            const planetElem = document.createElement('section');
            planetElem.setAttribute('data-id', `${planet.id}`)
            planetElem.setAttribute('class', `${planet.name}`)
            planetsDisplayArea.append(planetElem);
        }) 
    }
}
