import { useState } from "react"
export default function App(){
  const [input, setInput] = useState("")
  const [aluno, setAluno] = useState("sem nenhum nome")
  const [idade, setIdade] = useState("")

  function mostraAluno(){
    setAluno(input)
  }

  return(
    <div>
      <h1>Conhecendo useState</h1>

      <input 
      placeholder="Digite seu nome"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <br />
      <input
      placeholder="digite sua idade"
      value={idade}
      onChange={(e)=>setIdade(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={mostraAluno}>Mostrar aluno</button>
      <hr />
      <h3>bem vindo: {aluno}</h3>
      <h3>idade: {idade} </h3>

    </div>
  )
}

