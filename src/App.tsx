import { Features, Footer, Header, Hero } from "./Views";
import Theme from "./themes";
import useStore from "./store";

function App() {
  const { isOpen } = useStore();

  return (
    <Theme>
      <div style={{ position: isOpen ? "fixed" : "static" }}>
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
