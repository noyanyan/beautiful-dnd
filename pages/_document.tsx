import { GetServerSideProps } from 'next';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { resetServerContext } from 'react-beautiful-dnd';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
// const MyDocument = () => {
//   return (<Html lang="ja">
//     <Head>
//       <meta charSet="utf-8" />
//       <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta name="theme-color" content="#000000" />
//       <meta
//         name="description"
//         content="Web site created using create-react-app"
//       />
//       <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
//       <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

//       <title>React App</title>
//     </Head>
//   </Html>);
// };
