import Hero from "../Header/Hero/Hero";
import Nav from "../Header/Nav";
import Offers from "../Offers/Offers";
import PopularProducts from "../PopularProdcuts/PopularProducts";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import SuperQuality from "../SuperQuality/SuperQuality";

const Home = () => {
    return (
        <div>
            <main className="relative">
                <Nav />
            </main>

            <section className="xl:padding-1 wide:padding-r padding-b">
                <Hero></Hero>
            </section>

            <section className=" padding">
                <PopularProducts></PopularProducts>
            </section>

            <section className="padding">
                <SuperQuality></SuperQuality>
            </section>

            <section className="padding">
                <Services></Services>
            </section>



            <section className="padding"><Offers></Offers></section>

            <section className="padding bg-pale-blue"><Review></Review></section>

            <section className="padding-x sm:py-32 py-16 w-full"><Subscribe></Subscribe></section>

            <section className="padding-x padding-t  pb-8  bg-black ">footer</section>

        </div>
    );
};

export default Home;