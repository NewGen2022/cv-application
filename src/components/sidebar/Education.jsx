import FormInput from './FormInput';
import AddBtn from './AddBtn';
import { faGraduationCap  } from '@fortawesome/free-solid-svg-icons';
import FormHeader from './FormHeader';
import { useState } from 'react';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showEducationForm = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };
    
    return (
        <form id='education'>
            <FormHeader 
                icon={faGraduationCap}
                headerText='Education'
                isVisible={isVisible}
                toggleHandler={showEducationForm}
            />
            {isVisible && (
                <>
                    <FormInput id='school-uni' labelText='School/University' placeholder='Enter school / university' required />
                    <FormInput id='degree' labelText='Degree' placeholder='Enter degree / field of study' required />
                    <FormInput id='start-date' labelText='Start Degree Date' placeholder='Enter in format month/year' required />
                    <FormInput id='end-date' labelText='End Degree Date' placeholder='Enter in format month/year' required />
                    <FormInput id='location' labelText='Location' placeholder='Enter Location'/>
                    <div className='buttons'>
                        <AddBtn btnValue='Cancel' className='cancel' handleClick={showEducationForm}/>
                        <AddBtn btnValue='Save' className='save' handleClick={showEducationForm}/>
                    </div>
                </>
            )}
        </form>
    );
};

export default Education;