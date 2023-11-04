import Image from "next/image";
import { Button } from "primereact/button";
import { ORG_NAME } from "./global";
import Link from "next/link";

const NavBar = () => {
    return (<nav className='w-full surface-200' style={{ height: "64px" }}>
        <div className='w-11 h-full m-auto flex align-items-center'>
            <Link className="no-underline" href={"/"}>
                <div className='flex align-items-center mr-2'>
                    <div><Image src={`/WellnessWave256x256.png`} width={48} height={48} /></div>
                    <div className='text-primary-500 font-bold ml-2 text-xl'>{ORG_NAME}</div>
                </div>
            </Link>
            <div className='flex w-full'>
                <Link href={"/about"}>
                    <Button label="About" severity='primary' text />
                </Link>
                <Link href={"/faq"}>
                    <Button label="FAQ" severity='primary' text />
                </Link>
                <Link href={"/contactus"}>
                    <Button label="Contact Us" severity='primary' text />
                </Link>
                <Link href={"/pricing"}>
                    <Button label="Pricing" severity='primary' text />
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