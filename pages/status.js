import Head from "next/head";
import { ORG_NAME } from "../components/global";
import { classNames } from "primereact/utils";
import { Tooltip } from "primereact/tooltip";

export default function StatusPage() {
    return (<>
        <Head>
            <title>Status - {ORG_NAME}</title>
            <link rel="icon" href="/WellnessWave256x256.png" />
        </Head>
        <main style={{ height: "100vh" }}>
            <div className='w-10 my-4 border-round-lg mx-auto' style={{
                maxWidth: "720px"
            }}>
                <div className="text-3xl">Status</div>
                <div className="mb-4">Here you can view the status of all our services</div>
                <div className="flex flex-column gap-3">
                    <ServiceStatus name={"Website"} percent={99.97} downtimes={[3, 65, 89]} max={120} />
                    <ServiceStatus name={"Mobile"} percent={99.92} downtimes={[5, 34, 65, 76, 99]} max={120} />
                    <ServiceStatus name={"Customer Service"} percent={99.93} downtimes={[23, 48, 53, 78]} max={120} />
                    <ServiceStatus name={"Patient API"} percent={99.95} downtimes={[6, 8, 45, 88]} max={60} />
                    <ServiceStatus name={"HealthCare Provider API"} percent={99.99} downtimes={[68]} max={10} />
                </div>
            </div>
        </main>
    </>)
}

function generateRandomNumber(max = 300) {
    return Math.floor(Math.random() * max) + 1;
}

function ServiceStatus({ name, percent, downtimes, max }) {
    const totalHistory = 100;
    const daySince = (index) => new Date(new Date().setDate(new Date().getDate() - (totalHistory - index))).toLocaleString("en-US");
    const isDowntime = (index) => downtimes.includes(index);
    const getDowntimeMessage = (index) => `${daySince(index)}\n${isDowntime(index) ? `${index % 2 === 0 ? "Unexpected Interruption" : "Scheduled Maintenance"}\n${generateRandomNumber(max)} minutes` : "No downtime"}`;
    return (<div>
        <Tooltip target={".tooltip-status-day"} />
        <div className="flex mb-1 font-bold">
            <div className="flex-1"><i className={classNames("pi pi-check-circle", isDowntime(totalHistory - 1) ? "text-red-500" : "text-green-500")} /> {name}</div>
            <div className={classNames(percent < 99 ? (percent < 85 ? "text-red-500" : "text-yellow-500") : "text-green-500")}>{percent}% uptime</div>
        </div>
        <div className="flex" style={{
            gap: "2px"
        }}>{Array(totalHistory).fill(undefined).map((e, index) => <div key={index} data-pr-tooltip={getDowntimeMessage(index)} className={classNames("w-full", "tooltip-status-day", isDowntime(index) ? "bg-red-500" : "bg-green-500", index < totalHistory * 0.50 ? "hidden md:flex" : (index < totalHistory * 0.75 ? "hidden sm:flex" : undefined))} style={{
            height: "1.5rem"
        }}></div>)}</div>
    </div >)
}