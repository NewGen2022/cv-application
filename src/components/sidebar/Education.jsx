import FormInput from './FormInput';
import AddBtn from './AddBtn';
import { faGraduationCap  } from '@fortawesome/free-solid-svg-icons';
import FormHeader from './FormHeader';


const Education = () => {
    const showEducationForm = (event) => {
        event.preventDefault();
        console.log('Education');
    };
    
    return (
        <form id='education'>
            <FormHeader 
                icon={faGraduationCap }
                headerText='Education'
            />
            <FormInput id='school-uni' labelText='School/University' placeholder='Enter school / university' required />
            <FormInput id='degree' labelText='Degree' placeholder='Enter degree / field of study' required />
            <FormInput id='start-date' labelText='Start Degree Date' placeholder='Enter in format month/year' required />
            <FormInput id='end-date' labelText='End Degree Date' placeholder='Enter in format month/year' required />
            <FormInput id='location' labelText='Location' placeholder='Enter Location'/>
            <div className='buttons'>
                <AddBtn btnValue='Cancel' className='cancel' handleClick={showEducationForm}/>
                <AddBtn btnValue='Save' className='save' handleClick={showEducationForm}/>
            </div>
        </form>
    );
};

export default Education;