import Link from "next/link";

export default function Error404() {
    return <div className="w-full flex flex-column align-items-center justify-content-center" style={{
        height: `90vh`
    }}>
        <h1>Error 404: Unable to find the page you are looking for.</h1>
        <div className="text-2xl">
            <Link className="text-primary-500" href="/">Lets go home</Link>
        </div>
    </div>
}