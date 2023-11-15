import { Image } from "primereact/image";
import { ORG_NAME, ORG_PHONE_NUMBER_FORMATTED } from "./global";
import { Divider } from "primereact/divider";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";

const MobileAppPromo = () => <div className='text-xl mx-auto w-11 max-w-30rem mb-4 flex flex-column align-items-center text-center'>
    <div>
        <Image src='/undraw_mobile_user_re_xta4.svg' pt={{
            image: {
                style: {
                    maxHeight: "256px"
                },
                className: "w-full"
            }
        }} />
    </div>
    <div>Download the {ORG_NAME} app today.</div>
    <div className='mt-2'>
        <Image height='48px' src='/iphone_app_store.png' />
        <Image className='ml-2' height='48px' src="android_play_store.png" />
    </div>
    <Divider className='w-full my-1' align="center">OR</Divider>
    Get the link to your phone
    <div className="mt-2 p-inputgroup flex-1">
        <InputMask mask="(999) 999-9999" placeholder={ORG_PHONE_NUMBER_FORMATTED} />
        <Button label='Submit' className="p-button-primary" />
    </div>
</div>
export default MobileAppPromo;
