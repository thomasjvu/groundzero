import { useEffect } from "react"
import { themeChange } from "theme-change"
import { themesList } from '../../types/theme'

const ThemeChanger: React.FC = () => {

    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <select data-choose-theme className="px-3 py-2 border border-neutral-300 rounded text-black">
            {themesList.map((theme) => (
                <option key={theme.title} value={theme.value}>{theme.title}</option>
            ))}
        </select>
    )
}

export default ThemeChanger
