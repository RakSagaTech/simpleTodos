// Write your code here

import './index.css'


const TodoItem = props => {
    const {todoDetails} = props 
    const {title} = todoDetails 

    return (
        <li>
            <p> {title} </p>
            <button type="button">
                Delete 
            </button>
        </li>
    )
}

export default TodoItem