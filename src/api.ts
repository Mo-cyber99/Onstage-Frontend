import axios from "axios";
import { server } from './.secrets'

const api = `${server}/api`;

export const patchProfile = (newProfile: any, id: any) => {
    delete newProfile._id;

    return axios.patch(`${api}/users/${id}`, newProfile).then(({ data }) => {
        return data.updatedUser;
    });
};

export const registerUser = (newUser: any) => {
    return axios.post(`${api}/users`, newUser).then(({ data }) => {
        return data.newUser;
    });
};

export const getUser = (email: any) => {
    return axios.get(`${api}/users/login/${email}`).then(({ data }) => {
        return data.user;
    });
};