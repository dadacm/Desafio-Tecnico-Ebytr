import { BrowserRouter } from "react-router-dom";
import  ToDoList  from "../components/ToDoList";


const home  = () => {
  return (
    <BrowserRouter>
      <h1>Ebytr To do list</h1>
      <ToDoList/>
    </BrowserRouter>
);
}

export default home;
