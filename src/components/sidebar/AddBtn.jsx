import PropTypes from 'prop-types';

const AddBtn = ({ btnValue, className, handleClick }) => {
    return (
        <button className={className} type='submit' onClick={handleClick}>{btnValue}</button>
    );
};

AddBtn.propTypes = {
    btnValue: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default AddBtn;
