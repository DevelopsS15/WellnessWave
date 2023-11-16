import Image from "next/image";
import { ORG_ADDRESS, ORG_EMAIL, ORG_NAME, ORG_PHONE_NUMBER } from "./global";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import Link from "next/link";

const Footer = () => <footer className='w-full py-4 px-auto surface-200'>
    <div className='w-11 h-full m-auto flex flex-column lg:flex-row gap-4 align-items-center'>
        <div className="text-center lg:text-left">
            <div className='mb-2 flex justify-content-center lg:justify-content-start align-items-center'>
                <div><Image src={`/WellnessWave256x256.png`} width={48} height={48} /></div>
                <div className='font-bold ml-2 text-xl'>{ORG_NAME}</div>
            </div>
            <div><a className="text-900 hover:underline no-underline" target="_blank" href="https://www.bing.com/maps?osid=f6a21ca6-aea5-41bc-83de-c1e2c50b2c8e&cp=49.260486~-123.118999&lvl=16.80438&pi=0&imgid=c8162664-475c-407f-b60c-4bd2efdabd3b&v=2&sV=2&form=S00027"><i className="pi pi-map-marker"></i> {ORG_ADDRESS}</a></div>
            <div className="my-2"><a className="text-900 hover:underline no-underline" href="tel:604-504-7441"><i className="pi pi-phone"></i> {ORG_PHONE_NUMBER}</a></div>
            <div><a className="text-900 hover:underline no-underline" href="mailto:info@ufv.ca"><i className="pi pi-envelope"></i> {ORG_EMAIL}</a></div>
        </div>
        <div className='w-full text-center'>
            <div>
                Copyright &copy; WellnessWave {new Date().getFullYear()}. All Rights Reserved.
            </div>
            <div className="mt-2">
                {ORG_NAME} would like to recognize and acknowledge that our headquarters are situated in the traditional territory of the Chemainus First Nation (Stz'uminus) peoples.
            </div>
            <div className="flex justify-content-center">
                <FooterMedia url="https://ufv.ca/" icon="pi-globe" />
                <FooterMedia url="https://www.facebook.com/goUFV/" icon="pi-facebook" />
                <FooterMedia url="https://twitter.com/goUFV" icon="pi-twitter" />
                <FooterMedia url="https://www.instagram.com/goUFV/" icon="pi-instagram" />
            </div>
            <div><Link className="flex gap-1 justify-content-center align-items-center no-underline" href={"/status"}><i className={"pi pi-check-circle font-bold text-green-500"} /><span className="text-primary-500 underline">Status</span></Link></div>
        </div>
    </div>
</footer>
export default Footer;

function FooterMedia({ url, icon }) {
    return (<a href={url} target="_blank">
        <Button className="w-3rem h-3rem" pt={{
            icon: {
                className: "text-3xl"
            }
        }} rounded icon={classNames("pi", icon)} text />
    </a>)
}