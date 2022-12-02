// Lättare att ha allting som gäller visning av information i en och samma fel för att kunna hantera koden på ett smidigt sätt vid fel sökning.

function displayPlanetInformation() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
        section.addEventListener('click', (event) => {
        const planetName = event.target.className
        document.querySelector(`[data-name=${planetName}]`).style.display = ('block');
        const planetCss = getComputedStyle(document.querySelector(`.${planetName}`));
        planetColor = planetCss.backgroundColor;
        document.querySelector(`[data-name=${planetName}] .planet-display`).style.background = planetColor;
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

export {displayPlanetInformation}