const COHERE_API_KEY = 'ZqM0LxwBS878tGN5ZQRksfp9BDhnShz1GFXwkheF';
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/v1/generate';

export async function fixMyEnglish(input) {
  const dato = {
    /* model: 'c4ai-aya', */
    model:'command',
    prompt: `This is a spell checker generator.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old."
--
Incorrect sample: "I don't can know"
Correct sample: "I don't know"
--
Incorrect sample: "${input}"
Correct sample:`,
    max_tokens: 150,
    temperature: 0.2,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: 'POST',
    headers: {
      "Authorization": `BEARER ${COHERE_API_KEY}`,
      "Content-Type": 'application/json',
      "Cohere-Version": '2023-05-14'
    },
    body: JSON.stringify(dato)
  }).then(res => res.json()); 

  const { text } = response.generations[0]
  return text
    .replace('--', '')
    .replaceAll('"', '')
    .trim()
};