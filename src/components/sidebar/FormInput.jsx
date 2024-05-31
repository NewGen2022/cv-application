import PropTypes from 'prop-types';

const FormInput = ({ id, labelText, type='text', placeholder, required=false }) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{labelText}</label>
            <input id={id} name={id} type={type} placeholder={placeholder} required={required}/>
        </div>
    );
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
};

export default FormInput;
