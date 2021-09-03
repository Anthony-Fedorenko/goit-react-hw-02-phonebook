import React, {Component} from "react";
import styles from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleInputChange = event => {
        const {name, value} = event.currentTarget
        this.setState({[name] : value})
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        const {name, number} = this.state;
        return (

            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label className={styles.label}> Name
                    <input className={styles.input}
                           onChange={this.handleInputChange}
                           value={name}
                           type="text"
                           name="name"
                           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                           required
                    />
                </label>
                <label className={styles.label}> Number
                    <input className={styles.input}
                           onChange={this.handleInputChange}
                           value={number}
                           type="tel"
                           name="number"
                           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                           required
                    />
                </label>
                <button type="Submit" className={styles.button}>Add</button>
            </form>
        )
    }

}
export default ContactForm