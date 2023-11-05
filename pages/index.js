import Head from 'next/head';
import { ORG_EMAIL, ORG_NAME, ORG_PHONE_NUMBER_FORMATTED } from '../components/global';
import { Image, Image as PRImage } from 'primereact/image';
import { Divider } from "primereact/divider"
import { useState } from 'react';
import { useInterval } from 'primereact/hooks';
import { useSpring, animated } from '@react-spring/web';
import { Button } from 'primereact/button';
import Link from 'next/link';
import { InputText } from 'primereact/inputtext';
import { Rating } from "primereact/rating";
import { InputMask } from 'primereact/inputmask';
import { classNames } from 'primereact/utils';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{ORG_NAME}</title>
        <link rel="icon" href="/WellnessWave256x256.png" />
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <div className='relative overflow-x-hidden'>
          <PRImage src='/medical_office.jpg' style={{
            filter: "brightness(40%)"
          }} />
          <div className='absolute w-full mx-auto' style={{ top: 0, left: 0 }}>
            <div className='flex flex-column justify-content-center align-items-center text-50' style={{ height: 720 }}>
              <div className="text-6xl font-bold">WellnessWave</div>
              <div className='text-3xl'>The Missing Piece for Better Patient Care</div>
              <div className='mt-2'>
                <Link href={"/signup"}>
                  <Button label='Get Started' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='text-xs text-center'>
          Photo by <a className='text-primary-500' href="https://unsplash.com/@mdominguezfoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Martha Dominguez de Gouveia</a> on <a className='text-primary-500' href="https://unsplash.com/photos/white-concrete-counter-stand-nMyM7fxpokE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>

        <div className='flex w-10 mx-auto my-6 gap-6'>
          <div className='text-xl w-full flex-1 flex flex-column align-items-center justify-content-center'>
            <div>
              {ORG_NAME} aims to simplify the healthcare for the millions of patients across North America by providing easy to navigate, secure web and mobile applications.
            </div>
            <div className='mt-6 text-center flex flex-column align-items-center'>
              Rated #1 in North America*
              <Rating className='mt-2' pt={{
                onIcon: {
                  style: {
                    width: "1.5rem",
                    height: "1.5rem"
                  }
                }
              }} value={5} readOnly cancel={false} />
            </div>
            <div className='mt-2 text-xs'>
              *According to 2023 Forbes research
            </div>
          </div>
          <div className='flex-1'>
            <PRImage pt={{
              image: {
                style: { width: "100%", borderRadius: "1.5rem 0.25rem 1.5rem 0.25rem" }
              }
            }} src='/DoctorPatientImageWide.jpg' />
            <div className='text-xs'>Photo by <a className='text-primary-500' href="https://unsplash.com/@nci">National Cancer Institute</a> on <a className='text-primary-500' href="https://unsplash.com/photos/womens-red-button-up-collared-long-sleeved-shirt-NNpo-liY5aU">Unsplash</a>
            </div>
          </div>
        </div>

        <div className='w-10 mx-auto'>
          <Divider />
        </div>

        <SupportedCompanyLogos />

        <div className='my-6 text-xl w-10 mx-auto text-center'>
          The healthcare process is complicated, but it doesn't have to be.
          Thanks to {ORG_NAME}, both providers and patients can be better involved in providing a better, collaborative experience in the healthcare industry.
          Goodbye to confusing diagnostic and medical reports, prodecures, and prescriptions. Say hello to the future.
        </div>

        <div className='w-10 mb-4 text-xl max-w-30rem mx-auto text-center'>
          Subscribe to receive our monthly newsletter.
          <div className="mt-2 p-inputgroup flex-1">
            <InputText placeholder={ORG_EMAIL} type='email' />
            <Button label='Submit' className="p-button-primary" />
          </div>
        </div>

        <div className='w-10 mx-auto'>
          <Divider />
        </div>

        <div className='w-10 mx-auto mb-6'>
          <h1 className='text-center'>Statistics</h1>
          <div className='flex gap-6'>
            <div className='p-3 surface-200 text-center flex-1 border-round-md'>
              <div className='text-4xl text-primary-500 font-bold'>78%</div>
              <div className='text-xl'>Greater Patient Involvement</div>
            </div>
            <div className='p-3 surface-200 text-center flex-1 border-round-md'>
              <div className='text-4xl text-primary-500 font-bold'>2,000,000+</div>
              <div className='text-xl'>Daily Patients</div>
            </div>
            <div className='p-3 surface-200 text-center flex-1 border-round-md'>
              <div className='text-4xl text-primary-500 font-bold'>132</div>
              <div className='text-xl'>Supported Providers</div>
            </div>
          </div>
        </div>

        <div className='w-10 mx-auto mb-6'>
          <h1 className='text-center'>Features</h1>
          <div className='flex gap-6'>
            <FeatureBox icon="pi-clock" title="Time Management" message={"Save yourself time trying to find the information important for you. Our UI and advanced search eases the entire process."} />
            <FeatureBox icon="pi-lock" title="Security" message={"We continously test our systems with third-party cybersecurity specialists and perform bi-annually security audits to secure your data from cyberattacks."} />
            <FeatureBox icon="pi-book" title="Regulations" message={"Our team strictly adheres to HIPPA and GDRP standards and regulations to protect your data."} />
          </div>
          <div className='flex gap-6 mt-4'>
            <FeatureBox icon="pi pi-clock" title="Feature #1" message={"Message"} />
            <FeatureBox icon="pi pi-clock" title="Feature #1" message={"Message"} />
            <FeatureBox icon="pi pi-clock" title="Feature #1" message={"Message"} />
          </div>
          <div className='mt-2 text-center'>Missing feature? <Link className='text-primary-500' href={"/contactus"}>Request it</Link></div>
        </div>

        <div className='w-10 mx-auto'>
          <Divider />
        </div>

        <div>
          <h1 className='text-center'>Testimonials</h1>
          <ProductReview />
        </div>

        <div className='w-10 mx-auto'>
          <Divider />
        </div>

        <div className='text-xl mx-auto max-w-30rem mb-4 flex flex-column align-items-center text-center'>
          Download the {ORG_NAME} app today.
          <div className='mt-2'>
            <Image height='48px' src='/iphone_app_store.png' />
            <Image className='ml-2' height='48px' src="android_play_store.png" />
          </div>
          <Divider className='w-full my-1' align="center">OR</Divider>
          Get the link to your phone
          <div className="mt-2 p-inputgroup flex-1">
            <InputMask mask="(999) 999-9999" placeholder={ORG_PHONE_NUMBER_FORMATTED} />
            <Button label='Submit' className="p-button-primary" />
          </div>
        </div>

      </main>
    </div>
  );
}

