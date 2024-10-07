import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Koti from "./pages/koti";
import Esittely from "./pages/esittely";
import Palvelut from "./pages/palvelut";
import Yhteystiedot from "./pages/yhteystiedot";

export default function Home() {
  return (
    <main className="flex flex-col text-text">
      <div className="fixed w-screen"><Navbar/></div>
      <Koti/>
      <Esittely id="1"/>
      <Palvelut id="2"/>
      <Yhteystiedot id="4"/>
      <Footer/>
    </main>
  );
}
