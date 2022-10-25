import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { IHeaderProps, ITask, ITaskList } from './InterFaces/AppInterface';
import TodoTask from './component/TodoTask/TodoTask';



const Header = ({ handleChange, task,
  deadline, addTask }: IHeaderProps) => {
  return (
    <div className='header'>
      <div className='inputContainer'>
        <input type="text" placeholder='Task...' value={task} name="task" onChange={handleChange} />
        <input type="number" placeholder='DeadLine (in days)' value={deadline} name="deadline" onChange={handleChange} />
      </div>
      <button onClick={() => addTask()}>Add Task</button>
    </div>

  )
}

const TodoList = ({ todoLists, completeTask }: ITaskList) => {
  return (
    <div className="todoList">
      {todoLists?.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} />
      })}

    </div>
  )
}


const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    }
    else {
      setDeadLine(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    if (task.length < 1) return;
    setTodoList([...todoList, newTask])
    setTask("");
    setDeadLine(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} task={task} deadline={deadline} addTask={addTask} />
      <TodoList todoLists={todoList} completeTask={completeTask} />
    </div>
  );
}

export default App;
