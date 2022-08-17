
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TodoList from './components/TodoList';
import {useCallback, useEffect, useState} from 'react';
import {v4} from 'uuid';
const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
    // console.log(todoList);
  }, [todoList]);
  
  const handleTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const handleAddTodo = useCallback((e)=> {
    setTodoList([
      {id: v4() , name: textInput, isCompleted: false},
      ...todoList,
    ]);
    setTextInput("");
   
  }, [textInput, todoList]);

  const handleCheckBtnList = useCallback((id) => {
    setTodoList((prev) => 
      prev.map((todo) => 
      todo.id === id ? {...todo, isCompleted: true} : todo
      )
    );
  }, []);

 
  return (
    <div className="App">
      <h2>Danh sách công việc</h2>
      <div  style= {{display: 'flex', flexDirection: 'row', gap: '5px', width: '100%', marginBottom: '20px'}}>
        <TextField id='textInput' value={textInput} onChange={handleTextInputChange} style= {{flex: '1'}} placeholder='Thêm việc làm...' name='add-todo'/>
        <Button disabled={!textInput} style= {{padding: '0 50px'}} variant="contained" onClick={handleAddTodo}>Thêm</Button>
      </div> 
     <TodoList todoList={todoList} handleCheckBtnList={handleCheckBtnList} />
    </div>
  );
}

export default App;
