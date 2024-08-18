import {Todo} from "../tpyes/todo"
const Item = (props:Todo) => {
  return (

    <div className="border-[2px] border-white  p-3 ">
      <p>{props.label}</p>
      <p>{props.STATUS}</p>
      <p>{props.description}</p>

    </div>

  )
}

export default Item
