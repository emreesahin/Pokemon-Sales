import axios from "axios";


const API_URL = "https://pokeapi.co/api/v2/pokemon"
const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((request:any) => {
    // request.headers.Authorization = 'Bearer' ${getToken()}
    return request 
}, (error) => {
    return Promise.reject(error);
})
//'https://pokeapi.co/api/v2/pokemon?offset=0'

export const getPokeList = () => {
    return axiosInstance.get(`${API_URL}?offset=0`);
    }; 
export const getPokeDetails = (id:number) => {
    return axiosInstance.get(`${API_URL}/${id}`)
}