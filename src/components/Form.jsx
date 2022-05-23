import { useState } from "react";

function Form( {onSubmit}) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    
    
    const changeInputName = event => {
        setName(event.currentTarget.value);
      };
      
      const changeInputNumber = event => {
        setNumber(event.currentTarget.value);
          };
    
    
    const formSubmit = (e) => {
        e.preventDefault();
        if (name === '' || number === '') {
            alert('Not enougth information')
        }
        else { 
            const data = {name, number}
            onSubmit(data)
            reset();
        }
    }

    const reset = () => {
        setName('')
        setNumber('')
    }
    
    return (
            <form className="SearchForm" >
                <label className="SearchForm__Label">Name</label>
                <input
                    className="SearchForm__Item"
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={changeInputName}
                    autoComplete="off"
                />
                <label className="SearchForm__Label">Phone number</label>
                <input
                    className="SearchForm__Item"
                    type="text"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={changeInputNumber}
                    autoComplete="off"
                />
                <button className="Btn"  type="submit" onClick={formSubmit}>Add contact</button>
            </form>

        )
    
}
export default Form