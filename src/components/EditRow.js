const EditRow = ({ data }) => {
  return (
    <tr>
      <td>
        <input type='text' name='name' required='required' value={data.name} placeholder='Enter a name' />
      </td>
      <td>
        <input type='text' name='address' required='required' value={data.address} placeholder='Enter an address' />
      </td>
      <td>
        <input type='phone' name='phone' required='required' value={data.phone} placeholder='Enter a phone' />
      </td>
      <td>
        <input type='email' name='email' required='required' value={data.email} placeholder='Enter an email' />
      </td>
      <td>
        <button>Save</button>
        <button>Cancel</button>
      </td>
    </tr>
  )
}
export default EditRow
