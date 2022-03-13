interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string,
  }
}

export function RepositoryItem(props: RepositoryItemProps){
  return(
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'default'}</p>

      <a href={props.repository?.html_url ?? 'default'}>Acessar repository</a> 
    </li>
  )
}