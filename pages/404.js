import Link from "next/link";
import { Image } from "primereact/image";

export default function Error404() {
    return <div className="w-full flex flex-column align-items-center justify-content-center" style={{
        minHeight: `90vh`
    }}>
        <div className="w-10 mx-auto text-center">
            <Image className="flex justify-content-center" src="/undraw_page_not_found_re_e9o6.svg" pt={{
                image: {
                    style: {
                        maxHeight: "384px"
                    },
                    className: "w-full"
                }
            }} />
            <h1 className="text-xl md:text-4xl">Error 404: Unable to find the page you are looking for.</h1>
            <div className="md:text-2xl">
                <Link className="text-primary-500" href="/">Lets go home</Link>
            </div>
        </div>
    </div>
}