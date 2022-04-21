function ArchiveNavBar({ data }) {
  const newestFirstJournalEntries = data.map((entry) =>
    <div>
      Journal {entry.id}
    </div>)
  return (
    <div>
      {newestFirstJournalEntries}
    </div>
  )
}

export default ArchiveNavBar