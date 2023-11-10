import Head from "next/head";
import { ORG_NAME } from "../components/global";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import Link from "next/link";
import { Divider } from "primereact/divider";

export default function Pricing() {

    const featuresForStarter = [
        "Electronic Medical Records",
        "Appointment Calendar",
        "Monthly Reports",
        "Email Notifications",
        "Push Notifications (via app)",
        "Email Support",
    ];
    const featuresForAdvanced = [
        "Everything from Starter",
        "Daily Reports",
        "SSO Authentication",
        "SMS Notifications",
        "Phone Support"
    ]
    const featuresForBasic = ["Electronic Medical Records",
        "99.9% Guaranteed Uptime",
        "Appointment Calendar",
        "Expense Management",
        "Email Notifications",
        "SMS Notifications (Market Rate)",
        "Number Of Doctors: 25",
        "Number of Receptionists: 5",
        "Number of Clinics: 1",
        "1,000 Free Patients (+$0.05/patient/month)"];
    const featuresForPro = ["Everything from Basic",
        "99.95% Guaranteed Uptime",
        "1,000 SMS included",
        "SLO/SAML Authentication",
        "Email Support",
        "100+ External Integrations",
        "Number Of Doctors: 250",
        "Number of Receptionists: 100",
        "Number of Clinics: 5",
        "10,000 Free Patients (+$0.03/patient/month)"
    ]
    const featuresForEnterprise = ["Everything from Pro",
        "99.99% Guaranteed Uptime",
        "Custom SLA",
        "Role-Based Permissions",
        "24/7 Email Support",
        "24/7 Call Support",
        "Number Of Doctors: Unlimited",
        "Number of Receptionists: Unlimited",
        "Number of Clinics: Unlimited",
        "50,000 Free Patients (+$0.015/patient/month)"
    ];

    const PricingStarter = {
        yearly: 55,
        monthly: 5
    }
    const PricingAdvanced = {
        yearly: 220,
        monthly: 20
    }
    const PricingBasic = {
        yearly: 800,
        monthly: 75
    }
    const PricingPro = {
        yearly: 2750,
        monthly: 250
    }

    const [isYearly, setIsYearly] = useState(true);
    const PricingModeText = isYearly ? "year" : "month";
    return (
        <div>
            <Head>
                <title>{ORG_NAME}</title>
                <link rel="icon" href="/WellnessWave256x256.png" />
            </Head>
            <main style={{ minHeight: "100vh" }}>
                <div className="mt-6 mb-4 w-10 mx-auto text-center">
                    <h1 className="mb-2">Pricing</h1>
                    <div>We offer pricing for both patients and healthcare providers so everyone can benefit from {ORG_NAME}</div>
                </div>

                <Divider className="w-10 mx-auto" />

                <h1 className="text-center mb-2">Patients</h1>
                <div className="mb-2">
                    <PaymentInterval isYearly={isYearly} setIsYearly={setIsYearly} />
                </div>
                {/* flex-column align-items-center md:flex-row md:align-items-start  */}
                <div className="flex flex-column align-items-center lg:flex-row lg:align-items-stretch justify-content-center gap-6">
                    <div className="max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
                        <div className="text-center">
                            <div className="text-3xl font-bold">Starter</div>
                            <div className="text-2xl font-bold">${isYearly ? PricingStarter.yearly : PricingStarter.monthly}/{PricingModeText}</div>
                            <div>Experience the power of {ORG_NAME} with over 100+ supported healthcare providers</div>
                        </div>
                        <div className="flex-grow-1 flex flex-column gap-2">
                            {featuresForStarter.map((e, index) => <div key={index} className="flex gap-2">
                                <div className="pi pi-check"></div>
                                <div>{e}</div>
                            </div>)}
                        </div>
                        <div>
                            <div className="text-sm mb-1"><span className="text-red-500">*</span>Credit Card Required</div>
                            <Button className="w-full text-lg" size="small" label="Start 14-day Trial" />
                        </div>
                    </div>
                    <div className="max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
                        <div className="text-center">
                            <div className="text-3xl font-bold">Advanced</div>
                            <div className="text-2xl font-bold">${isYearly ? PricingAdvanced.yearly : PricingAdvanced.monthly}/{PricingModeText}</div>
                            <div>Get access to a wider range of features</div>
                        </div>
                        <div className="flex-grow-1 flex flex-column gap-2">
                            {featuresForAdvanced.map((e, index) => <div key={index} className="flex gap-2">
                                <div className="pi pi-check"></div>
                                <div>{e}</div>
                            </div>)}
                        </div>
                        <Button className="w-full text-lg" size="small" label="Get Started" />
                    </div>
                </div>

                <Divider className="w-10 mx-auto" />

                <h1 className="text-center mb-2">HealthCare Providers</h1>
                <div className="mb-2">
                    <PaymentInterval isYearly={isYearly} setIsYearly={setIsYearly} />
                </div>
                <div className="w-full grid justify-content-center gap-6 mt-2 mb-6">
                    {/* <div className="flex justify-content-center gap-6 mb-6"> */}
                    <div className="col-4 max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
                        <div className="text-center">
                            <div className="text-3xl font-bold">Basic</div>
                            <div className="text-2xl font-bold">${isYearly ? PricingBasic.yearly : PricingBasic.monthly}/{PricingModeText}</div>
                            <div>Experience some of our many features prior to upgrading</div>
                        </div>
                        <div className="flex-grow-1 flex flex-column gap-2">
                            {featuresForBasic.map((e, index) => <div key={index} className="flex gap-2">
                                <div className="pi pi-check"></div>
                                <div>{e}</div>
                            </div>)}
                        </div>
                        <div>
                            <div className="text-sm mb-1"><span className="text-red-500">*</span>Credit Card Required</div>
                            <Button className="w-full text-lg" size="small" label="Start 14-day Trial" />
                        </div>
                    </div>
                    <div className="col-4 max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
                        <div className="text-center">
                            <div className="text-3xl font-bold">Pro</div>
                            <div className="text-2xl font-bold">${isYearly ? PricingPro.yearly : PricingPro.monthly}/{PricingModeText}</div>
                            <div>Get access to a wider range of features</div>
                        </div>
                        <div className="flex-grow-1 flex flex-column gap-2">
                            {featuresForPro.map((e, index) => <div key={index} className="flex gap-2">
                                <div className="pi pi-check"></div>
                                <div>{e}</div>
                            </div>)}
                        </div>
                        <Button className="w-full text-lg" size="small" label="Get Started" />
                    </div>
                    <div className="col-4 max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
                        <div className="text-center">
                            <div className="text-3xl font-bold">Enterprise</div>
                            <div className="text-2xl font-bold">CUSTOM</div>
                            <div>Get early access to features and the fastest support</div>
                        </div>
                        <div className="flex-grow-1 flex flex-column gap-2">
                            {featuresForEnterprise.map((e, index) => <div key={index} className="flex gap-2">
                                <div className="pi pi-check"></div>
                                <div>{e}</div>
                            </div>)}
                        </div>
                        <Link href={"/contactus"}>
                            <Button className="w-full text-lg" severity="success" size="small" label="Contact Sales" />
                        </Link>
                    </div>
                </div>



                {/* Photo by <a href="https://unsplash.com/@mdominguezfoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Martha Dominguez de Gouveia</a> on <a href="https://unsplash.com/photos/white-concrete-counter-stand-nMyM7fxpokE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
       */}
            </main>
        </div>
    );
}


function PaymentInterval(props) {
    return (<div className="flex justify-content-center align-items-center gap-3 text-lg font-bold">
        <div>Monthly</div>
        <InputSwitch checked={props.isYearly} onChange={(e) => props.setIsYearly(e.value)} />
        <div>Yearly</div>
    </div>)
}