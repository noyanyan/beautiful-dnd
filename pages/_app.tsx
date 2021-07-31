import 'tailwindcss/tailwind.css';

type Props = {
  Component: React.FC<any>;
  pageProps: unknown;
};

const MyApp = ({ Component, pageProps }: Props): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
