import PropTypes from 'prop-types';

const OutputFields = ({ className, data }) => {
    return (
        <div className={className}>
            {data}
        </div>
    );
};

OutputFields.propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.string
};

export default OutputFields;
