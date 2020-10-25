import React, { useState } from 'react'
import cx from 'classnames'
import unCheckedIcon from '../../assets/uncheck_icon.svg'
import checkedIcon from '../../assets/check_icon.svg'
import styles from './index.module.css'

type Todo = {
  id: number,
  text: string,
  done: boolean
}

interface TodoItemProps {
  todo: Todo,
  onToggle: (todo: Todo) => void
}

function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <div className={cx(styles.todo_item, { [styles.todo_item_checked]: todo.done })} onClick={() => onToggle(todo)}>
      <span role="button" className={styles.check_icon}>
        <img src={todo.done ? checkedIcon : unCheckedIcon} alt="icon" />
      </span>
      <span className={styles.todo_item_text}>{todo.text}</span>
    </div>
  )
}

export default function TodoList() {
  const inititalTodos: Todo[] = [
    { id: 1, text: 'First todo', done: true },
    { id: 2, text: 'Second todo', done: false }
  ]
  const [todos, setTodos] = useState(inititalTodos)
  const [value, setValue] = useState<string>('')
  const toggleTodo = (todo: Todo): void => {
    todo.done = !todo.done
    setTodos([ ...todos ])
  }
  const compeleteAll = () => {
    const newTodos: Todo[] = todos.map(t => ({
      ...t,
      done: true
    }))
    setTodos(newTodos)
  }
  const addTodo = (todo: Todo) => {
    todos.push(todo)
    setTodos([...todos])
  }
  const confirmAdd = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter' && value) {
      addTodo({ id: Date.now(), text: value, done: false })
      setValue('')
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.todo_wrapper}>
        <div className={styles.todo_input}>
          <input
            placeholder="What needs to be done?"
            value={value}
            onChange={evt => setValue(evt.target.value)}
            onKeyPress={confirmAdd}
          />
        </div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
        <div className={styles.complete_all}>
          <span role="button" className={styles.complete_all_btn} onClick={compeleteAll}>
            Complete all
          </span>
        </div>
      </div>
    </div>
  )
}