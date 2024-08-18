import {useState} from 'react'
import { Link } from 'react-router-dom'
import {Todo} from "../tpyes/todo"
import { useForm } from 'react-hook-form'


const Add = () => {

  const{register,handleSubmit} = useForm<Todo>()
  const submitData = (data : Todo) => {
    console.log(data)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <h1 className='mb-4 text-center text-2xl'>Add todo</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Label" {...register("label")}/>
        </label>

        <select  id="" className='w-full my-4 p-2 rounded-xl' {...register("STATUS")}>
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

export default Add
