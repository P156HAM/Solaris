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
        planets = allPlanetsArray[i];
        const planetId = planets.map((planet, index) => {
            const planetElem = document.createElement('section');
            planetElem.setAttribute('data-id', `${planet.id}`)
            planetElem.setAttribute('class', `${planet.name}`)
            planetElem.setAttribute('latin-name', `${planet.latinName}`)
            planetElem.setAttribute('text', `${planet.desc}`)
            planetElem.setAttribute('size', `${planet.circumference}`)
            planetElem.setAttribute('distance', `${planet.distance}`)
            planetElem.setAttribute('max-temp', `${planet.temp.day}`)
            planetElem.setAttribute('min-temp', `${planet.temp.night}`)
            planetElem.setAttribute('moons', `${planet.moons.join(' ')}`)
            planetsDisplayArea.append(planetElem);
            if (index === 6) {
                const saturnusLine = document.createElement('div');
                saturnusLine.setAttribute('class', 'Saturnus-line');
                planetsDisplayArea.append(saturnusLine);
            }
        }) 
        createPlanetsInformation()
    }
}

function createPlanetsInformation() {
    const sections = document.querySelectorAll('section')
    sections.forEach((section, index) => {
            let planetName = section.getAttribute('class')
            let planetLatinName = section.getAttribute('latin-name')
            let planetDesc = section.getAttribute('text')
            let planetCircumference = section.getAttribute('size')
            let planetDistance = section.getAttribute('distance')
            let planetMaxTemp = section.getAttribute('max-temp')
            let planetMinTemp = section.getAttribute('min-temp')
            let planetmoons = section.getAttribute('moons')
            const wrapper = document.querySelector('.wrapper')
            const infoArea = document.createElement('article');
            infoArea.setAttribute('class', 'info-area')
            infoArea.setAttribute('data-name', `${planetName}`)
            infoArea.innerHTML = 
            `<div class="close-container"'>
                <div class="leftright"></div>
                <div class="rightleft"></div>
            <label class="close">close</label>
            </div>
            <h1> ${planetName} </h1>
            <h2> ${planetLatinName} </h2>
            <p> ${planetDesc} </p>
            <hr>
            <section>
                <article>
                    <h3>OMKRETS</h3>
                    <p>${planetCircumference}</p>
                </article>
                <article>
                    <h3>KM FRÅN SOLEN</h3>
                    <p>${planetDistance}</p>
                </article>
                <article>
                    <h3>MAX TEMPERATUR</h3>
                    <p>${planetMaxTemp}</p>
                </article>
                <article>
                    <h3>MIN TEMPERATUR</h3>
                    <p>${planetMinTemp} °C</p>
                </article>
            </section>
            <hr>
            <h2>MÅNAR</h2>
            <p>${planetmoons}</p>`
            wrapper.appendChild(infoArea);
    })
    displayPlanetInformation()
}

function displayPlanetInformation() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
        section.addEventListener('click', (event) => {
        const planetName = event.target.className
        document.querySelector(`[data-name=${planetName}]`).style.display = ('block');
        })
    })

    const closeMarks = document.querySelectorAll('.close-container');
    const infoAreas = document.querySelectorAll('.info-area')
    closeMarks.forEach((mark) => {
        mark.addEventListener('click', () => {
        infoAreas.forEach((area) => {
            area.style.display = 'none';
        })
        })
    })

    
}

