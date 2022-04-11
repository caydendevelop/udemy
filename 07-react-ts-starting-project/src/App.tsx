import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['abc', 'cde']}/>
    </div>
  );
}

export default App;
