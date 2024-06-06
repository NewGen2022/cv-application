import { useState } from 'react';
import TopBar from './components/sidebar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Resume from './components/resume/Resume';
import handleInputSubmit from './SubmitHandler';
import handleDelete from './DeleteHandler';

const App = () => {
    const [formData, setFormData] = useState({});
    const [educationInstitutions, setEducationInstitution] = useState([]);
    const [experience, setExperience] = useState([]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleEducationInputSubmit = (event) => {
        handleInputSubmit(event, setEducationInstitution);
    };

    const handleExperienceInputSubmit = (event) => {
        handleInputSubmit(event, setExperience);
    };

    const onEducationDelete = (institutionToDelete) => {
        handleDelete(institutionToDelete, setEducationInstitution);
    };

    const onExperienceDelete = (experienceToDelete) => {
        handleDelete(experienceToDelete, setExperience);
    };

    return (
        <>
            <div id='sidebar'>
                <TopBar 
                    setFormData={setFormData}
                    setEducationInstitution={setEducationInstitution}
                    setExperience={setExperience}
                />
                <Sidebar 
                    handleInputChange={handleInputChange} 
                    handleEduInputSubmit={handleEducationInputSubmit}
                    handleExpInputSubmit={handleExperienceInputSubmit}
                    institutions={educationInstitutions}
                    experience={experience}
                    onEducationDelete={onEducationDelete}
                    onExperienceDelete={onExperienceDelete}
                />
            </div>
            <Resume {...formData} institutions={educationInstitutions} experience={experience} />
        </>
    );
};

export default App;
