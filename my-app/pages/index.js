import NavBar from '../components/NavBar/NavBar';
import Homes from '../components/Home/Home';
import Utility from '../components/Utility/Utility';
import About from '../components/About/About';
import Team from '../components/Team/Team';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import GetNft from '../components/GetNft/GetNft';
import Roadmap from '../components/Roadmap/Roadmap';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Homes />
      <Utility />
      <About />
      <Team />
      <Roadmap />
      <Faq />
      <GetNft />
      <Footer />
    </div>
  );
}
