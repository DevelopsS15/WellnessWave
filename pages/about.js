import Head from "next/head";
import { ORG_NAME } from "../components/global";
import { Image } from "primereact/image";
import { Divider } from "primereact/divider";
import { Carousel } from "primereact/carousel";
import MobileAppPromo from "../components/MobileAppPromo";
import Link from "next/link";

const Investors = [
  {
    image: "/Investors/Joanne_MacLean.jpg",
    name: "Joanne MacLean",
    positionAndCompany: (
      <>
        President of the <br />
        University of the Fraser Valley
      </>
    ),
  },
  {
    name: `Mohammed Al Nakshabandi`,
    image: "/UFV_Logo.jpg",
    positionAndCompany: `Employee of UFV`,
  },
  {
    image: "ElonMusk.jpg",
    name: "Elon Musk",
    positionAndCompany: "CEO of Tesla, X, & SpaceX",
  },
  {
    image: "/Investors/BillGates.jpg",
    name: "Bill Gates",
    positionAndCompany: "Former CEO of Microsoft",
  },
  {
    image: "/Investors/JeffBezos.jpg",
    name: "Jeff Bezos",
    positionAndCompany: "Founder of Amazon",
  },
  {
    image: "WalterWhite.jpg",
    name: "Walter White",
    positionAndCompany: (
      <>
        Co-Founder of <br />
        Gray Matter Technologies
      </>
    ),
  },
  {
    image: "/Investors/MarkZuckerberg.jpg",
    name: "Mark Zuckerberg",
    positionAndCompany: "CEO of Facebook",
  },
  {
    url: "https://coursediscovery.ca/",
    image: "/Investors/CourseDiscovery.svg",
    name: "CourseDiscovery",
    positionAndCompany: <>Streamlining the UFV experience</>,
  },
];

const CustomerInvestor = {
  image: "/WellnessWave128x128.png",
  name: "You",
  positionAndCompany: "Customer",
};

const title = `About - ${ORG_NAME}`;
export default function About() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/WellnessWave256x256.png" />
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <div className="w-full mx-auto mt-8">
          <div className="w-full md:w-8 mx-auto flex flex-column lg:flex-row lg:gap-4 align-items-center">
            <div className="w-full lg:flex-1 flex flex-column align-items-center">
              <Image
                className="flex justify-content-center"
                src="/MedicalAboutUs.jpg"
                pt={{
                  image: {
                    className: "w-10 lg:w-full",
                    style: {
                      borderRadius: "0.25em 1em 0.25em 1em",
                    },
                  },
                }}
              />
              <div className="text-xs">
                Photo by{" "}
                <a
                  className="text-primary-500"
                  target="_blank"
                  href="https://www.istockphoto.com/portfolio/monkeybusinessimages"
                >
                  monkeybusinessimages
                </a>{" "}
                from{" "}
                <a
                  className="text-primary-500"
                  target="_blank"
                  href="https://www.istockphoto.com/photo/smiling-medical-team-standing-together-outside-a-hospital-gm998313080-270057937"
                >
                  iStockPhotos
                </a>
              </div>
            </div>
            <div className="w-10 lg:w-full lg:flex-1 text-center">
              <h1>Who are we?</h1>
              Since 2015, our team has envisioned a digital platform that
              revolutionizes the medical industry for both patients and medical
              professionals. Thanks to our efforts and the support of our
              investors, we have created {ORG_NAME}, the next-generation of
              Patient Engagement Platforms. Our headquarters are located in
              Vancouver, British Columbia, the traditional territory of the
              xʷməθkʷəy̓əm (Musqueam) Nation.
            </div>
          </div>
          <div
            style={{
              height: "5rem",
            }}
          ></div>
          <div className="my-8 text-center">
            <h1 className="mb-2">Meet The Team</h1>
            <div className="mb-2">
              Say hello to the team that brought you {ORG_NAME}
            </div>
            <div>
              <Image
                src="/WellnessWaveTeam.jpg"
                pt={{
                  image: {
                    className: "w-full md:w-8 border-round-xl",
                  },
                }}
                alt="The WellnessWave Team"
              />
              <div className="text-xs">
                Photo from{" "}
                <a
                  className="text-primary-500"
                  target="_blank"
                  href="https://www.interiorhealth.ca/media/interior-health-paving-way-medical-leadership-training"
                >
                  InteriorHealth
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10 mx-auto mb-8">
          <h1 className="text-center">Proud Investors</h1>
          <div className="grid">
            {Investors.map((investor) => (
              <InvestorTemplate
                key={investor.name.replace(/ /g, "")}
                investor={investor}
              />
            ))}
          </div>
          <div className="flex flex-column align-items-center">
            <div className="text-xl font-bold">AND</div>
            <InvestorTemplate investor={CustomerInvestor} noRound />
          </div>
        </div>

        <MobileAppPromo />
      </main>
    </div>
  );
}

const InvestorTemplate = ({ investor, noRound = false }) => (
  <div className="col-6 md:col-3 border-round-top-sm">
    <a className="text-900 no-underline" href={investor.url ?? undefined} target="_blank">
      <div className="flex flex-column align-items-center">
        <div>
          <Image
            pt={{
              image: {
                className: noRound ? undefined : "border-circle",
              },
            }}
            width="96px"
            height="96px"
            src={investor.image}
          />
        </div>
        <div className="font-bold text-lg text-center">{investor.name}</div>
        <div className="text-md text-center">{investor.positionAndCompany}</div>
      </div>
    </a>
  </div>
);
