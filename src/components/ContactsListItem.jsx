function ContactsListItem(user){
return(
    <li key={user.contact.name} id={user.contact.name}> 
    <p >{user.contact.name}: {user.contact.number}</p>
    <button onClick={()=>user.onDeleteContactClick(user.contact.name)} >Delete</button>
    </li>
)
}
export default ContactsListItem