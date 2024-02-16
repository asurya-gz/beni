import NavbarAtas from "./components/NavbarAtas";
import Introduction from "./components/Introduction";
import IniFooter from "./components/IniFooter";
import IniGalery from "./components/IniGalery";
import Produk from "./components/Produk";
import Peta from "./components/Peta";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <NavbarAtas />
      <div id="home">
        <Introduction />
      </div>
      <div id="product">
        <Produk />
      </div>
      <div id="galery">
        <IniGalery />
      </div>
      <div>
        <Peta />
      </div>
      <IniFooter />
    </div>
  );
}
