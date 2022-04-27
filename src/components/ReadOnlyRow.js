const ReadOnlyRow = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.address}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  )
}

export default ReadOnlyRow
