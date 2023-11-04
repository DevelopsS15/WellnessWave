import '../styles/global.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import SiteLayout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <SiteLayout>
                <Component {...pageProps} />
            </SiteLayout>
        </PrimeReactProvider>
    );
}