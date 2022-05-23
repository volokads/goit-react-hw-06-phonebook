import {useSelector, useDispatch } from 'react-redux'
import '../App.css';
import  Contacts  from "./Contacts";
import  Filter from "./Filter.jsx";
import  Form  from './Form.jsx';
import {addContact, removeContact, changeFilter} from '../redux/contactsSlice.js'

function App() {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter)
  const onDeleteContactClick =name => dispatch(removeContact(name))

  const forSubmit = (data) => {
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())){
      alert(`${data.name} is already in phonebook`)
      return
    }
    dispatch(addContact(data))
  }
  const filterChange = e=>{ dispatch(changeFilter(e.currentTarget.value))}
  
  const filterValue = filter.toLocaleLowerCase();
  
  const contactsFilter = contacts.filter(contact =>  contact.name.toLocaleLowerCase().includes(filterValue));
  console.log({Filter});

    return (
      <div className="App">
        <div>
          <h2>PhoneBook</h2>
          <Form onSubmit={ forSubmit }/>
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={filterChange}/>
          <Contacts names={contactsFilter} onClick={ onDeleteContactClick }/>
        </div>
      </div>
    )
}

export default App;