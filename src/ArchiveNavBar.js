function ArchiveNavBar({ data }) {
  const newestFirst = data.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  const newestFirstJournalEntries = newestFirst.map((entry) =>
    <div>
      {entry.createdAt}
    </div>)
  return (
    <div style={{
      // position: 'absolute', width: '100px'
      }}>
      {newestFirstJournalEntries}
    </div>
  )
}

export default ArchiveNavBar