import PropTypes from 'prop-types';

const TopBar = ({ setFormData, setEducationInstitution, setExperience }) => {
    const handleClear = () => {
        setFormData({});
        setEducationInstitution([]);
        setExperience([]);
    };

    const handleLoadExample = () => {
        setFormData({
            address: '123 Sakura St, Tokyo, Japan',
            email: 'satoshi.nakamoto@example.jp',
            name: 'Satoshi Nakamoto',
            phone: '(81) 90-1234-5678',
        });
        setEducationInstitution([
            {
                degree: 'Bachelor of Science in Information Technology',
                schoolUni: 'University of Tokyo',
                location: 'Tokyo, Japan',
                startDate: 'April 2015',
                endDate: 'March 2019',
            },
            {
                degree: 'Master of Science in Artificial Intelligence',
                schoolUni: 'Kyoto University',
                location: 'Kyoto, Japan',
                startDate: 'April 2019',
                endDate: 'March 2021',
            }
        ]);
        setExperience([
            {
                positionTitle: 'Software Engineer',
                companyName: 'Nippon Tech Solutions',
                description: 'Developed and maintained web applications using React and Node.js.',
                locationExp: 'Tokyo, Japan',
                startDateExp: 'April 2021',
                endDateExp: 'Present',
            },
            {
                positionTitle: 'Intern Software Developer',
                companyName: 'Samurai Apps LLC',
                description: 'Assisted in the development of mobile applications and performed software testing.',
                locationExp: 'Osaka, Japan',
                startDateExp: 'June 2018',
                endDateExp: 'August 2018',
            }
        ]);
    };

    return (
        <div id='top-bar'>
            <button id='clear' onClick={handleClear}>Clear Resume</button>
            <button id='load-example' onClick={handleLoadExample}>Load Example</button>
        </div>
    );
};

TopBar.propTypes = {
    setFormData: PropTypes.func.isRequired,
    setEducationInstitution: PropTypes.func.isRequired,
    setExperience: PropTypes.func.isRequired,
};

export default TopBar;
