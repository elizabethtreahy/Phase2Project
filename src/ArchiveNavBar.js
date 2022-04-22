import { Link } from "react-router-dom"
function ArchiveNavBar({ data }) {
  const newestFirstJournalEntries = data.map((entry, i) =>
    <h4 key={`archive ${i}`} style={{width: '150px' }}>
      <Link style={{textDecoration: 'none', color: 'black'}} to={`/archive/${entry.id}`}>{entry.createdAt}</Link>
    </h4>)
  return (
    <div>
      {newestFirstJournalEntries}
    </div>
  )
}

export default ArchiveNavBar