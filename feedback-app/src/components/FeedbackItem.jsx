import PropType from 'prop-types'
import Card from '../shared/Card'
const FeedBack = ({ item }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBack.propType = {
  Card: PropType.object.isRequired,
}
export default FeedBack
