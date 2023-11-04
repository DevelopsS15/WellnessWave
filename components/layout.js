
import NavBar from './NavBar'
import Footer from './Footer'
import { Message } from 'primereact/message'
import { ORG_NAME } from './global'

export default function SiteLayout({ children }) {
    return (
        <>
            <Message className='w-full' severity='warn' text={`${ORG_NAME} is still under development`} />
            <NavBar />
            {children}
            <Footer />
        </>
    )
}