import React,{useState} from 'react'
import TodoForm from './todoroutercomponent/TodoForm';

const App1 = () => {
  return (
    <section>
      <article>
        <div>
          <h1>ToDo list</h1>
        </div>
        <div>
          <TodoForm/>
        </div>
      </article>
    </section>
  );
}

export default App1