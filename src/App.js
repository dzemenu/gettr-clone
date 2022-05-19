import './App.css';
import Feeds from './components/Feeds';
import NavBar from './components/NavBar';
import News from './components/News';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex justify-between bg-stone-50	">
      <NavBar />
<SideBar />   
<Feeds />
<News /> </div>
  );
}

export default App;
