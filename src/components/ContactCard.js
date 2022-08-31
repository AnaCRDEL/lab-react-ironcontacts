const ContactCard = ({ pictureUrl, name, popularity, deleteContact }) => {
    return (
        <tr>
            <td> <img src={pictureUrl} alt='contact-pic'/> </td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={deleteContact}>Delete</button></td>
        </tr>
    )
}

export default ContactCard;