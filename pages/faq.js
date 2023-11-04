import Head from "next/head";
import { ORG_NAME } from "../components/global";
import { Accordion, AccordionTab } from 'primereact/accordion';
import Link from "next/link";

export default function FAQPage() {

    const AccordionFAQ = [{
        question: `What is a patient management system?`,
        answer: `A Patient Management System (PMS) is a tool that streamlines processes within a medical practice or hospital. 
        Our system can schedule appointments, evaluations, treatment, and discharges. 
        Save time for your staff and patients through electronic forms, online payment processing, email/SMS notifications and more.`
    }, {
        question: `How can a patient management system benefit my healthcare practice?`,
        answer: `While ${ORG_NAME} manages the repetitive and time consuming tasks, your healthcare practice can focus on giving your patients the best experience, all of which saves time and money.`
    }, {
        question: `Can ${ORG_NAME} be customized to our specific needs?`,
        answer: `Our BASIC and PRO plans have several features to provide flexibility in the ways you use our system. 
        If you require more customizability, contact us and we can try arrange a solution through our ENTERPRISE plan.`
    }, {
        question: `What security measures are in place to protect patient data in the system?`,
        answer: `Our team has carefully constructed ${ORG_NAME} to implement the latest security standards, including HIPPA and GDRP, so that you and your patients data is secure. 
        We continously test our systems with third-party cybersecurity specialists and perform bi-annually security audits.`
    }, {
        question: `Is there a mobile app or web portal for patients to access their own information?`,
        answer: `Your patients can visit our website and with a ${ORG_NAME} account, they can view their information. 
        While there is no mobile application, our website is responsive to all types of devices.`
    }, {
        question: `Can the system be integrated with other healthcare software or third-party applications?`,
        answer: `Of course! Whether you have other healthcare software or are looking to transfer over to ${ORG_NAME}, we've got you covered. 
        If you think there is an integration we should add, feel free to contact us.`
    }]

    return (
        <div>
            <Head>
                <title>Frequently Asked Questions - {ORG_NAME}</title>
                <link rel="icon" href="/WellnessWave256x256.png" />
            </Head>
            <main className="mt-6" style={{ height: "100vh" }}>
                <div className="mx-auto w-10">
                    <div className="text-center mb-4">
                        <h1>Frequently Asked Questions</h1>
                        <div>We all have questions. Here are the most common ones.</div>
                    </div>
                    <Accordion>
                        {AccordionFAQ.map((faq, index) => <AccordionTab key={index} header={faq.question}>{faq.answer || "Waiting to be answered"}</AccordionTab>)}
                    </Accordion>
                    <div className="text-center mt-4">
                        Don't see your question here? <Link className="text-primary-500 no-underline hover:underline" href={"/contactus"}>Contact Us</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}