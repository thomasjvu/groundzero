import { useEffect, useState } from "react"
import { supabase } from '../supabaseClient'
import { Session } from "@supabase/supabase-js"

export const handleSession = (): Session | null => {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session }}) => {
            setSession(session)
        })
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return session
}
