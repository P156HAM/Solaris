// Detta hjälper till om man ska hantera API anrop, fetch och error vid större projekt. 

import {createPlanetsElement} from '../modules/createhtml.js'

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
    createPlanetsElement(data)
}

export {getKey, getAllPlanets}