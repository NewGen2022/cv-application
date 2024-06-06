import FullName from './FullName';
import Email from './Email';
import Phone from './Phone';
import Location from './Location';
import PropTypes from 'prop-types';

const ResumeHeader = ({ name, email, phone, address }) => {
    return (
        <div id='resume-header'>
            <FullName name={name}/>
            <Email email={email}/>
            <div className='horizontal-info'>
                <Phone phone={phone}/>
                <Location address={address}/>
            </div>
        </div>
    );
};

ResumeHeader.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
};

export default ResumeHeader;
