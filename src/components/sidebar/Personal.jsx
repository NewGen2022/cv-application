import FormInput from './FormInput';

const Personal = () => {
    return (
        <form id='personal-details'>
            <h2>Personal Details</h2>
            <FormInput id='name' labelText='Full Name' placeholder='Enter First and Last Name' required />
            <FormInput id='email' labelText='Email' type='email' placeholder='Enter email'/>
            <FormInput id='phone' labelText='Phone number' type='tel' placeholder='Enter phone number'/>
            <FormInput id='address' labelText='Address' placeholder='City, Country'/>
        </form>
    );
};

export default Personal;
