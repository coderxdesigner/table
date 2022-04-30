const EditRow = ({ editFormData, handleEditFormChange, handleSaveClick }) => {
  return (
    <tr>
      <td>
        <input onChange={handleEditFormChange} type='text' name='name' required='required' value={editFormData.name} placeholder='Enter a name' />
      </td>
      <td>
        <input onChange={handleEditFormChange} type='text' name='address' required='required' value={editFormData.address} placeholder='Enter an address' />
      </td>
      <td>
        <input onChange={handleEditFormChange} type='phone' name='phone' required='required' value={editFormData.phone} placeholder='Enter a phone' />
      </td>
      <td>
        <input onChange={handleEditFormChange} type='email' name='email' required='required' value={editFormData.email} placeholder='Enter an email' />
      </td>
      <td>
        <button onSubmit={handleSaveClick}>Save</button>
        <button>Cancel</button>
      </td>
    </tr>
  )
}
export default EditRow