function FeatureBox({ icon, title, message }) {
  return (<div className='flex-1 p-3 surface-200 border-round-lg'>
    <div className='flex align-items-center gap-2 text-2xl mb-2 text-primary-500 font-bold'>
      <div className={classNames("pi", "text-2xl", icon)}></div>
      <div>{title}</div>
    </div>
    <div>{message}</div>
  </div>)
}

function SupportedCompanyLogos() {
  const TotalHeight = "96px";
  return (<>
    <h1 className='text-center text-2xl mb-4'>OVER 100 SUPPORTED HEALTHCARE PROVIDERS</h1>
    <div className="tech-slideshow" style={{ height: TotalHeight }}>
      <div className="mover-1" style={{ height: TotalHeight }}>
        <div className='w-max flex align-items-center gap-8' style={{ height: TotalHeight }}>
          <Image height={TotalHeight} src='/HealthcareProviders/Aetna.jpg' />
          <Image height={TotalHeight} src='/HealthcareProviders/CarePlusHealthPlans.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/Cigna.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/Cority.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/CoventryHealthCare.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/FreedomHealth.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/Humana.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/MedavieBlueCross.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/OptimaHealth.webp' />
          <Image height={TotalHeight} src='/HealthcareProviders/OptimumHealthCare.webp' />
          <Image height={TotalHeight} src='/HealthcareProviders/ReedGroup.png' />
          <Image height={TotalHeight} src='/HealthcareProviders/WellCareHealthPlans.png' />
        </div>
      </div>
    </div>
  </>)
}

function ProductReview() {

  const Reviews = [{
    name: "Samuel Shull",
    image: "/SamuelShull.jpg",
    positionAndCompany: `CEO of ${ORG_NAME}`,
    message: `${ORG_NAME} set out to be the next generation of Patient Engagement Platforms.
    Our team and I strongly believe we have achieved more than that.`
  }, {
    name: "Mohammed Al Nakshabandi",
    image: "/UFV_Logo.jpg",
    positionAndCompany: `Employee of UFV`,
    message: `Thanks to ${ORG_NAME}, we're delivering top-notch service and seeing remarkable growth in our healthcare practice.`
  }, {
    name: "Walter White",
    image: "/BryanCranston.jpg",
    positionAndCompany: `Co-Founder of Gray Matter Technologies`,
    message: `Gray Matter Technologies focuses on pushing boundaries and changing lives. ${ORG_NAME}'s patient engagement platform does the same.`
  }, {
    name: "Elon Musk",
    image: "/ElonMusk.jpg",
    positionAndCompany: "CEO of Tesla, X, & SpaceX",
    message: `Like Tesla's innovation in electric vehicles, ${ORG_NAME} has been a game-changer for the leading medicial providers who are building a better experience for healthcare.`
  }]

  const ActiveMessageInterval = 10;
  const [activeMessage, setActiveMessage] = useState(2);
  useInterval(() => {
    setActiveMessage((prev) => prev == Reviews.length - 1 ? 0 : prev + 1);
  }, ActiveMessageInterval * 1000, true);

  const review = Reviews[activeMessage];
  return (<div className='mx-auto max-w-30rem surface-200 border-round-top-sm'>
    <div className='flex flex-column align-items-center p-4'>
      <div><Image pt={{
        image: {
          className: "border-circle"
        }
      }} width='96px' height='96px' src={review.image} /></div>
      <div className='font-bold text-lg'>{review.name}</div>
      <div className='text-md'>{review.positionAndCompany}</div>
      <Divider className='my-2' />
      <div>{review.message}</div>
    </div>
    <FillBar duration={ActiveMessageInterval} />
  </div>)
}

const FillBar = ({ duration, isPaused = false }) => {
  const fillAnimation = useSpring({
    from: { width: '0%' },
    to: async (next) => {
      while (true) {
        await next({ width: '100%', config: { duration: duration * 1000 } });
        await next({ width: '0%', config: { duration: 0 } });
      }
    },
    pause: isPaused ?? false,
    reset: true,
  });

  return (
    <div className='w-full' style={{ height: '3px', backgroundColor: 'var(--surface-100)' }}>
      <animated.div
        style={{
          width: fillAnimation.width,
          height: '100%',
          backgroundColor: 'var(--primary-500)',
        }}
      />
    </div>
  );
};