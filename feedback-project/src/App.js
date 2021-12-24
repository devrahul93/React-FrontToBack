import { useState } from 'react'
const App = () => {
  const comments = [
    { id: 1, text: 'Comment One' },
    { id: 2, text: 'Comment Two' },
    { id: 3, text: 'Comment Three' },
  ]

  const [display, setDisplay] = useState(true)

  const commentBlock = (
    <ul>
      {comments.map((lengt) => (
        <li key={lengt.id}>{lengt.text}</li>
      ))}
    </ul>
  )

  return (
    <>
      <h1>Blog Post</h1>
      <p>This is my Blog post</p>
      <p>Cooment {comments.length}</p>
      <button onClick={() => setDisplay(!display)}>Show Comments</button>
      {display && commentBlock}
    </>
  )
}

export default App
