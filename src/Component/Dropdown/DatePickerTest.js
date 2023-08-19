import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePickerTest () {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    } 

    return (
        <>
            <Datepicker
                inputClassName="w-full border-b rounded-lg  font-normal bg-gray-100 placeholder:text-gray-500" 
                useRange={false}
                asSingle={true}
                value={value}
                onChange={handleValueChange}
            /> 
        </>
    )
}