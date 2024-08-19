import { Todo } from "../tpyes/todo"
import { Link  } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTodoStore } from '../store/todoStore'
const Item = (props: Todo) => {
  const { deleteTodo } = useTodoStore();

  const { register, handleSubmit, setValue } = useForm<Todo>();
  const onSubmit = (data: Todo) => {
    deleteTodo(data)
  };

  const handleButtonClick = (id: number) => {
    setValue('id', id);
  };
  return (

    <div className="text-black border-[1px] border-white  p-3 rounded-xl bg-slate-400">
      <p>Label : {props.label}</p>
      <p>Status : {props.STATUS}</p>
      <p>Descrition : {props.description}</p>


      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('id')} type="hidden" />
        <button onClick={() => handleButtonClick(props.id)}
          className="float-right btn btn-error text-black mt-2 bg-red-500  py-1 px-2 rounded">
          delete</button>
      </form>
      <Link to={`/edit/${props.id}`}>
      <button className="mt-2 btn btn-primary text-black ">edit</button>

      </Link>



    </div>

  )
}

export default Item
