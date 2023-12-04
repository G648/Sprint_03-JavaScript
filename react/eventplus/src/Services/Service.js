import axios from "axios";


//Criar constantes para todas as nossas rotas

export const getNextEventsResource = '/Evento/ListarProximos'
export const postNextEventsResource = '/Evento'
export const postTitleEventsResources = '/TiposEvento'
export const getTitleEventsResources = '/TiposEvento'
export const loginEventsResources = '/Login'
export const getMinhasReservas = '/ListarMinhas'


const apiPort = '7118'
const localApiUrl = `https://localhost:${apiPort}/api`
// const externalApiUrl = null;

const api = axios.create({
    baseURL: localApiUrl
})


export default api;