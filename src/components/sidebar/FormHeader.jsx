import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp  } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const FormHeader = ({ icon, headerText, isVisible, toggleHandler }) => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={icon} className='icon' />
            <h2>{headerText}</h2>
            <button onClick={toggleHandler} className='chevron-btn'>
                <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
            </button>
        </div>
    );
};

FormHeader.propTypes = {
    icon: PropTypes.object.isRequired,
    headerText: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    toggleHandler: PropTypes.func.isRequired,
};

export default FormHeader;
