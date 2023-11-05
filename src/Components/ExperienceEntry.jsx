import React, { useState } from "react";
import InputField from './InputField';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import "../styles/formStyle.css";

function ExperienceEntry({experience, handleExperienceChange, onDelete}) {
    const [isMinimized, setIsMinimized] = useState(false);

    // const createUniqueKey = () => {
    //     return Date.now().toString()
    // }

    // const uniqueKey = createUniqueKey()
    // console.log(uniqueKey)

    // const onDelete = (keyToDelete) => {
    //     setExperienceEntries((prevEntries) =>
    //         prevEntries.filter((experience) => experience.key !== keyToDelete) )
    // }  

    return (
        <div className="experience-entry-form">
            <div className="entry-title title">
                <h3>• Experience Entry</h3>
                <button className="minimize-btn" onClick={() => setIsMinimized(!isMinimized)}>
                    {isMinimized ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
                </button>
            </div>

            <div className="entry form-container" style={{ display: isMinimized ? 'none' : 'flex' }}>

                <InputField
                    label="Company Name"
                    placeholder="Enter Company Name"
                    type="text"
                    id="company-name"
                    value={experience.company || ""}
                    onChange={(e) => handleExperienceChange("company", e.target.value)}
                />

                <InputField
                    label="Position"
                    placeholder="Enter Position Title"
                    type="text"
                    id="position-title"
                    value={experience.positionTitle || ""}
                    onChange={(e) => handleExperienceChange("positionTitle", e.target.value)}
                />
                <span className="start-end-date-form">
                    <InputField
                        label="Start Date"
                        placeholder="Month Year"
                        type="text"
                        id="start-date-job"
                        value={experience.startDateJob || ""}
                        onChange={(e) => handleExperienceChange("startDateJob",e.target.value)}
                    />
                    <InputField
                        label="End Date"
                        placeholder="Month Year"
                        type="text"
                        id="end-date-job"
                        value={experience.endDateJob || ""}
                        onChange={(e) => handleExperienceChange("endDateJob",e.target.value)}
                    />
                </span>
                <InputField
                    label="Location"
                    placeholder="City, State"
                    type="text"
                    id="company-location"
                    value={experience.companyLocation || ""}
                    onChange={(e) => handleExperienceChange("companyLocation",e.target.value)}
                />
                <InputField
                    label="Description"
                    placeholder="Enter Description"
                    type="textarea"
                    id="description-job"
                    value={experience.descriptionJob || ""}
                    onChange={(e) => handleExperienceChange("descriptionJob",e.target.value)}
                />

                <button className="delete-entry-btn" onClick={onDelete}> Delete Entry</button>
            </div>
        </div>
    );
}

export default ExperienceEntry;