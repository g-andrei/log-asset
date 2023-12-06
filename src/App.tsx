import { Features, Header, Hero } from "./Views";
import Theme from "./themes";

function App() {
  return (
    <Theme>
      <Header />
      <Hero />
      <Features />
    </Theme>
  );
}

export default App;
