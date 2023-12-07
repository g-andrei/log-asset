import { Features, Footer, Header, Hero } from ".";
import useStore from "../store";

const AppLayout = () => {
  const { isOpen } = useStore();
  return (
    <div style={{ position: isOpen ? "fixed" : "static" }}>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default AppLayout;
