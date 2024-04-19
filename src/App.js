import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <TodoWrapper />
    </div>
  );
}

export default App;