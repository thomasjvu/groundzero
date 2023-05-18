import { AuthError } from "@supabase/supabase-js";

export interface SupabaseBtnProps {
    text: string;
    onClick: () => Promise<{error: AuthError | null}>
}
