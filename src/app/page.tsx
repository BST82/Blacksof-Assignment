import ClientOnly from './components/layout/ClientOnly';  


import VideoHome from './components/pages/VideoHome';
import VehicleAnimation from './components/pages/VehicleAnimation';
import ContactForm from './components/pages/ContactForm';


export default function HomePage() {
  return (
    <>
      <ClientOnly>
        <VideoHome />
        <VehicleAnimation />
        <ContactForm />
      </ClientOnly>
      {/* Other page content */}
    </>
  );
}