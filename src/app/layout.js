import './css/globals.css';
import LenisProvider from './providers/LenisProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
