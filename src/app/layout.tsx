import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Next.js Test task',
   icons: {
    icon: {
      url: '/icon2.ico',
      type: 'image/x-icon',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" 
      suppressHydrationWarning
      data-gramm="false" 
      data-gramm_editor="false" 
      data-enable-grammarly="false"
    >
      <body 
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      >
        <Header />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}