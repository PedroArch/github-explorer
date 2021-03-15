import React from 'react'

function RepositoryItem(props) {

  const {name, description, link} = props.repository
   
  return (
    <li>
        <strong>{name ? name : "default"}</strong>
        <p>{description}</p>

        <a href={link}>
          Acesse o repositório
        </a>
    </li>
  )
}

export default RepositoryItem
