import './App.css';
import { ToDo } from './ToDo';
import image from './type.jpg';

function App() {
  return (
  

      <div className='app'>
        <div className='container'>
          <h1>To Do List</h1>
        </div>
        <ToDo />
        <div className='image'>
          <img src={ image } width="400px" alt="type" />
        </div>
      </div>
  );
}

export default App;
