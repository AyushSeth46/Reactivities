//this file is going to be used as base for all axios related settings
import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
//this is a function that extracts response data from axios
const requests = {
    get : (url: string) => axios.get(url).then(responseBody),
    post : (url: string, body: object) => axios.post(url, body).then(responseBody),
    put : (url: string, body: object) => axios.put(url, body).then(responseBody),
    del : (url: string) => axios.delete(url).then(responseBody),

}
//The requests object contains a set of functions that make HTTP requests to the server using axios. 
//These functions return a Promise that resolves to the response data.

const Activities = {
    list: () => requests.get('/activities'),
    details: (id: string) => requests.get(`/activities/${id}`),
    create : (activity : Activity) => axios.post('/activities', activity),
    update : (activity : Activity) => axios.put(`/activities/${activity.id}`, activity),
    delete : (id: string) => axios.delete(`/activities/${id}`)
}
//this function will retrieve the list of activities from server

const agent = {
    Activities
}

export default agent;