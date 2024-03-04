import Hero from "../Header/Hero/Hero";
import Nav from "../Header/Nav";
import PopularProducts from "../PopularProdcuts/PopularProducts";

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

            <section className="padding-x py-10">
                services
            </section>

            <section className="padding">special offer</section>

            <section className="padding bg-pale-blue">Customer Reviews</section>

            <section className="padding-x sm:py-32 py-16 w-full">subscriber</section>

            <section className="padding-x padding-t  pb-8  bg-black ">footer</section>

        </div>
    );
};

export default Home;