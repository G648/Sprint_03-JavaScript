import axios from "axios";


//Criar constantes para todas as nossas rotas

export const nextEventsResource = '/Evento/ListarProximos'


const apiPort = '7118'
const localApiUrl = `https://localhost:${apiPort}/api`
const externalApiUrl = null;

const api = axios.create({
    baseURL: localApiUrl
})


export default api;