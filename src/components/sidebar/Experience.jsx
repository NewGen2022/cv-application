import { useState } from 'react';
import { faBriefcase  } from '@fortawesome/free-solid-svg-icons';
import FormInput from './FormInput';
import AddBtn from './AddBtn';
import FormHeader from './FormHeader';
import Card from './Card';
import PropTypes from 'prop-types';
import { showForm, showAll, showSubmit } from './ShowHandler';

const Experience = ({ handleInputChange, handleInputSubmit, experience, onDelete }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showExperience, setShowExperience] = useState(false);

    const showExperienceForm = (event) => {
        showForm(event, setIsVisible, isVisible);
    };

    const showAllExperience = (event) => {
        showAll(event, setShowExperience, showExperience);
    };

    const handleSubmit = (event) => {
        showSubmit(event, handleInputSubmit, setShowExperience, showExperience);
    };

    return (
        <form id='experience' onSubmit={handleSubmit}>
            <FormHeader 
                icon={faBriefcase}
                headerText='Experience'
                isVisible={isVisible}
                toggleHandler={showExperienceForm}
            />
            {isVisible && !showExperience ? (
                <>
                    <FormInput id='company-name' labelText='Company Name' placeholder='Enter company name' onInputChange={handleInputChange} required />
                    <FormInput id='position-title' labelText='Position title' placeholder='Enter Position Title' onInputChange={handleInputChange} required />
                    <FormInput id='start-date-exp' labelText='Start Experience Date' placeholder='Enter in format month/year' onInputChange={handleInputChange} required />
                    <FormInput id='end-date-exp' labelText='End Experience Date' placeholder='Enter in format month/year' onInputChange={handleInputChange} required />
                    <FormInput id='location-exp' labelText='Location' placeholder='Enter Location' onInputChange={handleInputChange} />
                    <FormInput id='description' labelText='Description' placeholder='Describe experience' onInputChange={handleInputChange} />
                    <div className='buttons'>
                        <AddBtn btnValue='Cancel' className='cancel' handleClick={showExperienceForm}/>
                        <AddBtn btnValue='Show All' className='show-all' handleClick={showAllExperience} />
                        <AddBtn btnValue='Save' className='save'/>
                    </div>
                </>
            ) : (isVisible && showExperience && (
                <>
                    <div className='education-institutions-wrapper'>
                        {experience.map((exp, index) => (
                            <Card 
                                key={index}
                                institution={exp} 
                                onDelete={onDelete}
                            />
                        ))}
                    </div>

                    <button onClick={showAllExperience}>button</button>
                </>
            ))}
        </form>
    );
};

Experience.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleInputSubmit: PropTypes.func.isRequired,
    experience: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
};

export default Experience;
