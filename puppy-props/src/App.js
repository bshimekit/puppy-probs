import react, {Component} from "react"
import "./App.css";
import Header from "./Components/Header/Header";
import BannerSection from "./Components/Sections/Banner/BannerSection";
import ThreePuppy from "./Components/Sections/ThreePuppys/ThreePuppy";
import TwoPuppy from "./Components/Sections/TwoPuppys/TwoPuppy";
import Footer from "./Components/Footer/Footer";
class App extends Component {
  render(){
  return (
    <div>
      <Header/>
      <BannerSection/>
      <ThreePuppy/>
      <TwoPuppy/>
      <Footer/>
    </div>
  )
  }
}

export default App;
