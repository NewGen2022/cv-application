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
            <FormInput id='location-exp' labelText='Location' placeholder='Enter Location'/>
            <FormInput id='description' labelText='Description' placeholder='Describe experience'/>
            <div className='buttons'>
                <AddBtn btnValue='Cancel' className='cancel' handleClick={showEducationForm}/>
                <AddBtn btnValue='Save' className='save' handleClick={showEducationForm}/>
            </div>
        </form>
    );
};

export default Experience;
