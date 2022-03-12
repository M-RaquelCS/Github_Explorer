

export function RepositoryItem(props){
  return(
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'default'}</p>

      <a href="">{props.repository?.link ?? 'default'}</a> 
    </li>
  )
}