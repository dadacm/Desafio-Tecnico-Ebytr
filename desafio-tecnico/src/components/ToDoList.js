import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const { list, setList } = useState([]);
useEffect(() => {
    fetch('http://localhost:3001/list')
    .then((data) => data.json())
    .then((task) => setList(task))
    .then(console.log(list));

})

    return(
        <ol>
            <li>098</li>
            {console.log(list)}
        </ol>
  ) };

export default ToDoList;
