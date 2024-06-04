import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Card = ({ institution, onDelete }) => {
    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(institution);
    };
    
    return (
        <div className="card-wrapper">
            <span>{institution['school-uni']}</span>
            <button onClick={handleDelete} className="delete-button">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

Card.propTypes = {
    institution: PropTypes.array,
    onDelete: PropTypes.func.isRequired
};

export default Card;
