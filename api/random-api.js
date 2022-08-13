"use strict";
const baseUrl = 'https://api.chucknorris.io/';
const axios = require('axios');
const Client = require('./apiClient');

class Search {
    async getRandomJoke(){
        const response = await Client.get('jokes/random');
        return response;
    }
}
module.exports = new Search();