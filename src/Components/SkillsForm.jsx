import { useState } from "react"
import InputField from './InputField'
import { BiSolidDownArrow , BiSolidUpArrow  } from 'react-icons/bi'
import { GiSkills  } from 'react-icons/gi'


function SkillsForm({handleInterests, handleSkills}) {
    const [isMinimized, setIsMinimized] = useState(true)

    return (
        <div className="skills-form-container" >
            <div className="category-title">
                <h2><GiSkills /> Skills and Interests</h2>
                <button className="minimize-btn" onClick={() => setIsMinimized(!isMinimized) }> {isMinimized ? <BiSolidDownArrow /> : <BiSolidUpArrow />}</button>
            </div>

            
            <div className="form-container" style={{ display: isMinimized ? 'none' : 'flex' }}>
                <InputField
                    label="Skills"
                    placeholder="Enter SKills"
                    type="textarea"
                    id="skills"
                    onChange={handleSkills}
                />
                <InputField
                    label="Interests"
                    placeholder="Enter your interests"
                    type="textarea"
                    id="interest"
                    onChange={handleInterests}
                />
               
            </div>
        </div>
  )
}

export default SkillsForm