
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import MyNav from './components/MyNav';
import MyFoot from './components/MyFoot';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFoot />
    </>
  );
}

export default App
