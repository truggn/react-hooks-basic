
import { useState } from 'react';
import './App.scss';
import ColorBox from './component/colorbox';
import TodoList from './component/todolist';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'hello World' },
    { id: 2, title: 'hello Trung' },
    { id: 3, title: 'hello React' }
  ]);

  function handleTodoClick(todo) {
    // tim vi tri vaf remove no
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

  }

  return (
    <div className="app">
      <h1>Todo List!</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <h1>Change ColorBox</h1>
      <ColorBox />
    </div>
  );
}

export default App;
