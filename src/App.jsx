
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import MyNav from './components/MyNav';

function App() {
  return (
    <>
      <MyNav />
      <div className="container mt-4">
        <h1>Benvenuto nel mio sito!</h1>
        <p>Questa è una semplice navbar creata con React-Bootstrap.</p>
      </div>
    </>
  );
}

export default App
