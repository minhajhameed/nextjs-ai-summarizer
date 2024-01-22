import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@lib/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sumz AI',
  description: 'Summarize Articles with OpenAI GPT-4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
