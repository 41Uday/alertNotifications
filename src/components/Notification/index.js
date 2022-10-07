// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="n-cont">
      <h1>{children}</h1>
      <GrFormClose className="d-icon" />
    </div>
  )
}

export default Notification
