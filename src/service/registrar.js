import axios from 'axios'
import user from './user'

const basePath = 'http://18.188.122.22:8001/users'

const registrar = {
  registrar: (data) => {
    return axios.post(`${basePath}/`, {
      name: data.nome,
      email: data.email,
      password: data.senha
    }).then(response => {
      return 'OK'
    }).catch(err => {
      return 'Ocorreu um erro.'
    });
  }
}

export default registrar;
