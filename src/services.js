import axios from 'axios';

const API_HOST = 'https://taller-frontend.herokuapp.com/api';
export function signUpUser(user){
    return axios.post(`${API_HOST}/user`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function getTeam(teamId){
    return axios.get(`${API_HOST}/team/${teamId}`)
}