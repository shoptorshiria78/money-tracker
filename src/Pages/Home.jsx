import Banner from "../Component/Banner";
import FAQ from "../Component/FAQ";
import WhyUs from "../Component/WhyUs";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;