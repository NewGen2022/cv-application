import FormInput from './FormInput';
import AddBtn from './AddBtn';

const Experience = () => {
    const showEducationForm = (event) => {
        event.preventDefault();

        console.log('Experience');
    };

    return (
        <form id='experience'>
            <h2>Experience</h2>
            <FormInput id='company-name' labelText='Company Name' placeholder='Enter company name' required />
            <FormInput id='position-title' labelText='Position title' placeholder='Enter Position Title' required />
            <FormInput id='start-date-exp' labelText='Start Experience Date' placeholder='Enter in format month/year' required />
            <FormInput id='end-date-exp' labelText='End Experience Date' placeholder='Enter in format month/year' required />
            <FormInput id='location-exp' labelText='Location' placeholder='Enter Location where studied'/>
            <FormInput id='description' labelText='Description' placeholder='Describe your experience in the company'/>
            <AddBtn btnValue='Cancel' handleClick={showEducationForm}/>
            <AddBtn btnValue='Save' handleClick={showEducationForm}/>
        </form>
    );
};

export default Experience;
