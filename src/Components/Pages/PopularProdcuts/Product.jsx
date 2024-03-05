import star from '../../../assets/icons/star.svg'

const Product = ({ product }) => {


    const { imgURL, name, price } = product || {}


    return (
        <div className="mx-auto">
            <div className="flex flex-1 flex-col w-full max-sm:w-full ">
                <img className="w-[280px] h-[280px] " src={imgURL} alt="" />

                <div className="mt-8 flex justify-start gap-2.5 ">
                    <img src={star} width={24} height={24} alt="" />
                    <p className='text-xl leading-normal'>4.5</p>
                </div>
                <div>
                    <h3 className='mt-2 text-2xl leading-normal font-semibold '>{name}</h3>
                    <p className='mt-2 font-semibold text-orange-600 text-xl leading-normal'>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;