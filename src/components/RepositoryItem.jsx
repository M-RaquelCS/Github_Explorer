

export function RepositoryItem(props){
  return(
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'default'}</p>

      <a href={props.repository?.html_url ?? 'default'}>Acessar repository</a> 
    </li>
  )
}