import PropTypes from 'prop-types'
import styles from './Filter.module.css'

const Filter = ({value, onChange}) => (
    <label className={styles.label}>
        <input type='text' value={value} onChange={onChange} className={styles.input}/>
    </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter