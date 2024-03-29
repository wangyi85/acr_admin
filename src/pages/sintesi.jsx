import { Helmet } from 'react-helmet-async';

import {SintesiView} from "../sections/sintesi/view";

// ----------------------------------------------------------------------

export default function SintesiPage() {
    return (
        <>
            <Helmet>
                <title> Sintesi | ACR Admin </title>
            </Helmet>

            <SintesiView />
        </>
    );
}
