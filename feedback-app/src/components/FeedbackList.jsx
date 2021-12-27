import FeedBack from './FeedbackItem'

const FeedBackList = ({ feedBack }) => {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <>
      {feedBack.map((item) => (
        <FeedBack key={item.id} item={item} />
      ))}
    </>
  )
}

export default FeedBackList
