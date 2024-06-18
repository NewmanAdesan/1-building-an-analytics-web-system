import './App.css'
import MainDash from './components/main-dash/MainDash.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <div></div>
        </div>
    </div>
  );
}

export default App;
