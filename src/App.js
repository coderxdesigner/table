import { useState } from 'react'
import { nanoid } from 'nanoid'
//components
import Header from './components/Header'
import ReadOnlyRow from './components/ReadOnlyRow'
//global css
import './app.css'
import data from './components/data/mock-data.json'
const App = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  })
  const handleAddFormChange = e => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }
  const handleAddFormSubmit = e => {
    e.preventDefault()
    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      address: addFormData.address,

      phone: addFormData.phone,
      email: addFormData.email
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }
  return (
    <div className='app-container'>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <ReadOnlyRow data={contact} />
          ))}
        </tbody>
      </table>
      <h2>Add a contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input onChange={handleAddFormChange} type='text' name='name' required='required' placeholder='Enter a name' />
        <input onChange={handleAddFormChange} type='text' name='address' required='required' placeholder='Enter an address' />
        <input onChange={handleAddFormChange} type='phone' name='phone' required='required' placeholder='Enter a phone' />
        <input onChange={handleAddFormChange} type='email' name='email' required='required' placeholder='Enter an email' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default App
