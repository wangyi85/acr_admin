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
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'acr result',
    path: '/acr',
    icon: icon('ic_cart'),
  },
  {
    title: 'Null Result',
    path: '/risultatinull',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
