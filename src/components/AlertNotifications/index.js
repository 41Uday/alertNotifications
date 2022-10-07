// Write your code here
import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="head">Alert Notifications</h1>

        <Notification>
          <div className="an-cont">
            <div className="card-2-an">
              <div className="i-card-1-an">
                <AiFillCheckCircle className="icon" />
                Success
              </div>
              <p className="p-1">You can access all the files in the folder</p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="an-cont">
            <div className="card-2-an">
              <div className="i-card-1-an i-card-2-an">
                <RiErrorWarningFill className="icon" />
                Error
              </div>
              <p className="p-1">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="an-cont">
            <div className="card-2-an">
              <div className="i-card-1-an i-card-3-an">
                <MdWarning className="icon" />
                Warning
              </div>
              <p className="p-1">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="an-cont">
            <div className="card-2-an">
              <div className="i-card-1-an i-card-4-an">
                <MdInfo className="icon" />
                Info
              </div>
              <p className="p-1">Anyone on the internet can view these files</p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
