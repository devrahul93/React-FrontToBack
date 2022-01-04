import PropType from 'prop-types'
import Card from '../shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedBack = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBack.propType = {
  Card: PropType.object.isRequired,
}
export default FeedBack
