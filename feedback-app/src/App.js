import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedBackList from './components/FeedbackList'
import Stats from './components/FeedBackStats'

const App = () => {
  const [feedBack, setFeedBack] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure')) {
      setFeedBack(feedBack.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <>
        <Header />
        <div className="container">
          <Stats feedBack={feedBack} />
          <FeedBackList feedBack={feedBack} handleDelete={deleteFeedback} />
        </div>
      </>
    </>
  )
}

export default App
