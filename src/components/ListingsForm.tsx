import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { categoryList } from "../types/category";


// type Listing = {
//     location: Location
//     setting: Setting
//     contract: Contract
// }

type Location = {
    name: string;
    value: string;
}

const locationList: Location[] = [
    { name: "New York", value: "new-york" },
    { name: "London", value: "london" },
    { name: "Paris", value: "paris" },
    { name: "Tokyo", value: "tokyo" },
    { name: "Boston", value: "boston" },
]

type Setting = {
    name: string;
    value: string;
}

const settingList: Setting[] = [
    { name: "Remote", value: "remote" },
    { name: "Hybrid", value: "hybrid" },
    { name: "On-Site", value: "on-site" },
]

type Contract = {
    name: string;
    value: string;
}

const contractList: Contract[] = [
    { name: "Full Time", value: "full-time" },
    { name: "Part Time", value: "part-time" },
    { name: "Contract", value: "contract" },
    { name: "Temporary", value: "temporary" },
    { name: "Freelance", value: "freelance" },
    { name: "Internship", value: "internship" },
    { name: "Externship", value: "externship" },
]

const ListingsForm: React.FC = () => {
    const [listing, setListing] = useState({ title: "", content: "", category: "", location: "", contract: "", setting: "", terms: false });
    const { title, content, category, location, contract, setting, terms } = listing;


    async function createListing() {

        if (!terms || !title || !content ) return

        try {
            await supabase.from("listings").insert([{ title, content, category, location, contract, setting, terms }]).single();
            setListing({ title: "", content: "", category: "", location: "", contract: "", setting: "", terms: false });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form className="new-listing-form flex flex-col gap-5" onSubmit={(e) => {
                e.preventDefault()
                createListing()
            }}>
                <div className="formGroup">
                    <label htmlFor="listing-title">Title</label>
                    <input
                        id="listing-title"
                        className="input input-bordered w-full"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setListing({ ...listing, title: e.target.value })}
                        required={true}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="listing-content">Content</label>
                    <ReactQuill
                        id="listing-content-quill"
                        className="w-full font-mono"
                        placeholder="Job description content goes here..."
                        value={content}
                        theme="bubble"
                        onChange={(e) => setListing({ ...listing, content: e})}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="listing-category">Category</label>
                    <select
                        id="listing-category"
                        className="input input-bordered w-full"
                        value={category}
                        onChange={(e) => setListing({ ...listing, category: e.target.value })}
                        required={true}
                    >
                        <option value="">Select Category...</option>
                        {categoryList.map((cat) => (
                            <option key={cat.value} value={cat.value}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label htmlFor="listing-location">Location</label>
                    <select
                        id="listing-location"
                        className="input input-bordered w-full"
                        value={location}
                        onChange={(e) => setListing({ ...listing, location: e.target.value })}
                    >
                        <option value="">Select Location...</option>
                        {locationList.map((loc) => (
                            <option key={loc.value} value={loc.value}>{loc.name}</option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label htmlFor="listing-contract">Contract</label>
                    <select
                        id="listing-contract"
                        className="input input-bordered w-full"
                        value={contract}
                        onChange={(e) => setListing({ ...listing, contract: e.target.value })}
                    >
                        <option value="">Select Contract...</option>
                        {contractList.map((contract) => (
                            <option key={contract.value} value={contract.value}>{contract.name}</option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label htmlFor="listing-setting">Setting</label>
                    <select
                        id="listing-setting"
                        className="input input-bordered w-full"
                        value={setting}
                        onChange={(e) => setListing({ ...listing, setting: e.target.value })}
                    >
                        <option value="">Select Setting...</option>
                        {settingList.map((setting) => (
                            <option key={setting.value} value={setting.value}>{setting.name}</option>
                        ))}
                    </select>
                </div>
                <div className="formGroup flex justify-between items-center">
                    <label htmlFor="listing-terms">I agree with the <Link to="/tos">Terms of Service</Link></label>
                    <input type="checkbox" checked={terms} className="checkbox" onChange={(e) => setListing({...listing, terms: e.target.checked})} required />
                </div>
                <button className="btn w-full font-mono">🔥 Create Listing</button>
            </form>
        </div>
    );
};

export default ListingsForm;
