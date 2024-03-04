
const Product = ({ product }) => {


    const { imgURL, name, price } = product || {}


    return (
        <div className="mx-auto">
            <div>
                <img src={imgURL} alt="" />
            </div>
            <div className="flex justify-between px-2 pt-2 text-xl ">
                <h3 className="text-pink-500">{name}</h3>
                <p className="text-blue-700 font-bold">{price}</p>
            </div>
        </div>
    );
};

export default Product;