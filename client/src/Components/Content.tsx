import { useState } from "react";
import Item from "./Item";
import { useTodoStore } from "../store/todoStore";
import { Link } from "react-router-dom";
import { useTodoStore } from "../store/todoStore";

const Content = () => {

    const {getTodo,todos}=useTodoStore();
    const num;

    return (
        <div className="" >
            <h1 className="text-center mb-4">todo <Link to="/add"><span className="float-right border border-white p-1 rounded-xl">Add todo</span></Link></h1>
            <div className="grid grid-cols-3 gap-10">

            </div>

        </div>
    )
}
export default Content