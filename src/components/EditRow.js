const EditRow = ({ data }) => {
  return (
    <tr>
      <td>
        <input type='text' name='name' required='required' placeholder='Enter a name' />
      </td>
      <td>
        <input type='text' name='address' required='required' placeholder='Enter an address' />
      </td>
      <td>
        <input type='phone' name='phone' required='required' placeholder='Enter a phone' />
      </td>
      <td>
        <input type='email' name='email' required='required' placeholder='Enter an email' />
      </td>
      <td>
        <button>Save</button>
        <button>Cancel</button>
      </td>
    </tr>
  )
}
export default EditRow
