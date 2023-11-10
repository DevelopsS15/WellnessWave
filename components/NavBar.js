import Image from "next/image";
import { Button } from "primereact/button";
import { ORG_NAME } from "./global";
import Link from "next/link";

const NavBar = () => {
    // style={{ height: "64px" }}
    return (<nav className='w-full surface-200 h-full py-3 lg:h-4rem lg:py-0' >
        <div className='w-11 h-full m-auto flex flex-column lg:flex-row align-items-center'>
            <Link className="no-underline" href={"/"}>
                <div className='flex align-items-center mr-2'>
                    <div><Image src={`/WellnessWave256x256.png`} width={48} height={48} /></div>
                    <div className='text-primary-500 font-bold ml-2 text-xl'>{ORG_NAME}</div>
                </div>
            </Link>
            <div className='grid md:flex justify-content-center w-full'>
                <Link href={"/about"}>
                    <Button className="w-full" label="About" severity='primary' text />
                </Link>
                <Link href={"/contactus"}>
                    <Button className="w-full" label="Contact Us" severity='primary' text />
                </Link>
                <Link href={"/faq"}>
                    <Button className="w-full" label="FAQ" severity='primary' text />
                </Link>
                <Link href={"/pricing"}>
                    <Button className="w-full" label="Pricing" severity='primary' text />
                </Link>
            </div>
            <div className='flex gap-2'>
                <Button label="Login" severity='success' />
                <Button label="Signup" />
            </div>
        </div>
    </nav>)
}
export default NavBar;