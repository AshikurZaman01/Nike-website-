import Button from "../../../Button/Button";
import rightArrow from "../../../../assets/icons/arrow-right.svg";

const Hero = () => {

    const statistics = [
        { value: '1k+', label: 'Brands' },
        { value: '500+', label: 'Shops' },
        { value: '250k+', label: 'Customers' },
    ];

    return (
        <div>

            <section id="home" className="w-full flex xl:flex-row flex-col  justify-center min-h-screen g-10 max-container">
                <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

                    <p className="text-xl text-orange-500">Our Summer Collections</p>

                    <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
                            The New Arrival
                        </span>
                        <br />
                        <span className='text-orange-600 inline-block mt-3'>Nike</span> Shoes
                    </h1>

                    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                        Discover stylish Nike arrivals, quality comfort, and innovation for
                        your active life.
                    </p>

                    <div>
                        <Button label="Shop Now" iconURL={rightArrow}></Button>
                    </div>

                    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                        {
                            statistics.map((stat, indx) => {
                                return (
                                    <div key={indx}>
                                        <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                                        <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Hero;