import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => (
  <ul className= {s.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li className = {s.contactItem} key={id}>
          {name}: {number}
          <button className= {s.contactBtnDel} onClick={() => removeContact(id)} type="button">
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
