import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='max-w-[600px] mx-auto bg-emerald-600 p-8'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
