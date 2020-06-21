import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import queryString from "query-string";

import "./App.scss";
// ------------ TODO LIST ------------
// import ColorBox from "./components/colorBox";
// import TodoList from "./components/todoList";
// import TodoForm from "./components/todoForm";
// ------------ POST LIST ------------
import PostList from "./components/postList";
import Pagination from "./components/pagination";
import Search from "./components/search";
// ------------ CLOCK ------------
import Clock from "./components/clock";
// ------------ MAGIC BOX ------------
import MagicBox from "./components/magicBox";
function App() {
  // ------------ TODO LIST ------------
  // const [todoList, setTodoList] = useState([
  //   { id: Math.trunc(Math.random() * 1000), title: "I love FE" },
  //   { id: Math.trunc(Math.random() * 1000), title: "I Love Myself" },
  //   { id: Math.trunc(Math.random() * 1000), title: "I love You" },
  // ]);
  // function onClickTodo(todo) {
  //   let index = todoList.findIndex((item) => item.id === todo.id);
  //   if (index < 0) return;
  //   let newList = [...todoList];
  //   newList.splice(index, 1);
  //   setTodoList(newList);
  // }
  // function handleAdd(formValue) {
  //   let newList = [...todoList];
  //   newList.push({ id: Math.trunc(Math.random() * 1000), ...formValue });
  //   setTodoList(newList);
  // }

  // ------------ POST LIST ------------
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 5,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });
  useEffect(() => {
    async function getPostData() {
      try {
        //  Call API
        const paramsString = queryString.stringify(filter);
        const APIUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(APIUrl);
        const responseJSON = await response.json();
        let { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        alert(error);
      }
    }
    getPostData();
  }, [filter]);

  function handlePageChange(newPage) {
    setFilter({ ...filter, _page: newPage });
  }

  function handleSearch(formValues) {
    console.log(formValues.textSearch);
    setFilter({ ...filter, _page: 1, title_like: formValues.textSearch });
  }

  return (
    <div className="App">
      <h1>MAGIC BOX</h1>
      <MagicBox />
      {/* <h1>Clock</h1>
      <Clock /> */}
      {/* <h1>Post List</h1>
      <Search onInputChange={handleSearch} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      {/* <h1>Todo List</h1>
      <TodoList todos={todoList} onTodoList={onClickTodo} />
      <TodoForm onSubmit={handleAdd} /> */}
    </div>
  );
}

export default App;
