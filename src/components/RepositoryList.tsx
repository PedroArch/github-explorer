import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'

import '../styles/RepositoryList.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  id?: number;
}

function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() =>{
      fetch("https://api.github.com/users/pedroarch/repos")
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])



  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.id}repository={repository} />)}
      </ul> 
    </section>
  )
}

export default RepositoryList
