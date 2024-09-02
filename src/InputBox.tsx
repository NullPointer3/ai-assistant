import React, { useState } from 'react'

interface InputBoxProps {
  onSubmit: (query: string) => void
}

const InputBox: React.FC<InputBoxProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    onSubmit(input)
    setInput('')
  }

  return (
    <div>
      <input 
        type="text"
        value={input}
        onChange={evt => setInput(evt.target.value)}
        placeholder='Ask me anything...' 
      />
      <button 
        type='button'
        onSubmit={handleSubmit}
      >
        Send
      </button>
    </div>
  )
}

export default InputBox