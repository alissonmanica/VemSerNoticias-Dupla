import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GetContext } from '../../context/GetContext'

function Home() {
  const {getNews} = useContext(GetContext)
 

  useEffect(() =>{
    
    getNews('home')
  }, [])


  return (
    <div> {pessoas.map((pessoa) =>(
      <div key={pessoa.idPessoa} className={styles.usuarios}>
          <h3>{pessoa.nome}</h3>
          <p>Email: {pessoa.email}</p>
          <p>Data de nascimento: {moment().format('DD/MM/YYYY', pessoa.dataNascimento)}</p>
          <p>CPF: {maskCpf(pessoa.cpf)}</p>
          <div className={styles.containerBotoes}>
              <div><button onClick={ () => setupDeletar(pessoa.idPessoa)}>Deletar</button></div>
              <div><button onClick={() => navigate(`/create-user/${pessoa.idPessoa}`)}>Atualizar</button></div>
          </div>
      </div>
))}
        </div>)
}


export default Home