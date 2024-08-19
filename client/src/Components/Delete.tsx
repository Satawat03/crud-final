import { Link, useNavigate } from 'react-router-dom'
import {Todo} from "../tpyes/todo"
import { useForm } from 'react-hook-form'
import { useTodoStore } from '../store/todoStore'

const Delete = () => {
    const{register,handleSubmit} = useForm<Todo>()
    const{deleteTodo}= useTodoStore();
    


    const navigate=useNavigate();
  
    const submitData = (data : Todo) => {
      deleteTodo(data)
      navigate("/")
    }
    
    return (
      <div>
        <form onSubmit={handleSubmit(submitData)}>
          <h1 className='mb-4 text-center text-2xl'>Delete </h1>

          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="ID" {...register("id")}/>
          </label>
  
          <div className='flex justify-between mt-5'>
            <button className="btn btn-primary ">Submit</button>
  
            <Link to="/"><button className="btn">Cancel</button>
            </Link>
          </div>
  
        </form>
  
  
      </div>
    )
  }

export default Delete
