import PropTypes from 'prop-types';

const Location = ({ address }) => {
    return (
        <div id='location'>
            <span>{address}</span>
        </div>
    );
};

Location.propTypes = {
    address: PropTypes.string,
};

export default Location;
