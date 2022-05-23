import ContactsListItem from './ContactsListItem'

const ContactsList = ({names, onClick}) => {
    return(
        <ul>
            {names.map(user =>
                (
                    <ContactsListItem contact={user} onDeleteContactClick={onClick}/>
                )
            )}
        </ul>
    )

}

export default ContactsList