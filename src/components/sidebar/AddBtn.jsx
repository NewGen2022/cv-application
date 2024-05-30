import PropTypes from 'prop-types';

const AddBtn = ({ btnValue, handleClick }) => {
    return (
        <button className="add-btn" onClick={handleClick}>{btnValue}</button>
    );
};

AddBtn.propTypes = {
    btnValue: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default AddBtn;
