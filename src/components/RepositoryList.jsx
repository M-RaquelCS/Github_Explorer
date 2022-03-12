import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
 //https://api.github.com/users/M-RaquelCS/repos
const repository = {
  name: "repository",
  description : 'forms in React',
  link: 'github.com'
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/M-RaquelCS/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])

  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}