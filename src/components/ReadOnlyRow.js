const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
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
        <button type='button' onClick={e => handleDeleteClick(e, data.id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ReadOnlyRow
