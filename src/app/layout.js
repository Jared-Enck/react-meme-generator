import './globals.css';
import { Anton } from 'next/font/google';
import { store } from '../redux/store';
import ReduxProvider from '@/redux/ReduxProvider';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'React Memes',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={anton.className}>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </body>
    </html>
  );
}
