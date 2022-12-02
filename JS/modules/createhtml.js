/* Detta tyckte jag var en extra module då båda funktionerna var långa vilket gör det svårare för andra att förstå att det bara gäller 
skapalse av html elements i DOMen */

import {displayPlanetInformation} from '../modules/display.js'


function createPlanetsElement(data) {
    const allPlanetsArray = Object.values(data);
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
    sections.forEach((section) => {
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
            <section class=info-article>
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
            <p>${planetmoons}</p>
            <section class='planet-display'></section>`
            wrapper.appendChild(infoArea);
    })
    displayPlanetInformation()
}

export {createPlanetsElement, createPlanetsInformation}