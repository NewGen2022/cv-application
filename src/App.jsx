import Sidebar from './components/sidebar/Sidebar';
import Resume from './components/resume/Resume';
import { useState } from 'react';

const App = () => {
    const [formData, setFormData] = useState({
        // name: '', // Christopher Reynolds
        // email: '', // chrisrey@gmail.com
        // phone: '', // +81-80-2345-6789
        // address: '' // Tokyo, Japan
    });

    const [educationInstitutions, setEducationInstitution] = useState([]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleInputSubmit = (event) => {
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

    const onDelete = (institutionToDelete) => {
        setEducationInstitution((prevState) => 
            prevState.filter(institution => institution !== institutionToDelete
            ));
    };

    return (
        <>
            <Sidebar 
                handleInputChange={handleInputChange} 
                handleInputSubmit={handleInputSubmit} 
                institutions={educationInstitutions}
                onDelete={onDelete}
            />
            <Resume {...formData} institutions={educationInstitutions} />
        </>
    );
};

export default App;
