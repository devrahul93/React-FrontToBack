import PropTypes from 'prop-types'
const Header = ({ text }) => {
  return (
    <>
      <header>{text}</header>
    </>
  )
}

Header.defaultProps = {
  text: 'dgdh',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
