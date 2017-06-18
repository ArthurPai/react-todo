import React, {Component} from 'react';

const TodoList = ({items}) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
)

export default TodoList;
