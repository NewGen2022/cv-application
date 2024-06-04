import Sidebar from './components/sidebar/Sidebar';
import Resume from './components/resume/Resume';
import { useState } from 'react';

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
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const educationData = {};

        for (const entry of formData.entries()) {
            const [name, value] = entry;
            educationData[name] = value;
        }

        setEducationInstitution((prevState) => [
            ...prevState,
            { ...educationData }
        ]);
    };

    const handleExperienceInputSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const experienceData = {};

        for (const entry of formData.entries()) {
            const [name, value] = entry;
            experienceData[name] = value;
        }

        setExperience((prevState) => [
            ...prevState,
            { ...experienceData }
        ]);

        console.log(experienceData);
    };

    const onEducationDelete = (institutionToDelete) => {
        setEducationInstitution((prevState) => 
            prevState.filter(institution => institution !== institutionToDelete
            ));
    };

    const onExperienceDelete = (experienceToDelete) => {
        setExperience((prevState) => 
            prevState.filter(experience => experience !== experienceToDelete
            ));
    };

    return (
        <>
            <Sidebar 
                handleInputChange={handleInputChange} 
                handleEduInputSubmit={handleEducationInputSubmit}
                handleExpInputSubmit={handleExperienceInputSubmit}
                institutions={educationInstitutions}
                experience={experience}
                onEducationDelete={onEducationDelete}
                onExperienceDelete={onExperienceDelete}
            />
            <Resume {...formData} institutions={educationInstitutions} experience={experience} />
        </>
    );
};

export default App;
