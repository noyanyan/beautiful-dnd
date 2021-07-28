import 'tailwindcss/tailwind.css';

type Props = {
  Component: React.FC<any>;
  pageProps: unknown;
};
function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default MyApp;
