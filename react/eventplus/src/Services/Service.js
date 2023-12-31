import axios from "axios";


//Criar constantes para todas as nossas rotas
export const getNextEventsResource = '/Evento/ListarProximos'
export const postNextEventsResource = '/Evento'
export const postTitleEventsResources = '/TiposEvento'
export const getTitleEventsResources = '/TiposEvento'
export const loginEventsResources = '/Login'
export const getMinhasReservas = '/PresencaEvento/ListarMinhas'
export const myEventsResource = '/PresencaEvento/ListarMinhas'
export const presencaEventoResource = '/PresencaEvento'
export const comentariosEvento = '/ComentariosEvento'


// const apiPort = '7118'
// const localApiUrl = `https://localhost:${apiPort}/api`
const externalApiUrl = `https://inlockdatabase.azurewebsites.net/api`
// const externalApiUrl = null;

const api = axios.create({
    baseURL: externalApiUrl
})


export default api;