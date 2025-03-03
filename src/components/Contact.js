import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact.id}`} className="contact_item">
        <div className="contact_header">
            <div className="contact_image">
                <img src={contact.photoUrl} alt= {contact.name}></img>
            </div>
            <div className='contact_details'>
                <p className='contact_name'> {contact.name.substring(0, 50)}</p>
                <p className='contact_title'>{contact.title}</p>
            </div>
        </div>
        <div className='contact_body'>
            <p><i className='bi bi-envelope'></i> {contact.email}</p>
            <p><i className='bi bi-geo'></i> {contact.address}</p>
            <p><i className='bi bi-telephone'></i> {contact.phone}</p>
            <p> {contact.status === 'Active' ? <i className='bi bi-check-circle'></i> : 
                <i className='bbi bi-x-circle'></i>} {contact.status}</p>
        </div>
    </Link>
  )
}

export default Contact