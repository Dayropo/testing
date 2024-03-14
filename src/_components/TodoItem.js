import React from "react"

export default function TodoItem({ item, index, deleteItem, completeItem }) {
  return (
    <div>
      <input type="checkbox" checked={item.completed} onChange={() => completeItem(index)} />
      <span>{item.task}</span>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </div>
  )
}
