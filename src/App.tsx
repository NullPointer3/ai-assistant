import React, { useState } from 'react'
import InputBox from './InputBox.tsx'
import { fetchAIResponse } from './services/openaiClient.ts'
import ConversationHistory from './ConversationHistory.tsx'
import ResponseDisplay from './ResponseDisplay.tsx'

interface ConversationItem {
  query: string
  response: string
}

const App: React.FC = () => {
  const [history, setHistory] = useState<ConversationItem[]>([])
  const [latestResponse, setLatestResponse] = useState<string>('')

  const handleQuerysubmit = async (query: string) => {
    const response = await fetchAIResponse(query)
    setLatestResponse(response)
    setHistory([...history, { query, response}])
  }
  return (
    <div>
      <h1>AI-Powered Personal Assistant</h1>
      <InputBox onSubmit={handleQuerysubmit}/>
      <ResponseDisplay response={latestResponse}/>
      <ConversationHistory history={history}/>
    </div>
  )
}

export default App