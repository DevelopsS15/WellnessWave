import { Button } from 'primereact/button';
import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Image } from 'primereact/image';
import { InputTextarea } from 'primereact/inputtextarea';
import { ORG_NAME } from './global';
import { Tooltip } from 'primereact/tooltip';
import { ConfirmPopup } from 'primereact/confirmpopup';

export default function HelpChatOverlay() {
    const op = useRef(null);
    const ToggleOverlayPanel = (e) => op.current.toggle(e);
    const confirmDialogPopupRef = useRef(null);
    return (<>
        <OverlayPanel className='w-3' ref={op}>
            <div className='flex align-items-center'>
                <h1 className='w-full text-xl'>{ORG_NAME} Help Chat</h1>
                <Button className='w-2rem h-2rem p-2' size='small' icon="pi pi-times" rounded text onClick={ToggleOverlayPanel} />
            </div>
            <div className='flex flex-column gap-2'>
                <div className='flex gap-2'>
                    <Image width='32px' height='32px' src='/WellnessWave128x128.png' pt={{
                        image: {
                            className: "border-round"
                        }
                    }} />
                    <div className='bg-primary-100 p-2 border-round-bottom-xl border-round-right-xl'>Hello and welcome! How can we help you today?</div>
                </div>
                <div className='flex justify-content-end gap-2'>
                    <div className='bg-green-100 p-2 border-round-bottom-xl border-round-left-xl'>What is a patient management system?</div>
                </div>
                <div className='flex gap-2'>
                    <Image width='32px' height='32px' src='/WellnessWave128x128.png' pt={{
                        image: {
                            className: "border-round"
                        }
                    }} />
                    <div className='bg-primary-100 p-2 border-round-bottom-xl border-round-right-xl'>A Patient Management System (PMS) is a tool that streamlines processes within a medical practice or hospital.
                        Our system can schedule appointments, evaluations, treatment, and discharges.
                        Save time for your staff and patients through electronic forms, online payment processing, email/SMS notifications and more.</div>
                </div>
            </div>
            <div className="mt-2 p-inputgroup flex-1">
                <InputTextarea className='border-round-left-xl' autoResize placeholder='Ask a question' />
                <Button icon="pi pi-send" className="p-button-success" />
            </div>
        </OverlayPanel>
        <Tooltip target={"#helpchatquestionbutton"} position='left' content='If you need help, we are always here!' />
        <div id='helpchatquestionbutton' className='fixed' style={{
            zIndex: 1000,
            bottom: 80,
            right: 20,
        }}>
            <Button ref={confirmDialogPopupRef} rounded icon="pi pi-question" onClick={ToggleOverlayPanel} />
        </div>
    </>)
}