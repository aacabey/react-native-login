import * as axios from 'axios';
import URLSearchParams from 'url-search-params';

const SERVER_URL = "https://api.superlancer.com";

function prepareHeaders() {
    return {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', "SUPER-KEY": "1e291318-f4b6-4a65-8323-a1823dbd7564" }
    };
}

export class UserService {
    static loginUser(email, password) {

        var getTokenRequestModel = new URLSearchParams();
        getTokenRequestModel.append('email', email);
        getTokenRequestModel.append('password', password);

        return axios.post(`${SERVER_URL}/users/login/`, getTokenRequestModel, prepareHeaders())
            .then(function (response) {
                return response.data.data.user;
            })
            .catch(function (error) {
                throw error;
            });
    }
}