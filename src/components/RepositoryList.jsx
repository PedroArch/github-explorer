import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'

import '../styles/RepositoryList.scss';

function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() =>{
      fetch("https://api.github.com/users/pedroarch/repos")
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])



  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem repository={repository} />)}
      </ul> 
    </section>
  )
}

export default RepositoryList
