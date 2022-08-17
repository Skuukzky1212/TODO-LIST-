import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
function Todo({ todo, handleCheckBtnList }) {
    return ( 
        <div style= {{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Button className={!todo.isCompleted ? "todoBtn": "todoBtn todoBtn-completed"} style= {{display: 'flex', padding: '10px 15px', justifyContent:'space-between', textTransform:'inherit', fontSize: '1.1rem'}} fullWidth variant="outlined">
                {todo && todo.name}
                <span className="checkIcon" onClick={() => handleCheckBtnList(todo.id)}><CheckIcon /></span>
            </Button>
            {/* {console.log('re-render-todo')} */}
        </div>   
     );
}

export default Todo;

