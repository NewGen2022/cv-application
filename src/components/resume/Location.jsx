import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Location = ({ address }) => {
    return (
        <div id='location'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon-resume' />
            <span>{address}</span>
        </div>
    );
};

Location.propTypes = {
    address: PropTypes.string,
};

export default Location;
