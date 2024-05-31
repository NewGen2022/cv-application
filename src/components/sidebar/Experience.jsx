import FormInput from './FormInput';
import AddBtn from './AddBtn';
import { faBriefcase  } from '@fortawesome/free-solid-svg-icons';
import FormHeader from './FormHeader';
import { useState } from 'react';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showExperienceForm = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };

    return (
        <form id='experience'>
            <FormHeader 
                icon={faBriefcase}
                headerText='Experience'
                isVisible={isVisible}
                toggleHandler={showExperienceForm}
            />
            { isVisible && (
                <>
                    <FormInput id='company-name' labelText='Company Name' placeholder='Enter company name' required />
                    <FormInput id='position-title' labelText='Position title' placeholder='Enter Position Title' required />
                    <FormInput id='start-date-exp' labelText='Start Experience Date' placeholder='Enter in format month/year' required />
                    <FormInput id='end-date-exp' labelText='End Experience Date' placeholder='Enter in format month/year' required />
                    <FormInput id='location-exp' labelText='Location' placeholder='Enter Location'/>
                    <FormInput id='description' labelText='Description' placeholder='Describe experience'/>
                    <div className='buttons'>
                        <AddBtn btnValue='Cancel' className='cancel'/>
                        <AddBtn btnValue='Save' className='save'/>
                    </div>
                </>
            )}
        </form>
    );
};

export default Experience;
