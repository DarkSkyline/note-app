import React, {useEffect, useState} from 'react';
import './App.css';
import api from './services/api';
import User from './components/User'

const usersData = [
  {
      name: 'Filipe',
      email: 'filipesferreira94@gmail.com'
  },
  {
      name: 'Filipe1',
      email: 'filipesferreira9422@gmail.com'
  },
  {
      name: 'Filipe2',
      email: 'filipesferreira9444@gmail.com'
  },
]

interface IUser {
  name: string,
  email: string
}

function getUsername(valor: string) {
  return valor;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/').then(response => {
      setUsers(usersData);
    })
  }, []);

  return (
    <div className="App">
      { users.map(user => <User key={user.email} user={user} />)}
    </div>
  );
}

export default App;
