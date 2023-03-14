import { Todo } from "../types/todo";

type TodoListProps = {
  todos: Todo[];
  markAsCompleted: (id: number) => void;
  title: string;
  clear: () => void;
}

export const TodoList = ({ todos, markAsCompleted, title, clear }: TodoListProps) => {
  return (
    <div className="my-8">
      <h2 className="font-semibold text-xl">{title}</h2>

      <ul
        className="md:px-2"
        aria-label={title}
      >
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className='hover:bg-gray-300 transition-colors cursor-pointer rounded px-2 py-1 flex items-center gap-2 w-full text-left'>
              <input
                type="checkbox"
                className="sr-only"
                aria-checked={todo.completed}
                onClick={() => markAsCompleted(todo.id)}
              />

              <span
                className='h-4 w-4 rounded border border-gray-700 inline-flex justify-items-center leading-5 shrink-0'
                aria-hidden={true}
              >
                {todo.completed && '✓'}
              </span>

              <span className={todo.completed ? 'line-through text-gray-600 break-all' : 'break-all'}>{todo.value}</span>
            </label>
          </li>
        ))}
        {!todos.length && (
          <p className="italic">Nothing here</p>
        )}
      </ul>

      {!!todos.length && (
        <button
          type="button"
          onClick={clear}
          className="border border-gray-700 px-2 py-1 rounded hover:bg-blue-200"
        >
          Clear
        </button>
      )}
    </div>
  );
}