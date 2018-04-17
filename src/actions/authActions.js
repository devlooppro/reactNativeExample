import axios from 'axios';
import {AsyncStorage} from 'react-native'
import {apiUrl} from "../config/constants"
import {Actions} from 'react-native-router-flux';

export const signIn = ({email, password}) => {

  if (email == "") {
    return Promise.reject('enter email')
  }
  if (password == "") {
    return Promise.reject('enter password')
  }

  return axios.post(`${apiUrl}/api/session`, {email, password})

    .then(response => {

      return new Promise((resolve, reject) => {
        AsyncStorage.multiSet(
          [
            ['apiToken', response.data.apiToken],
            ['refreshToken', response.data.refreshToken]
          ],
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          });
      })


      console.log(response);
      return Promise.resolve(response)
    })
    .catch((error) => {
      if (error.response.status == 403) {
        return Promise.reject('login or password incorrect')
      }
    });
};


export const signUp = ({name, email, password}) => {

  if (email == "") {
    return Promise.reject('enter email')
  }
  if (name == "") {
    return Promise.reject('enter name')
  }
  if (password == "") {
    return Promise.reject('enter password')
  }

  return axios.post(`${apiUrl}/api/users`, {name, email, password})
    .catch((error) => {
      console.log(error);
      return Promise.reject('something was wrong')
    });
};

export const checkAuth = () => {
  AsyncStorage.getItem('apiToken', (err, apiToken) => {
    if(apiToken){
      return Actions.list();
    }
    Actions.signIn();
  })
}