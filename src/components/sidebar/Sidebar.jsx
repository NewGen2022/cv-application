import TopBar from './TopBar';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import PropTypes from 'prop-types';

const Sidebar = ({ handleInputChange, handleEduInputSubmit, handleExpInputSubmit, institutions, experience, onEducationDelete, onExperienceDelete }) => {
    return (
        <div id='sidebar'>
            <TopBar />
            <div id='forms'>
                <Personal handleInputChange={handleInputChange} />
                <Education 
                    handleInputChange={handleInputChange}
                    handleInputSubmit={handleEduInputSubmit} 
                    institutions={institutions}
                    onDelete={onEducationDelete}
                />
                <Experience 
                    handleInputChange={handleInputChange} 
                    handleInputSubmit={handleExpInputSubmit}
                    experience={experience}
                    onDelete={onExperienceDelete}
                />
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleEduInputSubmit: PropTypes.func.isRequired,
    handleExpInputSubmit: PropTypes.func.isRequired,
    institutions: PropTypes.array,
    experience: PropTypes.array,
    onEducationDelete: PropTypes.func.isRequired,
    onExperienceDelete: PropTypes.func.isRequired,
};

export default Sidebar;
