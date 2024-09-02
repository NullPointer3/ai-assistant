import React from 'react'

interface ConversationHistoryProps {
  history: { query: string, response: string}[]
}

const ConversationHistory: React.FC<ConversationHistoryProps> = ({ history }) => {
  return (
    <div>
      {history.map((item, index) => (
        <div key={index}>
          <p><strong>You:</strong> {item.query}</p>
          <p><strong>Assistant:</strong> {item.response}</p>
        </div>
      ))}
    </div>
  )
}

export default ConversationHistory