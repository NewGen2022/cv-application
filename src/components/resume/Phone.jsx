import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Phone = ({ phone }) => {
    return (
        <div id='phone'>
            <FontAwesomeIcon icon={faPhone} className='icon-resume' />
            <span>{phone}</span>
        </div>
    );
};

Phone.propTypes = {
    phone: PropTypes.string,
};

export default Phone;
