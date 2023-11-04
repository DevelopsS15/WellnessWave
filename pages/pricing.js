import Head from "next/head";
import { ORG_NAME } from "../components/global";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {

    const featuresForBasic = ["Electronic Medical Records", "Appointment Calendar", "Expense Management", "Number Of Doctors: 25", "Number of Receptionists: 5", "Number of Clinics: 1"];
    const featuresForPro = ["Everything from Basic", "SLO/SAML Authentication", "24/7 Email Support", "100+ External Integrations", "Number Of Doctors: 250", "Number of Receptionists: 100", "Number of Clinics: 5"]
    const featuresForEnterprise = ["Everything from Pro", "Custom SLA", "Role-Based Permissions", "24/7 Call Support", "Number Of Doctors: Unlimited", "Number of Receptionists: Unlimited", "Number of Clinics: Unlimited"];

    const PricingBasic = {
        yearly: 200,
        monthly: 20
    }
    const PricingPro = {
        yearly: 1000,
        monthly: 100
    }

    const [isYearly, setIsYearly] = useState(true);
    const PricingModeText = isYearly ? "year" : "month";
    return (
        <div>
            <Head>
                <title>{ORG_NAME}</title>
                <link rel="icon" href="/WellnessWave256x256.png" />
            </Head>
            <main style={{ height: "100vh" }}>
                <div className="mt-6 mb-4 mx-auto text-center">
                    <h1 className="mb-2">Pricing</h1>
                    <div className="flex justify-content-center align-items-center gap-3 text-lg font-bold">
                        <div>Monthly</div>
                        <InputSwitch checked={isYearly} onChange={(e) => setIsYearly(e.value)} />
                        <div>Yearly</div>
                    </div>
                </div>
                <div className="flex justify-content-center gap-6">
                    <div className="max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
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
                        <Button className="w-full text-lg" size="small" label="Signup" />
                    </div>
                    <div className="max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
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
                        <Button className="w-full text-lg" size="small" label="Signup" />
                    </div>
                    <div className="max-w-30rem w-full flex flex-column gap-3 surface-200 p-3 border-round-md">
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
                            <Button className="w-full text-lg" severity="success" size="small" label="Contact Us" />
                        </Link>
                    </div>
                </div>



                {/* Photo by <a href="https://unsplash.com/@mdominguezfoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Martha Dominguez de Gouveia</a> on <a href="https://unsplash.com/photos/white-concrete-counter-stand-nMyM7fxpokE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
       */}
            </main>
        </div>
    );
}