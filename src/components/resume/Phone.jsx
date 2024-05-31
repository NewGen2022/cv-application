import PropTypes from 'prop-types';

const Phone = ({ phone }) => {
    return (
        <div>
            <span>{phone}</span>
        </div>
    );
};

Phone.propTypes = {
    phone: PropTypes.string,
};

export default Phone;
