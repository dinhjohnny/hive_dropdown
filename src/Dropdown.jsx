import { useState } from "react";
import dropdownArrow from '../src/assets/drop-down-arrow.png';

export default function Dropdown ({label, options, multi}) {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);


    // Handles selected option state
    const handleOptionChange = (optionValue) => {
        if (selectedOptions.includes(optionValue)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== optionValue));
        }
        else{
        setSelectedOptions([...selectedOptions, optionValue]);
        }
    }

    const handleSingleOptionChange = (optionValue) => {
        setSelectedOptions([optionValue]);
    }

    return (
        <>
        <div className="dropdown">
            {label}
            <div className={`dropdown_b ${isDropdownDisplayed && "button_opened"}`} onClick= {() => setIsDropdownDisplayed((prev) => !prev)}>
                
                {selectedOptions.length > 0 ? (
                <div className="container">
                    <p className="truncate_text">{selectedOptions.join(', ')}</p>
                    <img className="dropdown-arrow" src={dropdownArrow}></img>
                </div>

                ) : (
                    <div className="container">
                        <p>Select {label}</p>
                        <img className="dropdown-arrow" src={dropdownArrow}></img>
                    </div>
                )}
            </div>
            {/* Multi-select Component*/}
            {isDropdownDisplayed && multi && (
                <div className="multi_dropdown_content">
                    {options.map((option) => (
                            <div key={option} className="">
                                <label className={`option ${selectedOptions.includes(option) && "option_selected"}`} htmlFor={`input-${option}`}><input id={`input-${option}`} type="checkbox" checked={selectedOptions.includes(option)} value={option} onChange={()=> handleOptionChange(option)}></input>{option}</label>
                            </div>
                    ))}
                </div>
            )}
            {/* Single-select Component*/}
            {isDropdownDisplayed && !multi && (
                <div className="dropdown_content">
                    {options.map((option) => (
                            <div key={option} className={`option ${selectedOptions.includes(option) ? "option_selected" : "" }`}>
                                <div className="option_label" onClick={()=> handleSingleOptionChange(option)}>{option}</div>
                            </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}
               
               
               
               
               
               
