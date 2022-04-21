import { Link } from "react-router-dom"
function ArchiveNavBar({ data }) {
  const newestFirstJournalEntries = data.map((entry) =>
    <div style={{width: '75px' }}>
      <Link style={{textDecoration: 'none', color: 'black'}} to={`/archive/${entry.id}`}>Journal {entry.id}</Link>
    </div>)
  return (
    <div>
      {newestFirstJournalEntries}
    </div>
  )
}

export default ArchiveNavBar