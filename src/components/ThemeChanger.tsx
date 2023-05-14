import { useEffect } from "react"
import { themeChange } from "theme-change"

interface Theme {
    title: string
    value: string
}

const themesList: Theme[] = [
    {title: "Default", value: ""},
    {title: "Ground Zero", value: "gzo"},
    {title: "Dark", value: "dark"},
    {title: "Light", value: "light"},
    {title: "Garden", value: "garden"},
    {title: "Cyberpunk", value: "cyberpunk"},
]

const ThemeChanger: React.FC = () => {

    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <select data-choose-theme className="px-3 py-2 border border-neutral-300 rounded">
            {themesList.map((theme) => (
                <option key={theme.title} value={theme.value}>{theme.title}</option>
            ))}
        </select>
    )
}

export default ThemeChanger
