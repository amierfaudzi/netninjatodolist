import TodoContextProvider from './contexts/TodoContext';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <Todolist />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
