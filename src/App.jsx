import {useState} from 'react'

function App(){
  const [score, setScore] = useState(501)
  const [inputScore, setInputScore] = useState('')

  function subtractScore(){
    const point = Number(inputScore)
    setScore(score - point)
    setInputScore('')
  }

  return (
    <div>
      <h1>Darts Score</h1>
      <h2>{score}</h2>

      <button onClick={subtractScore}>
        点数を引く
      </button>
    <div>
    <input
      type="number"
      value={inputScore}
      onChange={(e) => setInputScore(e.target.value)}
    />

    <p>入力した点数：{inputScore}</p>
    </div>
    </div>
  )
}

export default App