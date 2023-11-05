import InputField from "./InputField"
import { useState } from "react"
import { BiSolidDownArrow , BiSolidUpArrow  } from 'react-icons/bi'
import { BsFillPersonFill  } from 'react-icons/bs'
import "../styles/formStyle.css"

function PersonalInformation({handleName, handleEmail, handlePhone, handleAddress}) {
    const [isMinimized, setIsMinimized] = useState(false)


    return (
        <div className="personal-information-container forms">
            <div className="category-title">
                <h2> <BsFillPersonFill />  Personal Information</h2>
                <button className="minimize-btn" onClick={() => setIsMinimized(!isMinimized) }> {isMinimized ? <BiSolidDownArrow /> : <BiSolidUpArrow />}</button>
            </div>
            <div className="form-container" style={{ display: isMinimized ? 'none' : 'flex' }}>
                <InputField
                    label={'Full Name'}
                    placeholder={"Enter your Full Name"}
                    type={'text'}
                    id={"fullName"}
                    onChange={handleName}
                />
                <InputField
                    label={'Email'}
                    placeholder={"Enter your Email Address"}
                    type={'email'}
                    id={"email"}
                    onChange={handleEmail}
                />
                <InputField
                    label={'Phone Number'}
                    placeholder={"Enter your Phone Number"}
                    type={'number'}
                    id={"phone"}
                    onChange={handlePhone}
                />
                <InputField
                    label={'Address'}
                    placeholder={"City, State"}
                    type={'email'}
                    id={"email"}
                    onChange={handleAddress}
                />
            </ div>
        </div>
    )
}

export default PersonalInformation