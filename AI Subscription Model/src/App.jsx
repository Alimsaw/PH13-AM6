import './App.css'
import Banner from "./component/Banner";
import NavBar from "./component/NavBar";
import User from "./component/User";
import GetStarted from "./component/GetStarted";
import Package from "./component/Package";
import Footer from "./component/Footer";
import Models from "./component/Models";

const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}

const modelPromise = getModels()


function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <User/>
      <Models modelPromise={modelPromise}/>
      <GetStarted/>
      <Package/>
      <Footer/>
    </>
  );
}

export default App
