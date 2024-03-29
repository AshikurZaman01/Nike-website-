import offer from "../../../assets/images/offer.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import Button from "../../Button/Button";

const Offers = () => {
    return (
        <div>
            <section className="flex  items-center max-xl:flex-col-reverse gap-10 max-container">
                <div className="flex-1">
                    <img className="object-contain w-full" src={offer} width={773} height={87} alt="" />
                </div>

                <div className='flex flex-1 flex-col'>
                    <h2 className='text-4xl font-bold'>
                        <span className='text-orange-600'>Special </span>
                        Offer
                    </h2>
                    <p className='mt-4 info-text'>
                        Embark on a shopping journey that redefines your experience with
                        unbeatable deals. From premier selections to incredible savings, we
                        offer unparalleled value that sets us apart.
                    </p>
                    <p className='mt-6 info-text'>
                        Navigate a realm of possibilities designed to fulfill your unique
                        desires, surpassing the loftiest expectations. Your journey with us is
                        nothing short of exceptional.
                    </p>
                    <div className='mt-11 flex flex-wrap gap-4'>
                        <Button label='Shop now' iconURL={arrowRight} />
                        <Button
                            label='Learn more'
                            backgroundColor='bg-white'
                            borderColor='border-slate-gray'
                            textColor='text-slate-gray'
                        />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Offers;