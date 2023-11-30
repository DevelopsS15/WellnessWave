import Head from "next/head";
import { ORG_NAME } from "../components/global";
import { Accordion, AccordionTab } from 'primereact/accordion';
import Link from "next/link";

const title = `Frequently Asked Questions - ${ORG_NAME}`;
export default function FAQPage() {

    const AccordionFAQ = [{
        question: `What is a Patient Engagement Platform (P.E.P)?`,
        answer: <div>
            <div>A patient engagement platform (P.E.P) is a digital application that patients can use to access their electronic medical record via smartphone, tablet or computer (1).
                Our system can schedule appointments, evaluations, treatment, and discharges. Medical Professionals can monitor the patient remotely with in-app messaging & video calling and request pain scores from their patient.
                Save time for your staff and patients through electronic forms, online payment processing, email/SMS notifications and more.</div>
            <a className="mt-4 text-xs text-primary-500" href="https://www.aahks.org/wp-content/uploads/2018/11/AAHKS-white-paper-Patient-Engagement-Platforms.pdf" target="_blank">1. Source: AAHKS Digital Health Committee</a>
        </div>
    }, {
        question: `How can a Patient Engagement Platform benefit my healthcare practice?`,
        answer: `With ${ORG_NAME}, your healthcare practice can benefit from remote guidance and monitoring so less in-person visits are required. 
        Data collection and metrics of patients can provide valuable insight on a variety of benchmarks for patients, and healthcare professionals. 
        Your patients will become more involved with their healthcare, thus improving their connection towards healthcare professionals and enhancing the overall experience.`
    }, {
        question: `Can ${ORG_NAME} be customized to our specific needs?`,
        answer: `The Patient plans offer features which allow for limited flexibility. Our BASIC and PRO plans for HealthCare Providers have several features to provide flexibility in the ways you use our system. 
        If your healthcare practice requires more customization options, contact us, and we can try to arrange a solution through our ENTERPRISE plan.`
    }, {
        question: `I'm unable to log in or visit to ${ORG_NAME}`,
        answer: <div>
            {ORG_NAME} may be under scheduled maintenance or unexpected downtime. You can check our <Link className="text-primary-500" href={"/status"}>status page</Link><br /><br />
            If you are a patient, you can email <a className="text-primary-500" href={`mailto:support@${ORG_NAME.toLowerCase()}.ca`}>support@{ORG_NAME.toLowerCase()}.ca</a><br />
            If you are a medical professional, please contact your medical employer directly.
        </div>
    }, {
        question: `Do you offer deals or discounts for non-profit healthcare providers?`,
        answer: <div>Yes! We truly value the work that non-profits contribute to provide healthcare for those who need it most. <Link className="text-primary-500" href={"/contactus"}>Contact us</Link> for assistance.</div>
    },
    {
        question: `What security measures are in place to protect patient data in the system?`,
        answer: <>
            Our team has carefully constructed {ORG_NAME} to implement the latest security standards, including <a className='text-primary-500' href='https://www.hhs.gov/hipaa/index.html' target='_blank'>Health Insurance Portability and Accountability Act (HIPAA)</a> and <a className='text-primary-500' href='https://gdpr-info.eu/' target='_blank'>General Data Protection Regulation (GDPR)</a>, so that you and your patients data is secure.
            All payments are processed in compliance with <a className='text-primary-500' href='https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard' target='_blank'>Payment Card Industry Data Security Standard (PCI DSS) Level 1</a>. We continuously test our systems with third-party cybersecurity specialists and perform bi-annually security audits.
        </>
    }, {
        question: `Can the system be integrated with other healthcare software or third-party applications?`,
        answer: <div>Of course! Whether you have other healthcare software or are looking to transfer over to {ORG_NAME}, we have you covered.
            If you think there is an integration we should add, feel free to <Link className="text-primary-500" href={"/contactus"}>contact us.</Link></div>
    }]

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/WellnessWave256x256.png" />
            </Head>
            <main className="mt-6" style={{ minHeight: "100vh" }}>
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
        </>
    );
}