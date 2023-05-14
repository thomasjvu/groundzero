import { useEffect } from "react"
import { themeChange } from "theme-change"

const ThemeChanger: React.FC = () => {

    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <select data-choose-theme className="px-3 py-2 border border-neutral-300 rounded">
            <option value="">Default</option>
            <option value="gzo">Ground Zero</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="garden">Garden</option>
            <option value="cyberpunk">Cyberpunk</option>
        </select>
    )
}

export default ThemeChanger
