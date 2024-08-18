import { create } from "zustand";
import { Todo } from "../tpyes/todo";
import axios from "axios";


type TodoStore = {
    todos : Todo[]

    getTodo : () => void
    addTodo :() => void
    editTodo : () => void
    deleteTodo : () => void
}
export const useTodoStore = create<TodoStore>()((set) => ({
    todos : [],
    getTodo : async() => {
        const result = await axios.get("http://localhost:3000/user")

        set({todos : result.data})
    },
    addTodo : async() => {
        
    },
    editTodo : async() => {
        
    },
    deleteTodo : async() => {
        
    }
}))