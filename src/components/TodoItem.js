import React from 'react';

const TodoItem = ({item, remove}) => (
  <li>
    {item.text}
    <button className='remove-btn' onClick={() => remove(item.id)}>x</button>
  </li>
)

export default TodoItem;
