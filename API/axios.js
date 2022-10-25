// import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


// const apiKey = "18b48a9b-58c7-4757-b5b8-2b96c4fad782";