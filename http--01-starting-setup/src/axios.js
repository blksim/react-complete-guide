import axios from 'axios';

const instance = axios.create({
    // we can use axios and there access to defaults object to set up defaults which are true for all requests which are being sent.
    baseURL: 'https://jsonplaceholder.typicode.com'
});
/**
 * Now by default, the instance here will also asuume that 
 * the default set up here but overwrite anything which it sets up in the instance itself.
 */

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;