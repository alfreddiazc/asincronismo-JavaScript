const fechtData = require('../utils/fechData')
const fetchData = require('../utils/fechData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const data = await fechtData(url_api)
        const character = await fechtData(`${API}${data.results[0].id}`)
        const origen = await fechtData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origen.dimension)

    } catch (error) {
        console.error(error)
    }
}

console.log('before')
anotherFunction(API)
console.log('after')