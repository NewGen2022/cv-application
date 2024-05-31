import PropTypes from 'prop-types';

const Location = ({ location }) => {
    return (
        <div id='location'>
            <span>{location}</span>
        </div>
    );
};

Location.propTypes = {
    location: PropTypes.string,
};

export default Location;
