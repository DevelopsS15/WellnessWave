import Head from "next/head";
import { ORG_NAME } from "../components/global";
import { Button } from "primereact/button";
import ContactForm from "../components/ContactForm";

export default function ContactUS() {
    return (
        <div>
            <Head>
                <title>Contact Us - {ORG_NAME}</title>
                <link rel="icon" href="/WellnessWave256x256.png" />
            </Head>
            <main style={{ height: "100vh" }}>
                <div className='max-w-30rem my-4 border-round-lg mx-auto p-5'>
                    <div className="text-3xl">Contact Us</div>
                    <div className="mb-4">Our team will respond to any inquiries you may have.</div>
                    <ContactForm />
                </div>
            </main>
        </div>
    );
}