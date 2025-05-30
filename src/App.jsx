import { useState } from 'react';
import Profile from './components/Profile';


function App() {
  const [currentView, setCurrentView] = useState('profile');

  return (
    <div className="app-container">
      {currentView === 'profile' ? (
        <Profile onReturnHome={() => setCurrentView('home')} />
      ) : (
        <div className="home-page">
          <h1>Restaurant Finder App</h1>
          <button 
            className="primary-button"
            onClick={() => setCurrentView('profile')}
          >
            Manage Your Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default App;