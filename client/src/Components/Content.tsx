import { useEffect } from "react";
import Item from "./Item";
import { useTodoStore } from "../store/todoStore";
import { Link } from "react-router-dom";

const Content = () => {
    const { getTodo, todos } = useTodoStore();
    
    useEffect(() => {
        getTodo();
    }, [])

    return (
        <div className="" >
            <Link to="/add"><button className="btn btn-accent mb-4 ">Add</button></Link>
            

            <div className="grid grid-cols-3 gap-10 ">

                {todos.map((todo, idx) => (
                    <Item  key={idx} id={todo.id} label={todo.label} STATUS={todo.STATUS} description={todo.description}   />
                    
                ))}

            </div>

        </div>
    )
}
export default Content