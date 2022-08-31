import contacts from "../contacts.json";

const AddRandomContact = ({ addContact }) => {

  const getRandomContact = (array) => {
    let randomContact = array[Math.floor((Math.random() * array.length))]
    console.log(randomContact)
    return randomContact;
  }

  return (
    <div>
    <button onClick = {() => {addContact(getRandomContact(contacts))}}>Add Random Contact</button>
    </div>
  )
} 

export default AddRandomContact;