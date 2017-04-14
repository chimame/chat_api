import React, { Component } from 'react'
import $ from 'jquery'
import Message from '../Message'
import MessageForm from '../MessageForm'

class MessageList extends Component {
  componentDidMount() {
    const { actions } = this.props
    $.ajax({
      type: 'GET',
      url: '/api/messages',
      success: (
        (data) => actions.createMessageList(data)
      )
    })
  }

  onToggleDisplay(id) {
    return () => {
      const { actions } = this.props
      actions.toggleDisplayMessage(id)
    }
  }

  renderMessage(actions, message) {
    return (
      message.displayState ?
        <Message key={message.id} actions={actions} id={message.id} text={message.text} onClick={this.onToggleDisplay(message.id).bind(this)} /> :
        <MessageForm key={message.id} actions={actions} message={message} />
    )
  }

  render() {
    const { messages, actions } = this.props
    return (
      <div>
        {messages.map((message) => this.renderMessage(actions, message))}
      </div>
    )
  }
}

export default MessageList
