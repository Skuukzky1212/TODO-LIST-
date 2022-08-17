
import Todo from './Todo'
import { memo } from 'react'
function TodoList({ todoList, handleCheckBtnList }) {
    return ( 
        <div style= {{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {todoList.map((todo) => (
                <Todo todo={todo} handleCheckBtnList={handleCheckBtnList} key={todo.id}/>  
            ))}
              {/* {console.log('re-render-todo-list')} */}
        </div>   
     );
}

export default memo(TodoList);