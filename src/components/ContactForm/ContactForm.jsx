import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    event.target.reset();
  };

  render() {
    return (
      <>
        <form className = {s.formBox} onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
          className= {s.formInput}
            value={this.state.name}
            onChange={this.handleNameChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
          className= {s.formInput}
            value={this.state.number}
            onChange={this.handleNameChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className= {s.formButton} type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
