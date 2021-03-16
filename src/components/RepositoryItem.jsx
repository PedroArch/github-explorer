import React from 'react'

function RepositoryItem(props) {

  console.log(props)

  const {name, description, html_url} = props;
   
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
