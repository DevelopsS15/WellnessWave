import Image from "next/image";
import { ORG_NAME } from "./global";

const Footer = () => <footer className='w-full py-4 px-auto surface-200'>
    <div className='w-11 h-full m-auto flex align-items-center'>
        <div>
            <div className='mb-2 flex align-items-center'>
                <div><Image src={`/WellnessWave256x256.png`} width={48} height={48} /></div>
                <div className='font-bold ml-2 text-xl'>{ORG_NAME}</div>
            </div>
            <div><a className="text-900 hover:underline no-underline" href="https://www.google.com/maps/place/University+of+the+Fraser+Valley/@49.0390834,-122.2653571,13.5z/data=!4m6!3m5!1s0x54844abe35ff8cfd:0x6189b1763e4cf69!8m2!3d49.0286216!4d-122.2852935!16zL20vMDUzdnR4?entry=ttu"><i className="pi pi-map-marker"></i> 33844 King Road, V2S 7M8, Abbotsford, BC</a></div>
            <div className="my-2"><a className="text-900 hover:underline no-underline" href="tel:604-504-7441"><i className="pi pi-phone"></i> 604-504-7441</a></div>
            <div><a className="text-900 hover:underline no-underline" href="mailto:info@ufv.ca"><i className="pi pi-envelope"></i> info@ufv.ca</a></div>
        </div>
        <div className='w-full text-center'>
            Copyright &copy; WellnessWave {new Date().getFullYear()}. All Rights Reserved.
        </div>
    </div>
</footer>
export default Footer;