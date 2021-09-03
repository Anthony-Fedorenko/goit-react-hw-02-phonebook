import React, {Component} from "react";
import {v4} from 'uuid'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter';
import Section from './Section/Section'
import './Phonebook.module.css'

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }
    formSubmitHandler = ({name, number}) => {
        const contact = {
            id: v4(),
            name,
            number,
        }

        const {contacts} = this.state

        if (
            contacts.find(
                ({name}) => name.toLowerCase() === contact.name.toLowerCase()
            )
        ) {
            alert(`${name} is already in contacts`)
        } else {
            this.setState(({contacts}) => ({
                contacts: [contact, ...contacts]
            }))
        }
    }
    changeFilter = e => {
        this.setState({
            filter: e.currentTarget.value
        })
    }
    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))
    }
    render() {
        const {contacts, filter} = this.state
        const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        return (
            <Section>
                <h1>Phonebook</h1>
                <ContactForm onSubmit = {this.formSubmitHandler} />

                <h2>Contacts</h2>
                <h2>Find contacts by name</h2>

                <Filter value={filter} onChange={this.changeFilter} />

                <ContactList onDelete={this.deleteContact} contacts={filteredContacts} />
            </Section>
        )
    }
}

export default Phonebook