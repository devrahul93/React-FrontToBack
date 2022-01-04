import PropTypes from 'prop-types'
import FeedBack from './FeedbackItem'

const FeedBackList = ({ feedBack, handleDelete }) => {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <>
      {feedBack.map((item) => (
        <FeedBack key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </>
  )
}

FeedBackList.propTypes = {
  feedBack: PropTypes.array,
}

export default FeedBackList
