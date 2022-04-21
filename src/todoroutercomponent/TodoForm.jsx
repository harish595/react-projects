import React, { useState } from "react";

const TodoForm = () => {
  let [todo, setTodo] = useState();
  let [data, setData] = useState([]);
  let handleSubmit = e => {
    e.preventDefault();
    setData([...data, todo]);
    setTodo("");
  };
  let handleChange = e => {
    setTodo(e.target.value);
    console.log(todo);
    let h1 = document.getElementById("deleteDiv");
    let ico = document.createElement('i')
    ico.className = 'fa-fas'
    h1.appendChild(ico)

  };
  let handleDeleteClick = e => {
    // const removeItem = data.filter(data => {
    //   return data.x !== x;
    // });
    // setData(removeItem);
    setData(data.splice(data.length - 2,data.length-1));
    console.log(data);
    
  };
  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="formBlock">
            <input
              type="text"
              id="inpt"
              name="task"
              value={todo}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
          <div>
            <input type="submit" value="Delete" onClick={handleDeleteClick} />
          </div>
        </form>
        <div >
          {data.map(x => {
            return (
              <li style={{ listStyleType: "none" }}>
                <h1 id="deleteDiv">{x}</h1>
              </li>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default TodoForm;
