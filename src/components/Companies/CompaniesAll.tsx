import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UpdatedCompany } from '../../types/company';
import IconTwitter from '../Icons/IconTwitter';
import IconLinkedin from '../Icons/IconLinkedin';
import IconWebsite from '../Icons/IconWebsite';
import { fetchCompanies } from '../../helpers/fetchCompanies';

const CompaniesAll: React.FC = (): JSX.Element => {
    const [companies, setCompanies] = useState<UpdatedCompany[]>([]);

    useEffect(() => {
        fetchCompanies()
            .then((data) => setCompanies(data))
            .catch((error) => console.error(error));
        // console.log("companies", companies)
    }, []);

    return (
        <div>
            <h1 className="mb-10 border-b-2 font-display text-5xl">All Companies</h1>
            <div className="flex w-full gap-5">
                {companies.map((company) => (
                    <Link
                        to={company.id}
                        key={company.id}
                        className="flex w-1/3 flex-col gap-5  rounded border p-10 font-mono hover:border-primary">
                        {company.profile.avatar_url && (
                            <img
                                src={`${import.meta.env.VITE_SUPABASE_STORAGE}${company.profile.avatar_url}`}
                                width={50}
                                height={50}
                                className="rounded"
                            />
                        )}
                        <h2 className="font-display text-4xl">{company.profile.username}</h2>
                        <div id="company-links" className="flex justify-end gap-2">
                            {company.profile.twitter && (
                                <IconTwitter width={15} height={15} url={company.profile?.twitter} />
                            )}
                            {company.profile.linkedin && (
                                <IconLinkedin width={15} height={15} url={company.profile?.linkedin} />
                            )}
                            {company.profile.website && (
                                <IconWebsite width={15} height={15} url={company.profile?.website} />
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CompaniesAll;
