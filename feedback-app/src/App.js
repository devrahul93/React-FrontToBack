import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedBackList from './components/FeedbackList'

const App = () => {
  const [feedBack, setFeedBack] = useState(FeedbackData)
  return (
    <>
      <>
        <Header />
        <div className="container">
          <FeedBackList feedBack={feedBack} />
        </div>
      </>
    </>
  )
}

export default App
