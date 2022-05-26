import './App.css';
import Feeds from './components/Feeds';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import News from './components/News';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex  flex-col justify-between bg-[#F7F8F9]	">
      <NavBar />
      <div className='flex'>
      <SideBar />
         
<Feeds />
<News />
      </div>
 
<Footer />
</div>
  );
}

export default App;
