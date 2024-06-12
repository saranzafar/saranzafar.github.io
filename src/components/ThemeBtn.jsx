import React, { useState } from 'react'
import useTheme from '../context/theme'

function ThemeBtn() {

    const { darkTheme, lightTheme } = useTheme()
    const [data, setData] = useState("Dark")

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
            setData("Light")
        }
        else {
            lightTheme()
            setData("Dark")
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
            />
            <div className="w-11 h-6 bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm text-secondary font-bold dark:text-white">{data} Theme</span>
        </label>
    )
}

export default ThemeBtn