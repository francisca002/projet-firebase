import React,{useState}  from 'react';
import './App.scss';
import FirebaseAuthService from './FirebaseAuthService';
import LoginForm from './components/LoginForm';

function App() {
  const [user,setUser] = useState(null);
  FirebaseAuthService.suscribeToAuthChanges(setUser);
  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Projet Firebase</h1>
        <LoginForm existingUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App;
