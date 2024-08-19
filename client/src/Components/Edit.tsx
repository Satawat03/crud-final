import { useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Todo } from "../tpyes/todo"
import { useForm } from 'react-hook-form'
import { useTodoStore } from '../store/todoStore'

const Edit = () => {
    const { register, handleSubmit ,setValue} = useForm<Todo>()
    const { editTodo ,todos } = useTodoStore();
    const navigate = useNavigate();
    const {id}= useParams<{ id: string}>();


    useEffect(() => {
        if (id) {
            const todo = todos.find((t) => t.id === parseInt(id));
            if (todo) {
                setValue("id", todo.id);
                setValue("label", todo.label);
                setValue("STATUS", todo.STATUS);
                setValue("description", todo.description);
            }
        }
    }, [id, todos, setValue]);

    const submitData = (data: Todo) => {
        editTodo(data)
        navigate("/")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitData)}>
                <h1 className='mb-4 text-center text-2xl'>Edit</h1>
                
                <input type="hidden" {...register("id")} />


                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Label" {...register("label")} />
                </label>

                <select id="" className='w-full my-4 p-2 rounded-xl' {...register("STATUS")}>
                    <option value="Pending">Pending</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>

                <textarea className="textarea textarea-bordered w-full mb-4" placeholder="Discription" {...register("description")}></textarea>

                <div className='flex justify-between'>
                    <button className="btn btn-primary ">Submit</button>

                    <Link to="/"><button className="btn">Cancel</button>
                    </Link>
                </div>
            </form>


        </div>
    )
}

export default Edit
