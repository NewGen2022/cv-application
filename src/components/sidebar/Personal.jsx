import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormHeader from './FormHeader';

const Personal = ({ handleInputChange }) => {
    const [isVisible, setIsVisible] = useState(true);

    const showPersonalForm = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };

    return (
        <form id='personal-details'>
            <FormHeader 
                icon={faUser}
                headerText='Personal Details'
                isVisible={isVisible}
                toggleHandler={showPersonalForm}
            />
            {isVisible && (
                <>
                    <FormInput 
                        id='name' 
                        labelText='Full Name' 
                        placeholder='Enter First and Last Name' 
                        onInputChange={handleInputChange} 
                        required 
                    />
                    <FormInput 
                        id='email'
                        labelText='Email' 
                        type='email' 
                        placeholder='Enter email' 
                        onInputChange={handleInputChange} 
                    />
                    <FormInput 
                        id='phone' 
                        labelText='Phone number' 
                        type='tel' 
                        placeholder='Enter phone number' 
                        onInputChange={handleInputChange} 
                    />
                    <FormInput 
                        id='address' 
                        labelText='Address' 
                        placeholder='City, Country' 
                        onInputChange={handleInputChange} 
                    />
                </>
            )}
        </form>
    );
};


Personal.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
};

export default Personal;
