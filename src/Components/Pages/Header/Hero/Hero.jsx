import Button from "../../../Button/Button";
import rightArrow from "../../../../assets/icons/arrow-right.svg";
import big01 from "../../../../assets/images/big-shoe1.png";
import big02 from "../../../../assets/images/big-shoe2.png";
import big03 from "../../../../assets/images/big-shoe3.png";
import ShoeCard from "../../../ShoeCard/ShoeCard";

import thumbnailShoe1 from "../../../../assets/images/thumbnail-shoe1.svg";
import thumbnailShoe2 from "../../../../assets/images/thumbnail-shoe2.svg";
import thumbnailShoe3 from "../../../../assets/images/thumbnail-shoe3.svg";
import { useState } from "react";


const Hero = () => {

    const statistics = [
        { value: '1k+', label: 'Brands' },
        { value: '500+', label: 'Shops' },
        { value: '250k+', label: 'Customers' },
    ];

    const shoes = [
        {
            thumbnail: thumbnailShoe1,
            bigShoe: big01,
        },
        {
            thumbnail: thumbnailShoe2,
            bigShoe: big02,
        },
        {
            thumbnail: thumbnailShoe3,
            bigShoe: big03,
        },
    ];

    const [bigShoe, setBigShoe] = useState(shoes[0].bigShoe);

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

                    <p className=' text-slate-gray text-lg leading-8 mt-6 mb-6 sm:max-w-sm'>
                        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                    </p>

                    <div>
                        <Button label="Shop Now" iconURL={rightArrow}></Button>
                    </div>

                    <div className="flex justify-start items-start flex-wrap w-full mt-9 gap-16">
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

                <div className="relative flex  justify-center items-center xl:min-h-screen max-xl:py-40  bg-cover bg-center">
                    <img src={big01} width={500} height={400} className="object-contain relative z-10" alt="" />

                    <div className="flex sm:gap-6  gap-4 absolute -bottom-[5%]">
                        {
                            shoes.map((shoe, indx) => {
                                return (
                                    <div key={indx}>
                                        <ShoeCard imgURL={shoe} changeBigShoeImg={(shoe) => setBigShoe(shoe)} bigShoeImg={bigShoe}></ShoeCard>
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