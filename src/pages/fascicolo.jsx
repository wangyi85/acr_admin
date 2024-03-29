import { Helmet } from 'react-helmet-async';

import { FascicoloView } from "../sections/fascicolo/view";

// ----------------------------------------------------------------------

export default function FascicoloPage() {
  return (
    <>
      <Helmet>
      <title> Fascicolo Dev - RadioMonitor </title>
      </Helmet>

      <FascicoloView />
    </>
  );
}
