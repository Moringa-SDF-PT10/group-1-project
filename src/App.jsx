import { useState } from 'react';
import Profile from './Profile';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('profile'); 

  return (
    <div className="app">
      {currentView === 'profile' ? (
        <Profile onReturnHome={() => setCurrentView('home')} />
      ) : (
        <div className="home-page">
          <h1>Welcome to Our Restaurant App</h1>
          <button 
            className="nav-button"
            onClick={() => setCurrentView('profile')}
          >
            Create/Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default App;