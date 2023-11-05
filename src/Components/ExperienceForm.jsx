import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { MdWork } from 'react-icons/md'
import "../styles/formStyle.css";
import ExperienceEntry from "./ExperienceEntry";

function ExperienceForm({ experienceEntries, setExperienceEntries }) {
    const [isMinimized, setIsMinimized] = useState(true);
    const [currentExperience, setCurrentExperience] = useState({});

    const newEntry = () => {
        setExperienceEntries([...experienceEntries, currentExperience]);
        setCurrentExperience({});
        // setIsMinimized(true);
    };

    const onDelete = (indexToDelete) => {
        setExperienceEntries((prevEntries) =>
            prevEntries.filter((_, index) => index !== indexToDelete))
    }

    return (
        <div className="experience-form-container">
            <div className="category-title">
                <h2> <MdWork /> Professional Experience</h2>
                <button
                    className="minimize-btn"
                    onClick={() => setIsMinimized(!isMinimized)}
                >
                    {isMinimized ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
                </button>
            </div>

            <div className="entry-form-container" style={{ display: isMinimized ? "none" : "flex" }}>
                {experienceEntries.map((experience, index) => (
                    <ExperienceEntry
                        key={index}
                        experience={experience}
                        handleExperienceChange={(key, value) =>
                            setExperienceEntries((prevEntries) => {
                                const updatedEntries = [...prevEntries];
                                updatedEntries[index] = {
                                    ...updatedEntries[index],
                                    [key]: value,
                                };
                                return updatedEntries;
                            })
                        }
                        onDelete={() => onDelete(index)}
                    />
                ))}
                    <button className="new-exp-btn" onClick={newEntry}> + New Experience Entry</button>

                {/* <button onClick={addExperience}>Add Experience</button> */}
            </div>
            

            
        </div>
    );
}

export default ExperienceForm;