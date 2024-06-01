import { useState } from "react"

interface infoAlunoProps{
  nome: string
  idade: string
}
interface UseProps{
  apelido: string
  cargo: string
}
export default function App(){
  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")
  const [Contador, setContador] = useState(0)

  const [infoAluno, setInfoAluno] = useState<infoAlunoProps>()
  const [use, setUser] = useState({
    apelido: "Visitante",
    cargo: ""
  })

  function mostraAluno(){
    setInfoAluno({
      nome: input,
      idade: idade
    })
  }
  function adicionar(){
    setContador(valorAtual => valorAtual+1)
  }
  function diminuir(){
    if(Contador===0){
      return
    }
    setContador(valorAtual => valorAtual-1)
  }
  function HandleLogin(){
    setUser({
      apelido:"programador raiz",
      cargo: "fullStack"
    })
  }
  function handleLogout(){
    setUser({
      apelido: "visitante",
      cargo:""
    })
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
      <h3>bem vindo: {infoAluno?.nome}</h3>
      <h3>idade: {infoAluno?.idade}  </h3>
      <hr />
      <br />
      <h1>Contador de useState</h1>
      <button onClick={adicionar}>+</button> { Contador } <button onClick={diminuir}>-</button> 
      <br /><br /><hr />
      <h1>Fixando useState</h1>
      <button onClick={HandleLogin}>Entrar</button>
      <button onClick={handleLogout}>Fazer logout</button>
      <h1>Olá {use.apelido}</h1>
      <strong>{use.cargo}</strong>
    </div>
  )
}

