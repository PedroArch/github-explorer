import React from 'react'

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}


function RepositoryItem(props: RepositoryItemProps) {

  const {name, description, html_url} = props.repository;

   
  return (
    <li>
        <strong>{name ? name : "default"}</strong>
        {description? <p>{description}</p> : <p>Repo sem descrição</p>}
        <a href={html_url}>
          Acesse o repositório
        </a>
    </li>
  )
}

export default RepositoryItem
