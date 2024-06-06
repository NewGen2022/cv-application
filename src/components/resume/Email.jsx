import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Email = ({ email }) => {
    return (
        <div id='email'>
            <FontAwesomeIcon icon={faEnvelope} className='icon-resume' />
            <span>{email}</span>
        </div>
    );
};

Email.propTypes = {
    email: PropTypes.string,
};

export default Email;
