import { useState, useEffect } from "react"
import { supabase } from "../../supabaseClient"
import { UpdatedCompany } from "../../types/company"

const CompaniesAll: React.FC = (): JSX.Element => {

    const [companies, setCompanies] = useState<UpdatedCompany[]>([])

    useEffect(() => {
        fetchCompanies()
        // console.log("companies", companies)
    }, [])

    const fetchCompanies = async ()  => {
        const { data: { users }, error } = await supabase.auth.admin.listUsers()

        if (error) {
            console.error('Error:', error)
            // throw new Error(error)
        } 

        if (users) {

            const filteredCompanies = users.filter((user) => user.user_metadata.company === true)
            // setCompanies(filteredCompanies)

            const profileIds = filteredCompanies.map((company) => company.id)

            const { data: profiles, error: profilesError } = await supabase
                .from('profiles')
                .select('id, username, avatar_url')
                .in('id', profileIds)
            
            console.log('Profiles', profiles)

            if (profilesError) {
                console.error('ProfilesError')
            }

            if (profiles) {
                const updatedCompanies = filteredCompanies.map((company) => {
                    const profile = profiles.find((profile) => profile.id === company.id)
                    if (profile) {
                        return {
                            ...company,
                            profile: {
                                username: profile.username,
                                avatar_url: profile.avatar_url
                            }
                        }
                    }
                    return company as unknown as UpdatedCompany
                })
                console.log('Updated Companies', updatedCompanies)
                setCompanies(updatedCompanies as UpdatedCompany[])
            }

        }

    }


    return (
        <div>
            <h1>All Companies</h1>
                {companies.map((company) => 
                (
                    <div>
                        <h2 key={company.id}>{company.id}</h2>
                        <p>Username: {company.profile?.username}</p>
                        {company.profile.avatar_url && 
                            <img src={`${import.meta.env.VITE_SUPABASE_STORAGE}${company.profile?.avatar_url}`} />
                        }
                    </div>
                ))} 
        </div>
    )
}

export default CompaniesAll
