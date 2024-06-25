import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Education from "../../Components/Education/Education";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";




const Home = () => {
    return (
        <div className="container w-10/12 mx-auto">
            <Banner/>
            <AboutMe/>
            <Skills/>
            <ContactMe/>
            <Education/>
            <Projects/>
        </div>
    );
};

export default Home;