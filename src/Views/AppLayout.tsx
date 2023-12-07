import { Features, Footer, Header, Hero, Testimonials } from ".";
import useStore from "../store";

const AppLayout = () => {
  const { isOpen } = useStore();
  return (
    <div style={{ position: isOpen ? "fixed" : "static" }}>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AppLayout;
