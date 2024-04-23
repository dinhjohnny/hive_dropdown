import { useState, useEffect, useRef } from "react";
import dropdownArrow from '../src/assets/drop-down-arrow.png';
import upArrow from '../src/assets/up-arrow.png';

export default function Dropdown ({label, options, multi_select}) {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const dropdownRef = useRef(null);


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

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownDisplayed(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    { /* Uncomment to view options state
        useEffect( () => {
            console.log(selectedOptions);
        }, [selectedOptions])
    */ }
    return (
        <>
        <div className="dropdown" ref={dropdownRef}>
            <p className={"label " + (isDropdownDisplayed ? "label_colored" : "")}>{label}</p>
            {/* Dropdown button */}
            <div className={"dropdown_b " + (isDropdownDisplayed ? "button_opened" : "")} onClick= {() => setIsDropdownDisplayed((prev) => !prev)}>
                
                {selectedOptions.length > 0 ? (
                <div className="container">
                    <p className="truncate_text">{selectedOptions.join(', ')}</p>
                    {isDropdownDisplayed? <img className="dropdown-arrow" src={upArrow}></img> : <img className="dropdown-arrow" src={dropdownArrow}></img>}
                </div>

                ) : (
                    <div className="container">
                        <p>Select {label}</p>
                        {isDropdownDisplayed? <img className="dropdown-arrow" src={upArrow}></img> : <img className="dropdown-arrow" src={dropdownArrow}></img>}
                    </div>
                )}
            </div>
            {/* Multi-select Component*/}
            {isDropdownDisplayed && multi_select && (
                <div className="multi_dropdown_content">
                    {options.map((option) => (
                            <div key={option} className="">
                                <label className={"option " + (selectedOptions.includes(option) ? "option_selected" : "")} htmlFor={`input-${option}`}><input id={`input-${option}`} type="checkbox" checked={selectedOptions.includes(option)} value={option} onChange={()=> handleOptionChange(option)}></input>{option}</label>
                            </div>
                    ))}
                </div>
            )}
            {/* Single-select Component*/}
            {isDropdownDisplayed && !multi_select && (
                <div className="dropdown_content">
                    {options.map((option) => (
                            <div key={option} className="">
                                <div className={"option " + (selectedOptions.includes(option) ? "option_selected" : "" )} onClick={()=> handleSingleOptionChange(option)}>{option}</div>
                            </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}
               
               
               
               
               
               
