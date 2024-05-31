import TopBar from './TopBar';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const Sidebar = () => {
    return (
        <div id='sidebar'>
            <TopBar />
            <div id='forms'>
                <Personal />
                <Education />
                <Experience />
            </div>
        </div>
    );
};

export default Sidebar;
