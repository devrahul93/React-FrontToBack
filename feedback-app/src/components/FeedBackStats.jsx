import PropTypes from 'prop-types'
const Stats = ({ feedBack }) => {
  //calculate rating avg
  let average =
    feedBack.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedBack.length

  //just one decimal to average and remove 0
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedBack.length} Review</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
Stats.propTypes = {
  feedBack: PropTypes.array.isRequired,
}

export default Stats
