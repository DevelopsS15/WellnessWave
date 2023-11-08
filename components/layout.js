import { Message } from 'primereact/message'
import { ScrollTop } from 'primereact/scrolltop';
import NavBar from './NavBar'
import Footer from './Footer'
import { ORG_EMAIL, ORG_NAME, ORG_PHONE_NUMBER } from './global'
import HelpChatOverlay from './HelpChatOverlay';

export default function SiteLayout({ children }) {

    return (
        <>
            <ScrollTop />
            <HelpChatOverlay />
            <Message className='w-full' severity='warn' text={`${ORG_NAME} is still under development`} />
            <NavBar />
            {children}
            <Footer />
        </>
    )
}