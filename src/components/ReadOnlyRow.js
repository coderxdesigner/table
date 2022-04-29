const ReadOnlyRow = ({ data, handleEditClick }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.address}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>
        <button type='button' onClick={e => handleEditClick(e, data)}>
          Edit
        </button>
        <button>Delete</button>
      </td>
    </tr>
  )
}

export default ReadOnlyRow
