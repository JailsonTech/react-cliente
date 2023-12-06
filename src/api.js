import './components/Navbar.css'
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://petshop-api.adailtonjunior2.repl.co/',
});

api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default api;