import FullName from './FullName';
import Email from './Email';
import Phone from './Phone';
import Location from './Location';

const ResumeHeader = () => {
    return (
        <div id='resume-header'>
            <FullName fullName='Christopher Reynolds'/>
            <Email email='chrisrey@gmail.com'/>
            <Phone phone='+81-80-2345-6789'/>
            <Location location='Tokyo, Japan'/>
        </div>
    );
};

export default ResumeHeader;
