import { useState } from "react"
import InputField from './InputField'
import { BiSolidDownArrow , BiSolidUpArrow  } from 'react-icons/bi'
import { RiGraduationCapFill } from 'react-icons/ri'

function EducationForm({handleSchoolName, handleDegree, handleGraduationDate, handleSchoolLocation}) {
    const [isMinimized, setIsMinimized] = useState(true)

    return (
        <div className="education-form-container" >
            <div className="category-title">
                <h2><RiGraduationCapFill /> Education</h2>
                <button className="minimize-btn" onClick={() => setIsMinimized(!isMinimized) }> {isMinimized ? <BiSolidDownArrow /> : <BiSolidUpArrow />}</button>
            </div>

            
            <div className="form-container" style={{ display: isMinimized ? 'none' : 'flex' }}>
                <InputField
                    label="School"
                    placeholder="Enter School Name"
                    type="text"
                    id="school-name"
                    onChange={handleSchoolName}
                />
                <InputField
                    label="Degree"
                    placeholder="Enter your Degree"
                    type="text"
                    id="degree"
                    onChange={handleDegree}
                />
                <InputField
                    label="Graduation Date"
                    placeholder="Month/Year"
                    type="text"
                    id="school-location"
                    onChange={handleGraduationDate}
                />
                
                <InputField
                    label="Location"
                    placeholder="School Location (City, State)"
                    type="text"
                    id="school-location"
                    onChange={handleSchoolLocation}
                />
            </div>
       



        </div>
    )
    }

export default EducationForm