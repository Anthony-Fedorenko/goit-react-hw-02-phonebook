import React from "react";
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'

const ContactList = ({contacts, onDelete}) => {
    return (
        <ul className={styles.list}>
            {contacts.map(({id, name, number}) => (
                <li key={id} className={styles.item}>
                    {name} : {number}
                    <button onClick={() => onDelete(id)} type='button' className={styles.button}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactList