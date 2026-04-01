import './App.css'
import { useState } from "react";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import User from "./component/User";
import GetStarted from "./component/GetStarted";
import Package from "./component/Package";
import Footer from "./component/Footer";
import Models from "./component/Models";
import Cart from "./component/Cart";
import { ToastContainer } from "react-toastify";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
}

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar carts={carts} />
      <Banner />
      <User />

      <div className="tabs tabs-box justify-center bg-transparent mt-6">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 checked:bg-[#422ad5] checked:text-white"
          aria-label="Products"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 checked:bg-[#422ad5] checked:text-white"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && (
        <Models getModels={getModels} carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <GetStarted />
      <Package />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;