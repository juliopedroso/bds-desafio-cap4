import { useState } from 'react';
import './App.css';
import Routes from 'Routes';
import { AuthContext, AuthContextData } from 'AuthContext';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  })

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
