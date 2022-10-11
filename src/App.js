import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import TaskDetails from './components/TaskDetails';



function App() {
  return (
    <>
    <Home/>
    <Routes>
      <Route path ='/' element={<TodoList/>} />
      <Route path ='/create' element={<CreateTodo/>} />
      <Route path ='/taskDetails/:id' element={<TaskDetails/>} />
      
    </Routes>
    </>
    
  );
}

export default App;
