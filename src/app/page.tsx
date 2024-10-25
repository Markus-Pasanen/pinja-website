import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Koti from "./pages/koti";
import Esittely from "./pages/esittely";
import Palvelut from "./pages/palvelut";
import Ajankohtaista from "./pages/ajankohtaista";
import Yhteystiedot from "./pages/yhteystiedot";

export default function Home() {
  return (
    <main className="flex flex-col text-text gap-96">
      <div className="fixed w-screen z-50"><Navbar/></div>
      <Koti id="0"/>
      <Esittely id="1"/>
      <Palvelut id="2"/>
      <Ajankohtaista id="3"/>
      <Yhteystiedot id="4"/>
      <Footer/>
    </main>
  );
}
