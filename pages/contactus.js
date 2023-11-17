import Head from "next/head";
import { ORG_NAME } from "../components/global";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact Us - {ORG_NAME}</title>
                <link rel="icon" href="/WellnessWave256x256.png" />
            </Head>
            <main style={{ minHeight: "100vh" }}>
                <div className='w-10 max-w-30rem my-4 border-round-lg mx-auto'>
                    <div className="text-3xl">Contact Us</div>
                    <div className="mb-4">Our team will respond to any inquiries you may have.</div>
                    <ContactForm />
                </div>
            </main>
        </>
    );
}