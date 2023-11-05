import React from 'react'
import "../styles/resumeStyle.css"

function Resume({fullName, address, phone, email,
                 schoolName, schoolLocation,degree, graduationDate,
                 experienceEntries,
                 skills, interests
}) {
    function formatPhone(phoneNumber) {
        return `(${phoneNumber.slice(0,3)})-${phoneNumber.slice(3,6)}-${phoneNumber.slice(-4)} `
    }
  return (
    <div className='resume'>
        <div className="name-container">{fullName}</div>
        <div className='personal-contact-info'>
            {address && `${address} | `}
            {phone && ( (phone.length === 10) ? ` Phone#${formatPhone(phone)} ` : `Phone#${phone}` ) }
            {email && ` | ${email}`}
        </div>

        <div className="education-container">
            {(schoolName || schoolLocation ||degree ||graduationDate) && <> <div className="title">  <h2> EDUCATION </h2> </div><hr/>  </> }
            <div className="education-info">
                <div className="school-name">{schoolName}</div>
                <div className="school-location">{schoolLocation}</div>
                <div className="degree">{degree}</div>
                {graduationDate && <div className="graduation-date">Graduation date: {graduationDate}</div>}
            </div>
        </div>

        <div className="skills-container">
            {(skills || interests) && <> <div className="title">  <h2> SKILLS & INTERESTS </h2> </div><hr/>  </> }
            <div className="skills-info">
                {skills && <div className="skills-resume"><h4>Skills:</h4> {skills}</div>}
                {interests && <div className="interests-resume"><h4>Interests:</h4> {interests}</div>}
            </div>
        </div>

        <div className="experience-container">
            { (experienceEntries.length > 0) && <> <div className="title"><h2>WORK & EXPERIENCE</h2></div> <hr/> </>}

            {(experienceEntries.length > 0) && experienceEntries.map((experience, index) => (
                <div className="experience-entry" key={`entry-${index}`}>
                    <div className="company-name">{experience.company}</div>
                    <div className="company-location">{experience.companyLocation}</div>
                    <div className="position-title">{experience.positionTitle}</div>
                    <div className="start-end-date">{experience.startDateJob} - {experience.endDateJob}</div>
                    <div className="description-job">{experience.descriptionJob}</div>
                </div>
            ))}
            


        </div>
    
    
    </div>
  )
}

export default Resume