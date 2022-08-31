import './Contacts.css';
import { useState } from 'react';
import contacts from '../contacts.json';
import AddRandomContact from './AddRandomContact.js';
import ContactCard from './ContactCard.js';
import SortButton from './SortButton';

const contactsArray = contacts;

let initialArray = contactsArray.slice(0, 5);

const Contacts = () => {
    const [contactsList, setContactsList] = useState(initialArray)

    const handleAddContact = (contact) => {
        console.log(contactsList, contactsArray)
        if (!contactsList.includes(contact)) {
            const newContacts = [...contactsList, contact];
            setContactsList(newContacts)
        }
    }

    const handleSortByName = () => {
        console.log(contactsList)
        const newContacts = [...contactsList];
        const sortedContacts = newContacts.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
        });
        setContactsList(sortedContacts)
    }

    const handleSortByPopularity = () => {
        console.log(contactsList)
        const newContacts = [...contactsList];
        const sortedContacts = newContacts.sort(function(a, b) {
            return b.popularity - a.popularity;
        });
        setContactsList(sortedContacts)
    }

    const handleDeleteContact = (id) => {
        console.log(contactsList)
        const newContacts = [...contactsList];
        const index = newContacts.findIndex((contact) => contact.id === id);
        newContacts.splice(index, 1);
        setContactsList(newContacts)
    }
    return (
    <div>
    {console.log(contactsList)}
        <h1>IronContacts</h1>
        <div className='buttons-div'>
            <AddRandomContact addContact={handleAddContact} />
            <SortButton handleSort={handleSortByName} name='Sort by name'/>
            <SortButton handleSort={handleSortByPopularity} name='Sort by popularity'/>
        </div>
        <table className='table'>
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
        </thead>
            <tbody className='cards'>
        {contactsList.map((item) => (
            <ContactCard key={item.id} pictureUrl={item.pictureUrl} name={item.name} popularity={item.popularity} deleteContact={() => {handleDeleteContact(item.id)}}/>
        )
        )}
        </tbody>
        </table>
    </div>
    )
}

export default Contacts;