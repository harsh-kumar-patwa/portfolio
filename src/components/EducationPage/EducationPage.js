import './EducationPage.css';
function Card({educationItem}){
    
    return(
        <div className='cards'>
            <div className='card-img'><img src={educationItem.image} alt={educationItem.name} height={`70`}></img></div>
            <div className='card-details' style={{fontFamily: "montserrat, sans-serif",fontWeight:500}}>
                <div id="name-of-college" style={{fontSize:"3vh"}}>{educationItem.name}</div>
                <div id="course-name">{educationItem.course}</div>
                <div id="year-of-study">{educationItem.year}</div>
            </div>
        </div>
    );
}
function EducationPage({educationList}){
    console.log(educationList);
    return (
        <div className="education-main-container" id='education-page'>
            <div className="education-h1">
                Education
            </div>
            
            <div className="education-cards-container">
                {educationList.map((educationItem, index) => (
                    <Card key={index} educationItem={educationItem} />
                ))}
            </div>
            
        </div>
    );
}
export default EducationPage;
