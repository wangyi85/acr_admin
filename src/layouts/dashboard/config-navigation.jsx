import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
    role:3
  },
 
  {
    title: 'Utenti & status  ',
    path: '/user',
    icon: icon('ic_user'),
    role:2
  },
  {
    title: 'Controllo Utenti RTV ',
    path: '/acr',
    icon: icon('ic_user'),
    role:2
  },
  {
    title: 'Sintesi',
    path: '/sintesi',
    icon: icon('ic_analytics'),
    role:1
  },
  {
    title: 'Crossmediale',
    path: '/crossmediale',
    icon: icon('ic_analytics'),
    role:2
  },
  {
    title: 'Monitoraggio',
    path: '/monitoring',
    icon: icon('ic_analytics'),
    role:2
  },
  {
    title: 'Fascicolo Interno RTV',
    path: '/fascicolorev',
    icon: icon('ic_analytics'),
    role:2
  },
  { /*
    title: 'Analisi Xmediale',
    path: '/crossmediale',
    icon: icon('ic_analytics'),
    role:2 */
  },
  {
    title: 'Download',
    path: '/risultatinull',
    icon: icon('ic_blog'),
    role:2
  },
  
  {
    title: 'Palinsesti RAI',
    path: '/palinsestom',
    icon: icon('ic_blog'),
    role:1
  },
];

export default navConfig;
