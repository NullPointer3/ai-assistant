import React from 'react'

interface ResponseDisplayProps {
  response: string
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  return (
    <div>{response}</div>
  )
}

export default ResponseDisplay