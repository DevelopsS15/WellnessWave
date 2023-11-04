import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const ContactForm = () => <form>
    <InputWithLabel id="name" label="Name" isRequired />
    <div className='my-3'></div>
    <InputWithLabel id="email" label="Email" isRequired />
    <div className='my-3'></div>
    <InputWithLabel id="phone_number" label="Phone Number" />
    <div className='my-3'></div>
    <InputWithLabel id="organisation" label="Organisation" />
    <div className='mt-3'>
        <label className='block mb-1'>Message<span className="text-red-500">*</span></label>
        <InputTextarea className='w-full' autoResize rows={5} />
    </div>
    <div className="mb-2">
        <span className="text-red-500">*</span> Required
    </div>
    <Button severity='success' label='Submit' />
</form>

function InputWithLabel({ id, label, isRequired = false }) {
    return (<div className="flex flex-column gap-2">
        <label htmlFor={id}>{label}{isRequired && (<span className="text-red-500">*</span>)}</label>
        <InputText id={id} />
    </div>)
}

export default ContactForm;