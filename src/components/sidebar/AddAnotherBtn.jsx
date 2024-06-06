import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const ShowFormBtn = ({ btnValue, showAll }) => {
    return (
        <div id={`${btnValue.toLowerCase()}-btn`} onClick={showAll}>
            <FontAwesomeIcon icon={faPlus} />
            <button>{btnValue}</button>
        </div>
    );
};

ShowFormBtn.propTypes = {
    btnValue: PropTypes.string.isRequired,
    showAll: PropTypes.func.isRequired
};

export default ShowFormBtn;