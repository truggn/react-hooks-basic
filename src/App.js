
import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './component/colorbox';
import Pagination from './component/pagination';
import PostList from './component/postlist';
import TodoForm from './component/todoform';
import TodoList from './component/todolist';
import queryString from 'query-string';

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

  };

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    // add new todo list
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
  };



  // Load api
  const [postsList, setPostList] = useState([])

  // state Pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  function handlePageChange(newPage) {

    console.log("new page", newPage);
    setFilters({
      ...filters,
      _page: newPage
    });
  };

  useEffect(() => {
    // chay dung 1 lan
    async function fetAPIPostList() {
      try {

        const paramString = queryString.stringify(filters)
        console.log(filters);
        // call api 
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl)
        const responseParseJson = await response.json()

        const { data, pagination } = responseParseJson;
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('failed to fetch post list', error.message);
      }
    }
    fetAPIPostList()
  }, [filters]);


  return (
    <div className="app">
      <h1>Todo Form </h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h1>Todo List!</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <h1>Change ColorBox</h1>
      <ColorBox />
      <h1>Call API</h1>
      <PostList posts={postsList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
