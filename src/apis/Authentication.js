import APIs from './APIs'

const END_POINT = 'user';

export default {
    login({username,password}){
        return APIs.get(`${END_POINT}?username=${username}&password=${password}`)
    },
}