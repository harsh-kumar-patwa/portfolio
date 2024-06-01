import './AboutMe.css';
function AboutMe({MyDescription,AboutMeDetails}){
    return (
        <div id="about-main-page" className="about-main-page">
            <div className="about-h1">
                <div></div>
                <h1>About</h1>
            </div>
            <div className="description-main">
                <div className="about-me-description">
                    {MyDescription}
                </div>
                <div className="about-me-details">
                    {AboutMeDetails.map((detail,index)=>{
                        return <div key={index} className="detail">{detail}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default AboutMe;