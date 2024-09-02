import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export const fetchAIResponse = async (prompt: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw new Error('Failed to fetch AI response');
  }
};
