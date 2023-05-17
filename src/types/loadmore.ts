import { Dispatch, SetStateAction } from "react"

export interface LoadMore {
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
    setPage?: Dispatch<SetStateAction<number>>
}
