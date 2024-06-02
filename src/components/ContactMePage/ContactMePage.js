import './ContactMePage.css';
function ContactMePage({contactDetails}) {
  return (
    <div className='contact-me-page' id='contact-me-main-page'>
      <h1 className='contact-me-title'>Contact Me</h1>
      <div className='contact-detail-container'>
          {contactDetails.map((contact, index) => (
              <MyComponent key={index} contact={contact} />
          ))}

      </div>
      
    </div>
  );
}
function MyComponent({contact}) {
  return (
    <div className='my-component' data-message={contact.message}>
      <h2>{contact.name}</h2>
      <p>
        {contact.name === "Email Id" ? (
          <a href={`mailto:${contact.value}`}>{contact.value}</a>
        ) : contact.name === "Phone" ? (
          <a href={`tel:${contact.value}`}>{contact.value}</a>
        ) : contact.name === "Address" ? (
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.value)}`} target="_blank" rel="noopener noreferrer">{contact.value}</a>
        ) : contact.name === "Github" ? (
          <a href={contact.value} target="_blank" rel="noopener noreferrer">{contact.value}</a>
        ) : contact.name === "LinkedIn" ? (
          <a href={contact.value} target="_blank" rel="noopener noreferrer">{contact.value}</a>
        ) : (
          contact.value
        )}
      </p>
    </div>
  );
}
export default ContactMePage;