import AboutMe from '../AboutMe';
import HeroSection  from '../HeroSection';
import MySkills from '../MySkills';
import MyPortfolio from '../MyPortofolio';
import Testmonial from '../Testmonials';
import ContactMe from '../ContactMe';
import Footer from '../Footer';
export default function Home (){
    return(
        <div>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
        <Testmonial/>
        <ContactMe/>
        < Footer/>
        </div>
    )
}