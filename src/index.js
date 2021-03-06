import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = {
  firstName: 'Imrak',
  lastName: 'Residual',
  avatar: 'https://placekitten.com/408/287'
}

function getUser(user) {
  return `${user.firstName} ${user.lastName}`
}

function valUser(user) {
  if (user) {
    return <h1>Hola, {user.firstName} {user.lastName}</h1>
  }
  return <h1>Hola, Extraño</h1>

}
const name = "Imrak"
const element = (
  <div>{valUser(user)}
    <img src={user.avatar} />
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);