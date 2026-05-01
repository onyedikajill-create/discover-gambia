import { useState } from 'react'

function Quiz() {
  const [result, setResult] = useState(null)
  const [answers, setAnswers] = useState({})

  const questions = [
    { id: 1, question: 'What is your favorite music instrument?', options: ['Kora', 'Djembe', 'Flute', 'Balafon'] },
    { id: 2, question: 'Which landscape do you prefer?', options: ['River', 'Beach', 'Forest', 'Village'] }
  ]

  const handleAnswer = (qId, option) => {
    setAnswers({ ...answers, [qId]: option })
  }

  const calculateResult = () => {
    const answerValues = Object.values(answers)
    if (answerValues.includes('Kora')) setResult('Mandinka')
    else if (answerValues.includes('Djembe')) setResult('Wolof')
    else if (answerValues.includes('Flute')) setResult('Fula')
    else setResult('Jola')
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Which Gambian Ethnic Group Are You?</h1>
      {!result ? (
        <div>
          {questions.map((q) => (
            <div key={q.id} style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{q.question}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {q.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(q.id, option)}
                    style={{
                      padding: '1rem',
                      border: `1px solid ${answers[q.id] === option ? 'var(--gambia-red)' : '#d1d5db'}`,
                      borderRadius: '8px',
                      backgroundColor: answers[q.id] === option ? '#fee2e2' : 'white',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="btn-primary" onClick={calculateResult} disabled={Object.keys(answers).length < 2}>Get Result</button>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You are {result}!</h2>
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>The {result} people are known for their rich cultural traditions.</p>
          <button className="btn-secondary" onClick={() => { setResult(null); setAnswers({}) }}>Retake Quiz</button>
          <button className="btn-primary" style={{ marginLeft: '1rem' }}>Share Result</button>
        </div>
      )}
    </div>
  )
}

export default Quiz