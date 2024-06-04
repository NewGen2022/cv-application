import PropTypes from 'prop-types';

const FullName = ({ name }) => {
    return (
        <div id='full-name'>
            <span>{name}</span>
        </div>
    );
};

FullName.propTypes = {
    name: PropTypes.string,
};

export default FullName;
