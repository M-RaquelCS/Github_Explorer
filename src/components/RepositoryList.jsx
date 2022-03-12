import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "repository",
  description : 'forms in React',
  link: 'github.com'
}

export function RepositoryList(){
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