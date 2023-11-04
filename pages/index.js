import Head from 'next/head';
import { ORG_NAME } from '../components/global';
import { Image, Image as PRImage } from 'primereact/image';
import ContactForm from '../components/ContactForm';
import { Divider } from "primereact/divider"
import { useRef, useState } from 'react';
import { useInterval } from 'primereact/hooks';
import { useSpring, animated } from '@react-spring/web';
import { Button } from 'primereact/button';
import Link from 'next/link';

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
              <div className='text-3xl'>Your Missing Piece for Medical Excellence</div>
              <div className='mt-2'>
                <Link href={"/signup"}>
                  <Button label='Get Started' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='w-10 my-4 flex gap-6 justify-content-center mx-auto'>
          <div className='p-3 surface-200 text-center flex-1 border-round-md'>
            <div className='text-4xl text-primary-500 font-bold'>5,000hr+</div>
            <div className='text-xl'>Time Saved Annually</div>
          </div>
          {/* <div className='flex align-items-center mx-3 surface-200' style={{ height: 79, width: 2 }}></div> */}
          <div className='p-3 surface-200 text-center flex-1 border-round-md'>
            <div className='text-4xl text-primary-500 font-bold'>2,000,000+</div>
            <div className='text-xl'>Appointments Per Year</div>
          </div>
          <div className='p-3 surface-200 text-center flex-1 border-round-md'>
            <div className='text-4xl text-primary-500 font-bold'>410</div>
            <div className='text-xl'>Certified Clients</div>
          </div>
        </div>

        <div className='w-10 mx-auto'>
          <Divider />
        </div>

        <SupportedCompanyLogos />

        <div className='w-10 mx-auto'>
          <Divider />
        </div>

        <ProductReview />

        <div className='w-10 mx-auto'>
          <Divider />
        </div>

        <div className='max-w-30rem my-4 border-round-lg mx-auto surface-100 p-5'>
          <h1 className="block">Contact Us</h1>
          <ContactForm />
        </div>
        {/* Photo by <a href="https://unsplash.com/@mdominguezfoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Martha Dominguez de Gouveia</a> on <a href="https://unsplash.com/photos/white-concrete-counter-stand-nMyM7fxpokE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */}
      </main>
    </div>
  );
}

function SupportedCompanyLogos() {
  const CompanyParentDiv = useRef(null);
  const animationProps = useSpring({
    from: { left: 0 },
    to: async (next) => {
      while (true) {
        await next({ left: -1 * (CompanyParentDiv.current?.offsetWidth) + window.innerWidth });
        await next({ left: 0 });
      }
    },
    config: { duration: 30_000 }
  });

  return (<>
    <div className='text-center text-2xl font-bold mb-2'>Join one of the hundreds of companies using {ORG_NAME}</div>
    <div className='overflow-hidden'>
      <animated.div
        style={{
          position: 'relative',
          left: animationProps.left,
        }}
      >
        <div ref={CompanyParentDiv} className='w-max flex align-items-center gap-8'>
          <Image src='/Companies/UFV.png' />
          <Image src='/Companies/HamdardWellness.webp' />
          <Image src='/Companies/RamaiahMemorial.webp' />
          <Image src='/Companies/Ovum.webp' />
          <Image src='/Companies/NeoHospital.webp' />
          <Image src='/Companies/Momme.png' />
          <Image src='/Companies/Milann.webp' />
          <Image src='/Companies/KangarooCare.webp' />
          <Image src='/Companies/HosmatHospital.webp' />
          <Image src='/Companies/ChetanaHospital.webp' />
        </div>
      </animated.div>
    </div>
  </>)
}

function ProductReview() {

  const Reviews = [{
    name: "Samuel Shull",
    image: "/UFV_Logo.jpg",
    positionAndCompany: `CEO of ${ORG_NAME}`,
    message: `${ORG_NAME} set out to be the next generation of PMS.
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
    message: `Gray Matter Technologies focuses on pushing boundaries and changing lives. ${ORG_NAME}'s patient management does the same.`
  }, {
    name: "Elon Musk",
    image: "/ElonMusk.jpg",
    positionAndCompany: "CEO of Tesla, SpaceX, X",
    message: `Like Tesla's innovation in electric vehicles, ${ORG_NAME} has been a game-changer for our partners.`
  }]

  const ActiveMessageInterval = 10;
  const [activeMessage, setActiveMessage] = useState(2);
  useInterval(() => {
    setActiveMessage((prev) => prev == Reviews.length - 1 ? 0 : prev + 1);
  }, ActiveMessageInterval * 1000, true);

  const review = Reviews[activeMessage];

  return (<>
    <div>
      <div className='mx-auto max-w-30rem surface-200 border-round-top-sm'>
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
      </div>

    </div>
  </>)
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