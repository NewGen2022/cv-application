import PropTypes from 'prop-types';

const Email = ({ email }) => {
    return (
        <div id='email'>
            <span>{email}</span>
        </div>
    );
};

Email.propTypes = {
    email: PropTypes.string,
};

export default Email;
