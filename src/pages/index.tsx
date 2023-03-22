import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { TodoList } from '../components/todo-list';
import { Todo } from '../types/todo';

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo(value: string) {
    if (!value.length) {
      alert('Add a valid todo')
      return;
    }
    setTodos((current) => [{ id: todos.length, value, completed: false }, ...current]);
    // resets the input //
    setNewTodo('');
  }

  function markAsCompleted(id: number) {
    setTodos((current) => current.map((todo) => ({
      ...todo,
      // uses the id passed back to mark either completed/uncompleted //
      completed: todo.id === id ? !todo.completed : todo.completed,
    })));
  }

  function clearAll(completed: boolean) {
    setTodos((current) => current.filter((todo) => todo.completed === !completed));
  }

  return (
    <div className='p-4'>
      <Head>
        <title>Nexus Mods React Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center gap-8'>
        <h1 className='text-5xl font-bold'>My Todo app</h1>

        <div className='w-[80rem] max-w-[80vw] p-4'>
          <div className='flex'>
            <input
              aria-label="Add a todo"
              type="text"
              className='border rounded-l w-full border-gray-700 px-2 py-1'
              value={newTodo}
              onInput={(e) => setNewTodo(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  addTodo(newTodo);
                }
              }}
            />

            <button
              type="button"
              className="shrink-0 border border-l-0 rounded-r border-gray-700 px-2 py-1 hover:bg-blue-200"
              onClick={() => addTodo(newTodo)}
            >
              + Add
            </button>
          </div>

          <div className='block md:grid grid-cols-2'>
            <TodoList
              todos={todos.filter((todo) => !todo.completed)}
              markAsCompleted={markAsCompleted}
              title="Todo"
              clear={() => clearAll(false)}
            />

            <TodoList
              todos={todos.filter((todo) => todo.completed)}
              markAsCompleted={markAsCompleted}
              title="Done"
              clear={() => clearAll(true)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
