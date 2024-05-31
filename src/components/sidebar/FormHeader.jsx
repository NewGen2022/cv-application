import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

const FormHeader = ({ icon, headerText }) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleHandler = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
        console.log(headerText);
    };


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
};

export default FormHeader;
