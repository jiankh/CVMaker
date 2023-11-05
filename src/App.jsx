import { useState } from 'react'
import './App.css'
import PersonalInformation from './Components/PersonalInformation'
import Resume from './Components/Resume'
import EducationForm from './Components/EducationForm'
import { handleInputChange } from './helperFunctions'
import ExperienceForm from './Components/ExperienceForm'
import SkillsForm from './Components/SkillsForm'
import Header from './Components/Header'


function App() {
    //STATE SECTION
    ////Personal Info 
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    ////Education
    const [schoolName, setSchoolName] = useState()
    const [schoolLocation, setSchoolLocation] = useState()
    const [degree, setDegree] = useState()
    const [graduationDate, setGraduationDate] = useState()
    ////Experience
    const [experienceEntries, setExperienceEntries] = useState([]);
    ////Skills & Interests
    const [skills, setSkills] = useState()
    const [interests, setInterests] = useState()
    


  return (
    <>
        <div className='editor-sidebar'>

            <Header />

            <PersonalInformation 
                handleName={(e) => handleInputChange(e,setFullName)}
                handleEmail={(e) => handleInputChange(e, setEmail)}
                handleAddress={(e) => handleInputChange(e, setAddress)}
                handlePhone={(e) => handleInputChange(e, setPhone)} 
            />

            <EducationForm 
                handleSchoolName={(e) => handleInputChange(e, setSchoolName)}
                handleSchoolLocation={(e) => handleInputChange(e, setSchoolLocation)}
                handleDegree={(e) => handleInputChange(e, setDegree)}
                handleGraduationDate={(e) => handleInputChange(e, setGraduationDate)}    
            />

            <SkillsForm 
                handleInterests={(e) => handleInputChange(e, setInterests)}
                handleSkills={(e) => handleInputChange(e, setSkills)}
            />

            <ExperienceForm 
                experienceEntries={experienceEntries} // Pass the experience entries
                setExperienceEntries={setExperienceEntries} // Function to update experience entries
            />

            

        </div>

        <div className="resume-container">
            <Resume 
                fullName={fullName}
                address={address}
                phone={phone}
                email={email}

                schoolName={schoolName}
                degree={degree}
                graduationDate={graduationDate}
                schoolLocation={schoolLocation}
                
                experienceEntries={experienceEntries}

                skills={skills}
                interests={interests}
            />
        </div>



    </>


  )
}

export default App
