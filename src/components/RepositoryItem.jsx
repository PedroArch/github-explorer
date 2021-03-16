import React from 'react'

function RepositoryItem(props) {

  const {name, description, html_url, id} = props.repository;

   
  return (
    <li key={id}>
        <strong>{name ? name : "default"}</strong>
        {description? <p>{description}</p> : <p>Repo sem descrição</p>}
        <a href={html_url}>
          Acesse o repositório
        </a>
    </li>
  )
}

export default RepositoryItem
