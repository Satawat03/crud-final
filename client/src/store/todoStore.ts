import { create } from "zustand";
import { Todo } from "../tpyes/todo";
import axios from "axios";


type TodoStore = {
    todos: Todo[]

    getTodo: () => void
    addTodo: (data : Todo) => void
    editTodo: (data : Todo) => void
    deleteTodo: (id: any) => void
}
export const useTodoStore = create<TodoStore>()((set) => ({
    todos: [],
    getTodo: async () => {
        try {
            const result = await axios.get("http://localhost:3000/user")
            set({ todos: result.data })
        } catch (err) {
            console.log(err)
        }
    },
    addTodo: async (data) => {
        try {
            await axios.post("http://localhost:3000/user",data)
            const result = await axios.get("http://localhost:3000/user")
            set({ todos: result.data })
        } catch (err) {
            console.log(err)
        }
    },
    editTodo: async (data) => {
        try {
            await axios.put("http://localhost:3000/user",data)
            const result = await axios.get("http://localhost:3000/user")
            set({ todos: result.data })
        } catch (err) {
            console.log(err)
        }

    },
    deleteTodo: async (data) => {
        try {
            await axios.delete("http://localhost:3000/user",{data:data})
            const result = await axios.get("http://localhost:3000/user")
            set({ todos: result.data })
        } catch (err) {
            console.log(err)
        }

    }
}))