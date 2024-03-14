import { useState } from "react"
import TodoItem from "./_components/TodoItem"

function App() {
  const [items, setItems] = useState([])
  const [value, setValue] = useState("")

  const addItem = value => {
    if (!value) return

    setItems([
      ...items,
      {
        task: value,
        priority: 2,
        status: "ongoing",
      },
    ])
    setValue("")
  }

  const deleteItem = index => {
    let prevItems = [...items]

    prevItems.splice(index, 1)
    setItems(prevItems)
  }

  const completeItem = index => {
    let prevItems = [...items]

    prevItems[index].status = "completed"
    setItems(prevItems)
  }

  const deleteCompletedItems = () => {
    let prevItems = [...items]

    for (let i = 0; i < prevItems.length; i++) {
      if (prevItems[i].status === "completed") {
        prevItems.splice(i, 1)
      }
    }
    setItems(prevItems)
  }

  console.log({ items })

  return (
    <div>
      <h3>Todo</h3>

      <div>
        <div>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
          <button onClick={e => addItem(e.target.value)}>Create Item</button>
        </div>
      </div>

      {items.length > 0 &&
        items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
            completeItem={completeItem}
          />
        ))}
    </div>
  )
}

export default App
