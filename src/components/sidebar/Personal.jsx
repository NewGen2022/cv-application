import FormInput from './FormInput';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import FormHeader from './FormHeader';

const Personal = () => {
    return (
        <form id='personal-details'>
            <FormHeader 
                icon={faUser}
                headerText='Personal Details'
            />
            <FormInput id='name' labelText='Full Name' placeholder='Enter First and Last Name' required />
            <FormInput id='email' labelText='Email' type='email' placeholder='Enter email'/>
            <FormInput id='phone' labelText='Phone number' type='tel' placeholder='Enter phone number'/>
            <FormInput id='address' labelText='Address' placeholder='City, Country'/>
        </form>
    );
};

export default Personal;
