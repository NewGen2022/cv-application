import FormInput from './FormInput';
import AddBtn from './AddBtn';

const Education = () => {
    const showEducationForm = (event) => {
        event.preventDefault();

        console.log('Education');
    };

    return (
        <form id='education'>
            <h2>Education</h2>
            <FormInput id='school-uni' labelText='School/University' placeholder='Enter school / university' required />
            <FormInput id='degree' labelText='Degree' placeholder='Enter degree / field of study' required />
            <FormInput id='start-date' labelText='Start Degree Date' placeholder='Enter in format month/year' required />
            <FormInput id='end-date' labelText='End Degree Date' placeholder='Enter in format month/year' required />
            <FormInput id='location' labelText='Location' placeholder='Enter Location where studied'/>
            <AddBtn btnValue='Cancel' handleClick={showEducationForm}/>
            <AddBtn btnValue='Save' handleClick={showEducationForm}/>
        </form>
    );
};

export default Education;