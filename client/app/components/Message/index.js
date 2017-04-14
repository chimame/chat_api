import React, { PropTypes } from 'react'

const Message = ({actions, id, text, onClick}) => {
  const handleDelete = () => {
    actions.deleteMessage(id)
  }

  return (
    <div>
      <span onClick={onClick}>{text}</span>
      <input type="button" value='削除' onClick={handleDelete} />
    </div>
  )
}

export default Message
