import PropTypes from 'prop-types';

const FullName = ({ fullName }) => {
    return (
        <div id='full-name'>
            <span>{fullName}</span>
        </div>
    );
};

FullName.propTypes = {
    fullName: PropTypes.string,
};

export default FullName;
