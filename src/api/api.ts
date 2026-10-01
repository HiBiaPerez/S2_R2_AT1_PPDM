import axios from 'axios';
// Platform --> É para identifcar em qual ambiente estamos executando
import { Platform } from 'react-native';

// IP LOCAL PADRÃO DO ANDROID É 10.0.2.2
export const API_BASE_URL = Platform.OS === 'android' ? 
    'http://10.0.2.2:3000' : 'http://localhost:3000'// O visual studio não roda no padrão, por isso colocamos esse IP onde ele roda

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // Define que a requisição pode esperaar no máximo 10 segundos pela resposta
    headers: {
        'Content-Type': 'application/json', // Enviando json
        Accept: 'application/json' // Esperando a resposta em json
    }
})

export default api;