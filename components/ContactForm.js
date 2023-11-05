import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { ORG_PHONE_NUMBER_FORMATTED } from "./global";

const ContactForm = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Sales', code: 'sales' },
        { name: 'Security', code: 'security' },
        { name: 'Feature Request', code: 'feature_request' },
        { name: 'Report bug', code: 'report_bug' },
        { name: 'Help/Questions', code: 'help' },
        { name: 'Other', code: 'other' },
    ];
    return (<form>
        <InputWithLabel id="name" label="Name" isRequired />
        <div className='my-3'></div>
        <InputWithLabel id="organisation" label="Organisation" />
        <div className='my-3'></div>
        <InputWithLabel id="email" label="Email" isRequired />
        <div className="flex flex-column gap-2 my-3">
            <label htmlFor={"phone_number"}>Phone Number</label>
            <InputMask mask="(999) 999-9999" placeholder={ORG_PHONE_NUMBER_FORMATTED} />
        </div>
        <div className="flex flex-column gap-2 my-3">
            <label htmlFor={"reasonForContact"}>Reason<span className="text-red-500">*</span></label>
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select reason..." />
        </div>
        <div className='mt-3'>
            <label className='block mb-1'>Message<span className="text-red-500">*</span></label>
            <InputTextarea className='w-full' autoResize rows={5} />
        </div>
        <div className="mb-2">
            <span className="text-red-500">*</span> Required
        </div>
        <Button severity='success' label='Submit' />
    </form>)
}

function InputWithLabel({ id, label, isRequired = false, placeholder = undefined }) {
    return (<div className="flex flex-column gap-2">
        <label htmlFor={id}>{label}{isRequired && (<span className="text-red-500">*</span>)}</label>
        <InputText id={id} placeholder={placeholder || label} />
    </div>)
}

export default ContactForm;