import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({items, remove}) => (
  <ul>
    {items.map(item => (
      <TodoItem key={item.id} item={item} remove={remove} />
    ))}
  </ul>
)

export default TodoList;
