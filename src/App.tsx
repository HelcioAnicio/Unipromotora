import { Header } from "./components/header";
import { Apresentation } from "./components/apresentation";
import { Caroussel } from "./components/caroussel";
import { Credit } from "./components/credit";
import { Steps } from "./components/steps";
import { Future } from "./components/future";
import { Form } from "./components/form";
import { Footer } from "./components/footer";
import { Cards } from "./components/cards";
import { Benefits } from "./components/benefits";

function App() {
  return (
    <>
      <Header />
      <main className="m-auto flex w-full flex-col items-center justify-center gap-16">
        <Apresentation />
        <Caroussel />
        <Credit />
        <Cards />
        <Benefits />
        <Steps />
        <Future />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
