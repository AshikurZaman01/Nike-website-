
const ServiceCard = ({ service }) => {

    const { imgURL, label, subtext } = service || {};

    return (
        <div>
            <section className='flex-1 sm:w-[350px] sm:min-w-[350px] h-[350px] w-full rounded-[20px] bg-base-300 shadow-3xl px-10 py-16'>
                <div className='w-11 h-11 flex justify-center items-center  rounded-full'>
                    <span className="text-3xl text-orange-600">{imgURL}</span>
                </div>
                <div>
                    <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
                        {label}
                    </h3>
                    <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
                        {subtext}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ServiceCard;