import { PropTypes } from 'react'

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  comments: PropTypes.array,
  text: PropTypes.string
})
