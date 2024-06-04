import ResumeHeader from './ResumeHeader';
import OutputFields from './OutputFields';

const Resume = (formsData) => {
    console.log('12345678', formsData);
    return (
        <div id='resume'>
            <ResumeHeader 
                name={formsData.name}
                email={formsData.email}
                phone={formsData.phone}
                address={formsData.address}
            />
            <div className='resume-body'>
            
                <div className='education-wrapper'>
                    <OutputFields className='education-header' data='Education'/>
                    {formsData.institutions.map((institution, index) => (
                        <div key={index} className='school-uni-wrapper'>
                            {Object.entries(institution).map(([key, value]) => (
                                <OutputFields key={key} className={key} data={value}/>
                            ))}
                        </div>
                    ))}
                </div>


                <OutputFields className='experience-header' data='Professional Experience'/>
            </div>
        </div>
    );
};

export default Resume;
