import TopBar from './TopBar';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import PropTypes from 'prop-types';

const Sidebar = ({ handleInputChange, handleInputSubmit, institutions, onDelete }) => {
    return (
        <div id='sidebar'>
            <TopBar />
            <div id='forms'>
                <Personal handleInputChange={handleInputChange} />
                <Education 
                    handleInputChange={handleInputChange}
                    handleInputSubmit={handleInputSubmit} 
                    institutions={institutions}
                    onDelete={onDelete}
                />
                <Experience handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleInputSubmit: PropTypes.func.isRequired,
    institutions: PropTypes.array,
    onDelete: PropTypes.func.isRequired
};

export default Sidebar;
