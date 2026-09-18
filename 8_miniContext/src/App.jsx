import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserCotextProvider from "./context/UserCotextProvider";

function App() {
  return (
    <UserCotextProvider>
      <div className="app-container">
        <h1>
          Hello <span>Egoist!</span>
        </h1>
        
        <div className="auth-card">
          <Login />
          <Profile />
        </div>
      </div>
    </UserCotextProvider>
  );
}

export default App;
