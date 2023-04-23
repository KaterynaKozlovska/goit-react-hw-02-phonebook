import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.createID();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  createID = () => {
    const contactid = nanoid(4);
    this.setState({ id: contactid });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { id, name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.field}>
          <label className={css.label}>Name</label>
          <input
            className={css.input}
            type="text"
            name="name"
            contactid={id}
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={css.field}>
          <label className={css.label}>Number</label>
          <input
            className={css.input}
            type="tel"
            name="number"
            contactid={id}
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={css.btn__submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
