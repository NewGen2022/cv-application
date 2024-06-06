import { useState } from 'react';
import { faGraduationCap  } from '@fortawesome/free-solid-svg-icons';
import FormInput from './FormInput';
import AddBtn from './AddBtn';
import FormHeader from './FormHeader';
import Card from './Card';
import PropTypes from 'prop-types';
import { showForm, showAll, showSubmit } from './ShowHandler';
import ShowFormBtn from './AddAnotherBtn';

const Education = ({ handleInputChange, handleInputSubmit, institutions, onDelete }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showInstitutions, setShowInstitutions] = useState(false);

    const showEducationForm = (event) => {
        showForm(event, setIsVisible, isVisible);
    };

    const showAllInstitutions = (event) => {
        showAll(event, setShowInstitutions, showInstitutions);
    };

    const handleSubmit = (event) => {
        showSubmit(event, handleInputSubmit, setShowInstitutions, showInstitutions);
    };

    return (
        <form id='education' onSubmit={handleSubmit}>
            <FormHeader 
                icon={faGraduationCap}
                headerText='Education'
                isVisible={isVisible}
                toggleHandler={showEducationForm}
            />
            {isVisible && !showInstitutions ? (
                <>
                    <FormInput id='school-uni' labelText='School/University' placeholder='Enter school / university' onInputChange={handleInputChange} required/>
                    <FormInput id='degree' labelText='Degree' placeholder='Enter degree / field of study' onInputChange={handleInputChange} required />
                    <FormInput id='start-date' labelText='Start Degree Date' placeholder='Enter in format month/year' onInputChange={handleInputChange} required />
                    <FormInput id='end-date' labelText='End Degree Date' placeholder='Enter in format month/year' onInputChange={handleInputChange} required />
                    <FormInput id='location' labelText='Location' placeholder='Enter Location' onInputChange={handleInputChange} />
                    <div className='buttons'>
                        <AddBtn btnValue='Cancel' className='cancel' handleClick={showEducationForm} />
                        <AddBtn btnValue='Show All' className='show-all' handleClick={showAllInstitutions} />
                        <AddBtn btnValue='Save' className='save' />
                    </div>
                </>
            ) : (isVisible && showInstitutions && (
                <>
                    <div className='education-institutions-wrapper'>
                        {institutions.map((institution, index) => (
                            <Card 
                                key={index}
                                institution={institution} 
                                onDelete={onDelete}
                            />
                        ))}
                    </div>

                    <ShowFormBtn btnValue='Education' showAll={showAllInstitutions} />
                </>
            ))}
        </form>
    );
};

Education.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleInputSubmit: PropTypes.func.isRequired,
    institutions: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
};

export default Education;