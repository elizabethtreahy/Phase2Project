import { Link } from "react-router-dom"
function ArchiveNavBar({ data }) {
  const newestFirstJournalEntries = data.map((entry) =>
    <h4 style={{width: '150px' }}>
      <Link style={{textDecoration: 'none', color: 'black'}} to={`/archive/${entry.id}`}>{entry.createdAt}</Link>
    </h4>)
  return (
    <h2>
      {newestFirstJournalEntries}
    </h2>
  )
}

export default ArchiveNavBar