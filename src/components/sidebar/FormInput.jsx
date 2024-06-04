import PropTypes from 'prop-types';

const FormInput = ({ id, labelText, type='text', placeholder, required=false, onInputChange }) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{labelText}</label>
            <input 
                id={id} 
                name={id} 
                type={type} 
                placeholder={placeholder} 
                required={required}
                onChange={onInputChange}
            />
        </div>
    );
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    onInputChange: PropTypes.func.isRequired,
};

export default FormInput;
