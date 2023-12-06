import { Features, Footer, Header, Hero } from "./Views";
import Theme from "./themes";

function App() {
  return (
    <Theme>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </Theme>
  );
}

export default App;
